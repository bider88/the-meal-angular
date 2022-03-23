import { createReducer, on } from "@ngrx/store";
import { AppState } from "../app.reducer";

export interface State {

}

export interface AppStateMainSystem extends AppState {
  mainSystem: State;
}

export const initialState: State = {

};

const mainSystemInternalReducer = createReducer(initialState,



);

export function mainSystemReducer(state: any, action: any) {
  return mainSystemInternalReducer(state, action);
}
