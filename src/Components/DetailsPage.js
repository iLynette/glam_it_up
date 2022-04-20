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
    <>
      <div className="details">
        {data.map((product) => (
          <div className="container" key={product.id}>
            <div>
              <img src={product.image_link} alt={product.title} />
            </div>
            <div>
              <p id={product.id}>
                <span className="description">{product.name}</span>
              </p>
              <p id={product.id}>
                <span className="description">{product.description}</span>
              </p>
              <p id={product.id}>
                <span className="description">{product.product_type}</span>
              </p>
              <p id={product.id}>
                <span className="description">{product.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailsPage;
