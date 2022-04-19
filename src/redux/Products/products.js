const FETCH_PRODUCTS = 'glam_it_up/redux/Product/FETCH_PRODUCTS';
import axios from "axios";

const defaultState = [];

export const fetchProducts = (payload) => ({
    type: FETCH_PRODUCTS,
    payload,
})

export const fetchProductFromApi = () => async (dispatch) => {
    const data = await axios.get(
          'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
        );
        dispatch(fetchProducts(data));
};

const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
          return [
              ...action.payload.data
          ];
        default:
          return state;
    }
}

export default productReducer;