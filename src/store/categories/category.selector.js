import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCatgories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCatgories],
    (categories) => categories.reduce(
        (acc, { title, items }) => {
            acc[title.toLowerCase()] = items;
            return acc;
        },
        {}
    )
);