import React from 'react'
import Product from '../product/Product.jsx'

function Products() {
  const products=[
    {id:1, title:'Product one', desc:'This is product one'},
    {id:2, title:'Product two', desc:'This is product two'},
    {id:3, title:'Product three', desc:'This is product three'},
  ];

  return (
    <>
      {/* <div className='row'>
        <Product title={products[0].title} desc={products[0].desc}/>
        <Product title={products[1].title} desc={products[1].desc}/>
        <Product title={products[2].title} desc={products[2].desc}/>
      </div> */}

      {/* <div className='row'>
            {products.map( (product)=>{
              return <Product title={product.title} desc={product.desc} key={product.id}/>

            })}
      </div> */}
      
      <div className='row py-5'>
      {products.map( (product)=>{
          return <Product {...product} key={product.id}/>
        })}
      </div>

    </>
  )
}

export default Products