import axios from 'axios';

const FETCH_PRODUCTS = 'glam_it_up/redux/Product/FETCH_PRODUCTS';
const FILTER_PRODUCTS = 'glam_it_up/redux/FILTER_PRODUCTS';

const defaultState = {
  products: [],
  filter: [],
  filter_value: 'Select a product type',
};

export const fetchProducts = (payload) => ({
  type: FETCH_PRODUCTS,
  payload,
});

export const filterReduxProducts = (filter) => ({
  type: FILTER_PRODUCTS,
  payload: filter,
});

export const fetchProductFromApi = () => async (dispatch) => {
  const data = await axios.get(
    'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
  );
  dispatch(fetchProducts(data));
};

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        products: [
          ...action.payload.data,
        ],
        filter: [
          ...action.payload.data,
        ],
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filter: [
          ...state.products
            .filter((p) => p.product_type.toLowerCase().includes(action.payload.toLowerCase())),
        ],
        filter_value: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
