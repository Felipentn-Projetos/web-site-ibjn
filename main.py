from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

# Modelo para os dados de login
class LoginRequest(BaseModel):
    username: str
    password: str

# Usuário de teste (em um app real, isso viria de um banco de dados)
USER_DB = {
    "admin": "123456"
}

# Servir arquivos estáticos (HTML, CSS, JS)
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def read_index():
    return FileResponse("static/login.html")

@app.get("/dashboard")
async def read_dashboard():
    return FileResponse("static/dashboard.html")

@app.post("/api/login")
async def login(request: LoginRequest):
    if request.username in USER_DB and USER_DB[request.username] == request.password:
        return {"message": "Login realizado com sucesso", "status": "success"}
    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Usuário ou senha incorretos",
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
