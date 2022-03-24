import { createAction, props } from "@ngrx/store";
import { MealModel } from "../models/meal.model";

export const setMainlyDish = createAction('[MainSystem] Set Mainly Dish', props<{mainlyDish: MealModel}>());
export const unsetMainlyDish = createAction('[MainSystem] Unset Mainly Dish');
