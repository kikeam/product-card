import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from '../data/products';

describe('Tests on ProductImage', () => {
  test('should display component correctly with personalized image', () => {
    const image = '../../src/assets/no-image.jpg';
    const wrapper = renderer.create(<ProductImage img={image} />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('should display component correctly with default image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
