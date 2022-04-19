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
    <>
      <div className="products">
        {data.map((product) => (
          <div key={product.id}>
            <p key={product.id}>{product.id}</p>
            <p key={product.id}>{product.name}</p>
            <p key={product.id}>{product.price}</p>
            {/* <p key={product.id}>{product.description}</p> */}
            <p key={product.id}>
              <img src={product.image_link} alt={product.title} />
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
