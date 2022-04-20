import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductFromApi } from '../redux/Products/products';

const DetailsPage = () => {
  const data = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductFromApi());
  }, []);
  return (
    <div>DetailsPage</div>
  );
}

export default DetailsPage;
