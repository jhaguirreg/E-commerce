import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'


export const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Productos</p>
            <p>Nombre</p>
            <p>Precio</p>
            <p>Cantidad</p>
            <p>Total</p>
            <p>Quitar</p>
        </div>
        <hr />
       {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return <div>
            <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='cartitems-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
        </div>
        }
        return null;
       })}
       <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>TOTAL CARRITO</h1>
            <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <p>Costo de envio</p>
                <p>Gratis</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
            </div>
            <button>PROCEDER AL PAGO</button>
        </div>
        <div className="cartitems-promcode">
            <p>Si usted tiene un codigo de descuento, ingreselo aquí</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='Codigo de descuento'/>
                <button>Ingresar</button>
            </div>
       </div>
       </div>
       
    </div>
  )
}
