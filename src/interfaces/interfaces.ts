import { Props as ProductCardProps} from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';


  
export interface Product {
    id: string;
    title: string;
    img?: string;
  }
  
export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
    value?: number;
    maxCount?: number;
  }


export interface ProductCardComponentProps {
    ({children, product}: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps)=> JSX.Element,
    Image: (Props: ProductImageProps)=> JSX.Element,
    Buttons: (Props: ProductButtonsProps)=> JSX.Element
}

export interface onChangeArgs {
  product: Product;
  counter: number;
}

export interface ProductInCart extends Product {
  quantity: number;
}

export interface initialValues {
  counter?: number;
  maxQuantity?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxReached: boolean;
  maxQuantity?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}