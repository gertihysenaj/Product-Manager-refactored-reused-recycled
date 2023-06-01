
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, deleteProduct } from '../services/ProductService';

function ProductList({ update, setUpdate }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, [update]);

  const handleDelete = (id) => {
    deleteProduct(id)
      .then(res => setUpdate(update => !update))
      .catch(err => console.log(err));
  };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-6 text-center">
                    <hr />
                    <h2 >All Products:</h2>
                    {products.map(product => (
                        <div key={product._id}>
                            <h3><Link to={`products/${product._id}`}>{product.title}</Link></h3>
                            <button onClick={() => handleDelete(product._id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductList;

