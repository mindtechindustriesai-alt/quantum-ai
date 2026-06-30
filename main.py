import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import uvicorn

load_dotenv()

QUANTUM_BADGE = {
    "chsh_s": 2.76,
    "classical_limit": 2.0,
    "quantum_max": 2.828,
    "percent_above_classical": 38.0,
    "correlation": 0.984,
    "patent": "SA 2026/05142",
    "verification_date": "2026-06-25",
    "ibm_job_id": "d8uhvl4bp3hs738628cg",
    "ibm_processor": "IBM Kingston (156 qubits)",
    "text": "CHSH S=2.76 · 38% above classical"
}

app = FastAPI(
    title="Quantum AI",
    description="Quantum finance powered by CHSH S=2.76",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://quantum-ai-frontend.onrender.com",
        "https://quantum-ai.onrender.com",
        "http://localhost:5500",
        "http://127.0.0.1:5500",
        "http://localhost:3000",
        "http://localhost:8000",
        "https://mindtechindustriesai-alt.github.io",
        "*"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],
    allow_headers=["*"],
    expose_headers=["*"],
    max_age=86400
)

@app.get("/")
async def root():
    return {
        "service": "Quantum AI",
        "version": "1.0.0",
        "status": "operational",
        "quantum_badge": QUANTUM_BADGE["text"],
        "patent": QUANTUM_BADGE["patent"],
        "verification": QUANTUM_BADGE["verification_date"],
        "ibm_job_id": QUANTUM_BADGE["ibm_job_id"]
    }

@app.get("/health")
async def health():
    return {"status": "healthy"}

@app.get("/api/quantum/status")
async def quantum_status():
    return QUANTUM_BADGE

@app.get("/api/quantum/badge")
async def quantum_badge():
    return {
        "badge": QUANTUM_BADGE["text"],
        "chsh_s": QUANTUM_BADGE["chsh_s"],
        "correlation": QUANTUM_BADGE["correlation"],
        "patent": QUANTUM_BADGE["patent"],
        "processor": QUANTUM_BADGE["ibm_processor"],
        "job_id": QUANTUM_BADGE["ibm_job_id"]
    }

@app.get("/api/quantum/patent")
async def patent_info():
    return {
        "application": "SA 2026/05142",
        "title": "ADAPTIVE LEARNING ECOSYSTEM WITH INTEGRATED SAFETY MONITORING AND OPTIONAL QUANTUM-SECURE VERIFICATION",
        "applicant": "MINDTECH INDUSTRIES (PTY) LTD",
        "inventor": "MDLULI, Llewelyn Khulumani",
        "agent": "ENSafrica (P4240ZA00/AB/mj)",
        "filing_date": "12 May 2026",
        "status": "Provisional Filed — Priority Date Established",
        "ibm_verification": f"CHSH S={QUANTUM_BADGE['chsh_s']} · {QUANTUM_BADGE['correlation']*100}% correlation · {QUANTUM_BADGE['ibm_processor']}",
        "next_deadline": "PCT filing: 12 May 2027"
    }

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=int(os.getenv("PORT", 8000)),
        reload=False
    )
