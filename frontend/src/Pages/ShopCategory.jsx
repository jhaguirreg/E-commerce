import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { Item } from '../Components/Item/Item';

export const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext); // Cambiamos a allProducts
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Mostrando 1-12</span> de {allProducts.length} productos {/* Muestra el total de productos */}
        </p>
        <div className="shopcategory-sort">
          Ordenar por <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {allProducts.map((item, i) => {
                      return (
                        <Item 
                          key={i} 
                          id={item.id_prod}
                          name={item.nombre}
                          image={item.img_url[0]}
                          new_price={item.valor_venta}
                        />
                      );
          
          /*if (props.category === item.category) {
            return (
              <Item 
                key={i} 
                id={item.id_prod}
                name={item.nombre}
                image={item.img_url}
                new_price={item.valor_venta}
              />
            );
          } else {
            return null;
          }*/
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explorar más
      </div>
    </div>
  );
};
