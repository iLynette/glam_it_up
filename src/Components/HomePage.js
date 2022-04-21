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
  const filterProducts = data.filter((product) =>
    product.product_type.toLowerCase().includes(value.toLowerCase()));
  return (
    <>
    <Categories data={data} handleClick={handleClick} />
      <div className="products">
        {value === 'Select a product type'
         ? data.map((product) => (
          <div key={product.id}>
            <p className="head">
              {product.name}
              <Btn id={product.id} />
            </p>
            <p>{product.product_type}</p>
            <p>{product.price}</p>
            {/* <p key={product.id}>{product.description}</p> */}
            {/* <p key={product.id}>
              <img src={product.image_link} alt={product.title} />
            </p> */}
          </div>
        ))
        
      </div>
    </>
  );
};

export default HomePage;
