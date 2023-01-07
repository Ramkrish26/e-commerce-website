import ProductCard from '../product-card/prodcut-card.component';
import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <h1>
                <span className='title'>{title.toUpperCase()}</span>
            </h1>
            <div className='preview'>
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
}

export default CategoryPreview;