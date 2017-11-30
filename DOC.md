## Implementation Details
1. file: application-state.ts. It has two state (UI and store data).

Once user select any name from dropdown then it dispatch the action *SELECT_USER_ACTION*.
file: user-selection.component.ts

    onSelectUser(newUserId:number) {
        this.store.dispatch(new SelectUserAction(newUserId));
    }

2. This action will call the bellow reducer and effects- 
uiStateReducer.ts - will set the UiState.userId.

    function handleSelectUserAction(state: UiState, action: SelectUserAction) {

        const newUiState = Object.assign({}, state);

        newUiState.userId = action.payload;
        newUiState.currentThreadId = undefined;

        return newUiState;

    }

load-threads-effect.service.ts - this registered effect will call another action *LOAD_USER_THREADS_ACTION*.

    @Effect() newUserSelected$ : Observable<Action> = this.actions$
      .ofType<SelectUserAction>(SELECT_USER_ACTION)
      .debug("New user selected")
      .map(action =>  new LoadUserThreadsAction(action.payload));

3. Action *LOAD_USER_THREADS_ACTION*, it has another registered effect as below. It will load the user thread and dispatch new action *USER_THREADS_LOADED_ACTION*.

       @Effect() userThreads$: Observable<Action> = this.actions$
         .ofType<LoadUserThreadsAction>(LOAD_USER_THREADS_ACTION)
         .debug("action received")
         .switchMap(action => this.threadsService.loadUserThreads(action.payload))
         .debug("data received via the HTTP request")
         .map(allUserData => new UserThreadsLoadedAction(allUserData) );

4. Action *USER_THREADS_LOADED_ACTION*, it has below reducer handler, it will set the storeData state. 

file: uiStoreDataReducer.ts
         
     function handleLoadUserThreadsAction(state:StoreData, action: UserThreadsLoadedAction): StoreData {
        return {
            participants: _.keyBy(action.payload.participants, 'id'),
            messages: _.keyBy(action.payload.messages, 'id'),
            threads: _.keyBy(action.payload.threads, 'id')
        };
     }

file: thread-section.component.ts, has watchers on this storeData, Hence Any change in the state StoreData, will directly reflect into the thread-section.component.html component.
