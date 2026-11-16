import datetime

@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "timestamp": datetime.datetime.now().isoformat(),
        "backend": "quantum-ai-bd1",
        "service": "Quantum AI",
        "version": "1.0.0",
        "patent": "SA 2026/05142"
    }
