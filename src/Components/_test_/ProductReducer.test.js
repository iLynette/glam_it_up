import productReducer from '../../redux/Products/products';

const initialState = [];

describe('Tests for redux in project', () => {
  it('Tests if the state is initially empty', () => {
    expect(productReducer(initialState, [])).toEqual([]);
  });
});
