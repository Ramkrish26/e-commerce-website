import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './cart-icon.styles';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toogleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;