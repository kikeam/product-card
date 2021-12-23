import { useEffect, useRef, useState } from 'react';
import { initialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product
  onChange?:(args:onChangeArgs) => void;
  value?:number;
  initialValues?:initialValues
}

export const useProduct=({onChange,product, value=0,initialValues}:useProductArgs) => {
  
  const [counter, setCounter] = useState(initialValues?.counter || value);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {

    if (initialValues?.maxQuantity && counter + value > initialValues?.maxQuantity) {
      return;
    }
 
    const newValue = Math.max(0, counter + value);
    setCounter((prev) => Math.max(0, prev + value))
    onChange && onChange({product, counter: newValue});
  
  };

  useEffect(() => {
    if(!isMounted.current) {
      return;
    }
    setCounter(value);
  }, [value]);

  const reset = () => {
    setCounter(initialValues?.counter || value);
  };


  useEffect(() => {
    isMounted.current = true;
  }, []);



  
  return {
    counter, 
    increaseBy, 
    isMaxReached: !!initialValues?.maxQuantity && counter===initialValues.maxQuantity,
    maxCount:initialValues?.maxQuantity,
    reset
  };
  
}


