# ApexAI Backend

FastAPI backend for racing telemetry analysis.

## Setup

cd backend
pip install -r requirements.txt
uvicorn src.api.main:app --reload --host 0.0.0.0 --port 8000

## Endpoints

- GET / - API info
- GET /health - Health check

## Deployment

Railway auto-runs: uvicorn src.api.main:app --host 0.0.0.0 --port $PORT
