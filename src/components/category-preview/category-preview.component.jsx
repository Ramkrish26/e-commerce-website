import ProductCard from '../product-card/prodcut-card.component';
import {
    CategoryPreviewContainer,
    Title,
    Preview,
} from './category-preview.styles';
const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer className='category-preview-container'>
            <h1>
                <Title to={title}>
                    {title.toUpperCase()}
                </Title>
            </h1>
            <Preview>
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map(product => <ProductCard key={product.id} product={product} />)
                }
            </Preview>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;
