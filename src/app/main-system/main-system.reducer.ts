import { createReducer, on } from "@ngrx/store";
import { AppState } from "../app.reducer";
import { MealModel } from "../models/meal.model";
import { setMainlyDish, unsetMainlyDish } from "./main-system.actions";

export interface State {
  mainlyDish: MealModel | null
}

export interface AppStateMainSystem extends AppState {
  mainSystem: State;
}

export const initialState: State = {
  mainlyDish: null,
};

const mainSystemInternalReducer = createReducer(initialState,

  on(setMainlyDish, (state, {mainlyDish}) => ({ ...state, mainlyDish})),
  on(unsetMainlyDish, state => ({ ...state, mainlyDish: null})),

);

export function mainSystemReducer(state: any, action: any) {
  return mainSystemInternalReducer(state, action);
}
