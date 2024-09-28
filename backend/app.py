from flask import Flask, jsonify
from flask_cors import CORS  # Importa CORS
from load_database import Data  

app = Flask(__name__)
CORS(app)  # habilita CORS

db = Data()  # inicializa la conexión a la base de datos

@app.route('/api/products', methods=['GET'])
def get_products():
    db.sql_consult("SELECT producto.id_prod, nombre, valor_venta, descri, img_url FROM producto, catalogo_img WHERE producto.id_prod=catalogo_img.id_prod")
    products = []
    for product in db.result:  
        products.append({
            'id_prod': product[0],  
            'nombre': product[1],  
            'valor_venta': product[2],  
            'descri': product[3],
            'img_url': product[4]

        })

    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)
