import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductFromApi } from '../redux/Products/products';
import Categories from './Categories';
import Btn from './Arrow';

const HomePage = () => {
  const data = useSelector((state) => state.productReducer);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductFromApi());
  }, []);

  const handleClick = (e) => {
    setValue(e.target.value);
  };
  const filterProducts = data.filter((product) => product.product_type.toLowerCase().includes(value.toLowerCase()));
  return (
    <>
      <Categories data={data} handleClick={handleClick} />
      <div className="products">
        {value === 'Select a product type'
          ? data.map((product) => (
            <div key={product.id}>
              <p className="head">
                {product.name}
              </p>
              <span>
                <Btn id={product.id} />
              </span>
              <p>{product.product_type}</p>
              <p>{product.price}</p>
              {/* <p key={product.id}>{product.description}</p> */}
              {/* <p key={product.id}>
              <img src={product.image_link} alt={product.title} />
            </p> */}
            </div>
          ))
          : filterProducts.map((product) => (
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
