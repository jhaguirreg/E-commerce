from flask import Flask, jsonify
from flask_cors import CORS  # Importa CORS
from load_database import Data  

app = Flask(__name__)
CORS(app)  # habilita CORS

db = Data()  # inicializa la conexión a la base de datos
db1 = Data()
@app.route('/api/products', methods=['GET'])
def get_products():
    db.sql_consult("SELECT producto.id_prod, nombre, valor_venta, descri FROM producto")
    products = []
    for product in db.result:  
        db1.sql_consult("SELECT id_prod,img_url FROM catalogo_img")
        imagenes=[]
        for img in db1.result:
            if img[0]==product[0]:
                imagenes.append(img[1])
        products.append({
            'id_prod': product[0],  
            'nombre': product[1],  
            'valor_venta': product[2],  
            'descri': product[3],
            'img_url': imagenes

        })


    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)
