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
                  Name
                  <span className="description">{product.name}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DetailsPage;
