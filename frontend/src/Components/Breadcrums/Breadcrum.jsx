import React from 'react'
import './Breadcrum.css'
import 'boxicons'

export const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        INICIO <box-icon name='chevron-right' color='#5e5e5e'></box-icon> TIENDA <box-icon name='chevron-right' color='#5e5e5e'></box-icon> {product.category} <box-icon name='chevron-right' color='#5e5e5e'></box-icon> {product.name}
    </div>
  )
}
