import { CATEGORIES_ACTION_TYPE } from "./category.types"

export const setCategories = (categoriesArr) => ({
    type: CATEGORIES_ACTION_TYPE.SET_CATEGORIES,
    payload: categoriesArr
})