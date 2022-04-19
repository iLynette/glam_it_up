import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductFromApi } from '../redux/Products/products';

const HomePage = () => {
  const data = useSelector((state) => state.productReducer);

  console.log(data, 'print this');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductFromApi());
  }, []);
  return (

  );
}

export default HomePage;
