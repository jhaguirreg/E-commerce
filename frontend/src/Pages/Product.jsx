import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const { allProducts } = useContext(ShopContext); 
  const { productId } = useParams();
  
  const product = allProducts.find((e) => e.id_prod === Number(productId)); 

  if (!product) {
    return <div>Producto no encontrado</div>; 
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay productId={Number(productId)} />
      <DescriptionBox productId={Number(productId)}/>
      <RelatedProducts />
    </div>
  );
};
