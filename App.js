import React from 'react';

import Counter from './components/counter';
import Product from './components/product';


function App() {
  const addto =(title)=>{
    alert("add to cart clicked from "+ title);
}
  return (
    
    <div>
     
      <h1>product list</h1>

<Counter/>


    <Product title="Audi" price="300" onadd={addto}/>
    <Product title="benz" price="400" onadd={addto}/>
    <Product title="bmw" price="600" onadd={addto}/>

     
    </div>
  );
}

export default App;
