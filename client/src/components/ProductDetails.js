
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProduct from './UseProduct';
import { deleteProduct } from '../services/ProductService';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product] = useProduct(id);

  const handleDelete = () => {
    deleteProduct(id)
      .then(res => navigate('/'))
      .catch(err => console.log(err));
  };

  return (
    <div className="text-center">
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={() => navigate(`/edit/${id}`)} className="btn btn-secondary me-2">Edit</button>
      <button onClick={handleDelete} className="btn btn-danger">Delete</button>
    </div>
  );
}

export default ProductDetails;


