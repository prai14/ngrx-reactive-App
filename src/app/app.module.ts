import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UserSelectionComponent} from './user-selection/user-selection.component';
import {ThreadSectionComponent} from './thread-section/thread-section.component';
import {ThreadListComponent} from './thread-list/thread-list.component';
import {ThreadsService} from "./services/threads.service";
import {StoreModule, combineReducers} from "@ngrx/store";
import {INITIAL_APPLICATION_STATE} from "./store/application-state";
import {EffectsModule} from "@ngrx/effects";
import {LoadThreadsEffectService} from "./store/effects/load-threads-effect.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {HomeComponent} from './home/home.component';

import {storeFreeze} from "ngrx-store-freeze";


import {uiState} from "./store/reducers/uiStateReducer";
import {storeData} from "./store/reducers/uiStoreDataReducer";


export const reducers = {
    uiState,
    storeData,
};


export const metaReducers = [storeFreeze];


@NgModule({
    declarations: [
        AppComponent,
        UserSelectionComponent,
        ThreadSectionComponent,
        ThreadListComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        StoreModule.forRoot(reducers, { initialState: INITIAL_APPLICATION_STATE}),
        EffectsModule.forRoot([
            LoadThreadsEffectService
        ]),
        StoreDevtoolsModule.instrument({maxAge: 25})
    ],
    providers: [
        ThreadsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}








