import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";

//root-reducer (Combination of all reducers)
export const rootReducer = combineReducers({
    user: userReducer,
})