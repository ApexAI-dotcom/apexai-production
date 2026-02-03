# 🏎️ ApexAI Production

**ApexAI Race Coach** - AI-powered racing telemetry analysis SaaS.

## 🎯 Qu'est-ce que c'est ?

ApexAI analyse les données de télémétrie de courses automobiles (F1, simracing) et fournit des recommandations IA pour améliorer les performances.

## 🚀 Tech Stack

**Backend :**
- FastAPI (Python 3.12)
- PostgreSQL 
- scipy (traitement signal)
- duckdb (analyse données)

**Frontend :**
- React + Vite
- Tailwind CSS

## 📦 Deployment

| Composant | Plateforme | URL |
|-----------|-----------|-----|
| Backend | Railway | apexai-api.railway.app |
| Frontend | Vercel | apexai.vercel.app |
| Database | Railway PostgreSQL | Auto-géré |

## 🔧 Développement Local

**Backend :**
cd backend
pip install -r requirements.txt
uvicorn src.api.main:app --reload

Ouvrir : http://localhost:8000

**Frontend :**
cd frontend
npm install
npm run dev

Ouvrir : http://localhost:5173

## 📝 Variables d'Environnement

Voir .env.example dans chaque dossier.

## 📄 License

MIT

## 📧 Contact

Questions ? contact@apexai.com
