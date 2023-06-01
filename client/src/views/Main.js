import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import { getAllProducts } from '../services/ProductService';

function Main() {
  const [update, setUpdate] = useState(false);

  return (
    <div>
      <ProductForm setUpdate={setUpdate} />
      <ProductList update={update} setUpdate={setUpdate} />
    </div>
  );
}

export default Main;


