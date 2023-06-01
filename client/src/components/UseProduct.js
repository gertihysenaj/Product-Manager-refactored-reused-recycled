
import { useState, useEffect } from 'react';
import { getProduct } from '../services/ProductService';

const UseProduct = (id) => {
  const [product, setProduct] = useState({ title: '', price: '', description: '' });

  useEffect(() => {
    if (id) {
      getProduct(id)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err));
    }
  }, [id]);

  return [product, setProduct];
};

export default UseProduct;
