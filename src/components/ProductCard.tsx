import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import React, { createContext } from 'react';
import {
  Product,
  onChangeArgs,
  initialValues,
  ProductCardHandlers,
} from '../interfaces/interfaces';

import { ProductContextProps } from '../interfaces/interfaces';

export interface Props {
  children: (args: ProductCardHandlers) => JSX.Element;
  product: Product;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: initialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });
  return (
    <Provider value={{ increaseBy, counter, product, maxCount }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxReached,
          maxQuantity: initialValues?.maxQuantity,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
