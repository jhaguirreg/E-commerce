import React from 'react'
import { Hero } from '../Components/Hero/Hero'

export const Shop = () => {
  return (
    <div className="shop-container">
        <Hero/>
        <div className="shop-content">
        
        <p>Bienvenido a nuestra tienda. Explora nuestra colección de ropa y accesorios.</p>
        <p>Más contenido aquí...</p>
        <p>Aún más contenido...</p>
        <div style={{
      backgroundColor: 'white',
      padding: '3000px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Sombra suave
      maxWidth: '600px', // Ancho máximo
      margin: '0 auto', // Centrado horizontal
    }}>
      <h2 style={{
        fontSize: '24px', // Tamaño del título
        marginBottom: '10px', // Espacio entre el título y el párrafo
      }}>Texto grande en blanco</h2>
      <p style={{
        fontSize: '18px', // Tamaño del texto
        lineHeight: '1.5', // Espaciado entre líneas
      }}>Este es un cuadro de texto grande en blanco.</p>
    </div>
      </div>
    </div>
  )
}
