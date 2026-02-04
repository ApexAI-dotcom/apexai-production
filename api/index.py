from fastapi import FastAPI
from mangum import Mangum

app = FastAPI()

@app.get("/")
@app.get("/api")
def read_root():
    return {"message": "ApexAI API", "status": "operational"}

@app.get("/api/health")
def health():
    return {"status": "healthy", "version": "1.0.0"}

handler = Mangum(app)
