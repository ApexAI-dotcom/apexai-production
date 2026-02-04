from fastapi import FastAPI
from mangum import Mangum

app = FastAPI()

@app.get("/api")
@app.get("/api/")
def root():
    return {"message": "ApexAI API", "status": "operational"}

@app.get("/api/health")
def health():
    return {"status": "healthy", "version": "1.0.0"}

# Handler Vercel
handler = Mangum(app, lifespan="off")
s
