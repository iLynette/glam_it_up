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
          <div className="productContainer" key={product.id}>
            <div>
              <img src={product.image_link} alt={product.title} />
            </div>
            <div>
              <p id={product.id}>
                <span className="name">{product.name}</span>
              </p>
              <p id={product.id}>
                <span className="description">{product.description}</span>
              </p>
              <p id={product.id}>
                <span className="ptype">{product.product_type}</span>
              </p>
              <p id={product.id}>
                <span className="price">{product.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailsPage;
