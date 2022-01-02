import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product1 } from '../data/products';

describe('Tests on ProductTitle', () => {
  test('should display component correctly with personalized title', () => {
    const title = 'Card title';
    const wrapper = renderer.create(<ProductTitle title={title} />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('should display component correctly with default title', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
