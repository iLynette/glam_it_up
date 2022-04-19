const FETCH_PRODUCTS = 'glam_it_up/redux/Product/FETCH_PRODUCTS';

const defaultState = [];
export const fetchProducts = (payload) => ({
    type: FETCH_PRODUCTS,
    payload
})

export const fetchProductFromApi = () => async (dispatch) => {
    try {
        const fetchData = await fetch('https://fakestoreapi.com/products');
    }
}