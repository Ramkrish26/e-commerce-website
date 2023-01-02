import { ProductContext } from '../../components/contexts/products.context';
import ProductCard from '../../components/product-card/prodcut-card.component';
import { useContext } from 'react';
import '../shop/shop.styles.scss'

const Shop = () => {
    const { product } = useContext(ProductContext);
    return (
        <div className='products-container'>
            {
                product.map((product) => (
                    <ProductCard key={product.id} product={product}></ProductCard>
                ))
            }
        </div>
    );
}

export default Shop;