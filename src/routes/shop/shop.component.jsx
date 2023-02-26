import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from "../../utils/fireBase/firebase.util.js";
import { setCategories } from '../../store/categories/category.action';

import '../shop/shop.styles.scss'

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategories = async () => {
            const categoriesArr = await getCategoriesAndDocuments('categories');
            dispatch(setCategories(categoriesArr));
        }
        getCategories();
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
}

export default Shop;