import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';

import { product2 } from '../data/products';

describe('Tests on ProductCard', () => {
  test('should display component correctly', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <div>test</div>}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('should increment the counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {({ count, increaseBy }) => (
          <>
            <div>{count}</div>

            <button onClick={() => increaseBy(1)}>+</button>
          </>
        )}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
    act(() => {
      wrapper.root.findByType('button').props.onClick();
    });
    expect(wrapper.root.findByType('div').props.children[0] === 1);

    //let tree = wrapper.toJSON();
    //expect(tree).toMatchSnapshot();
  });
});
