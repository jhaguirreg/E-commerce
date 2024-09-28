from flask import Flask, request, jsonify
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

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    id_clie = data.get('id_clie')
    password = data.get('pass')

    db.sql_consult(f"SELECT * FROM CLIENTE WHERE id_clie ='{id_clie}' AND pass = '{password}'")
    user = db.result

    if user:
        return jsonify({"message": "Login exitoso", "user": user}), 200
    else:
        return jsonify({"message": "Credenciales incorrectas"}), 401


@app.route('/api/cliente', methods=['POST'])
def get_cliente():
    data1 = request.get_json()
    id_clie = data1.get('id_clie')

    db.sql_consult(f"SELECT nombre, fecha_nac, correo, tel, dir FROM CLIENTE WHERE id_clie ='{id_clie}'")
    
    if db.result:
        cliente = db.result[0]
        return jsonify({
            "nombre": cliente[0], 
            "fecha_nac": cliente[1], 
            "correo": cliente[2], 
            "tel": cliente[3], 
            "dir": cliente[4]
        }), 200
    else:
        return jsonify({"message": "Cliente no encontrado"}), 404

if __name__ == '__main__':
    app.run(debug=True)
