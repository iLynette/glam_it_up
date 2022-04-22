import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductFromApi, filterReduxProducts } from '../redux/Products/products';
import Categories from './Categories';
import Btn from './Arrow';

const HomePage = () => {
  const data = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductFromApi());
  }, []);

  const handleClick = (f) => {
    dispatch(filterReduxProducts(f));
  };
  return (
    <>
      <Categories data={data.products} handleClick={handleClick} />
      <div className="products">
        {data.filter.map((product) => (
          <div key={product.id}>
            <div className="min">
              <p className="title" id={product.id}>
                {product.name}
              </p>
              <Btn id={product.id} />
            </div>
            <p className="product-type" id={product.id}>
              {product.product_type}
            </p>
            <p className="product-price" id={product.id}>
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
