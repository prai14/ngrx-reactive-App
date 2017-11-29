

export interface UiState {
    userId:number;
    currentThreadId: number;
    currentError?: string;
}


export const INITIAL_UI_STATE: UiState = {
    userId: 1,
    currentThreadId: undefined
};