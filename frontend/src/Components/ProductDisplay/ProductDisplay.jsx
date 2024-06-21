import React, { useContext } from 'react'
import './ProductDisplay.css'
import 'boxicons'
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
            <box-icon type='solid' name='star'></box-icon>
            <box-icon type='solid' name='star'></box-icon>
            <box-icon type='solid' name='star'></box-icon>
            <box-icon type='solid' name='star'></box-icon>
            <box-icon type='solid' name='star'></box-icon>
            <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Una camiseta muy interesante bla bla bla bla bla bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla
            </div>
            <div className="productdisplay-right-size">
                <h1>Selecciona el tamaño</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Añadir al carrito</button>
            <p className='productdisplay-right-category'> <span>Categoría :</span>Mujeres, Blusas, Crop Top</p>
            <p className='productdisplay-right-category'> <span>Etiquetas :</span>Moderno</p>
        </div>
    </div>
  )
}
