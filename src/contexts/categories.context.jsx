import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/fireBase/firebase.util.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategories = async () => {
            const catgoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(catgoryMap);
        }
        getCategories();
    }, []);

    const value = { categoriesMap }

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}