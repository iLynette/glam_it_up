const FETCH_PRODUCTS = 'glam_it_up/redux/Product/FETCH_PRODUCTS';

const defaultState = [];
export const fetchProducts = (payload) => ({
    type: FETCH_PRODUCTS,
    payload
})

export const fetchProductFromApi = () => async (dispatch) => {
    try {
        const fetchData = await fetch(
          'https://fakestoreapi.com/products'
        );
        dispatch(fetchProducts(fetchData));
        console.log(fetchData, 'data from product reducer')
    } catch (error) { throw new Error(error);}
};

const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            console.log(action.payload.fetchData, 'payload');
          return [
              ...action.payload.fetchData
          ];
        default:
          return state;
    }
}

export default productReducer;