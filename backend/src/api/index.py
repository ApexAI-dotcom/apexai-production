from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="ApexAI API",
    description="AI-powered racing telemetry analysis",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "message": "ApexAI API",
        "version": "1.0.0",
        "status": "operational"
    }

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/api/health")
def api_health():
    return {"status": "healthy", "version": "1.0.0"}
