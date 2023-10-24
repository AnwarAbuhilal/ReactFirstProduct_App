import React from 'react'

function product(props) {
  return (
    <>
      <div className='col-md-4'>
        <div className='prod'>
          <h2> {props.title} </h2>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  )
}

export default product