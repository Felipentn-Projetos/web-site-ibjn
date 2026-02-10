from flask import Flask, request, jsonify, send_from_directory
import os

app = Flask(__name__, static_folder='static')

# Usuário de teste
USER_DB = {
    "admin": "123456"
}

# Rota para servir o HTML de Login
@app.route("/")
def read_index():
    return send_from_directory('static', 'login.html')

# Rota para o Dashboard
@app.route("/dashboard")
def read_dashboard():
    return send_from_directory('static', 'dashboard.html')

# API de Login
@app.route("/api/login", methods=["POST"])
def login():
    # Pega os dados JSON enviados pelo JavaScript
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if username in USER_DB and USER_DB[username] == password:
        return jsonify({"message": "Login realizado com sucesso", "status": "success"}), 200
    else:
        return jsonify({"detail": "Usuário ou senha incorretos"}), 401

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)