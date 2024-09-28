import './DescriptionBox.css';
import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

export const DescriptionBox = ({productId}) => {
  
  const { allProducts } = useContext(ShopContext);
    
  const product = allProducts.find((prod) => prod.id_prod === productId);

  if (!product) {
      return <div>Error al cargar la descripción...</div>; 
  }
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descripción</div>
        <div className="descriptionbox-nav-box fade">Reseñas (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        {product.descri}
        </p>
      </div>
    </div>
  )
}
