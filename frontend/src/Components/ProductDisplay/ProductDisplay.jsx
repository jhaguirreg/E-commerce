import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import './ProductDisplay.css';
import 'boxicons';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = ({ productId }) => {
    const { allProducts, addToCart } = useContext(ShopContext);
    
    const product = allProducts.find((prod) => prod.id_prod === productId);

    if (!product) {
        return <div>Cargando producto...</div>; 
    }

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {product.img_url.map((img, index) => (
                        <img key={index} src={img} alt={`Imagen ${index + 1}`} />
                    ))}
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.img_url[0]} alt={product.nombre} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.nombre}</h1>
                <div className="productdisplay-right-stars">
                    {/* Estrellas de calificación */}
                    {[...Array(5)].map((_, index) => (
                        <box-icon key={index} type='solid' name='star'></box-icon>
                    ))}
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-new">${product.valor_venta}</div>
                </div>
                <div className="productdisplay-right-description">
                    {product.descri}
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
                <button onClick={() => { addToCart(product.id_prod) }}>Añadir al carrito</button>
                <p className='productdisplay-right-category'><span>Categoría :</span>Mujeres, Blusas, Crop Top</p>
                <p className='productdisplay-right-category'><span>Etiquetas :</span>Moderno</p>
            </div>
        </div>
    );
}

