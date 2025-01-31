import { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from './SearchBar/SearchBar.jsx';
import ProductTable from './ProductTable/ProductTable.jsx';

const ProductsPage =  () => {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar products={products}/>
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage;