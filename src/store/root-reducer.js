import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

//root-reducer (Combination of all reducers)
export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart:cartReducer,
})