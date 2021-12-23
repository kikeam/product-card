import { ProductCard as ProductCardComponent } from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductCardComponentProps } from '../interfaces/interfaces';
export { ProductButtons } from './ProductButtons';
export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';
//export { ProductCard } from './ProductCard';


export const ProductCard:ProductCardComponentProps =Object.assign(ProductCardComponent, {
    Title: ProductTitle,
    Buttons: ProductButtons,
    Image: ProductImage
});

export default ProductCard;