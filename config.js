// ============================================================
// MINDTECH GLOBAL CONFIG — SINGLE SOURCE OF TRUTH
// ============================================================
const MINDTECH_CONFIG = {
    // Core Quantum OS
    MQOS_BASE_URL: 'https://mindtech-quantum-os-goa1.onrender.com',
    MQOS_HISTORY_URL: 'https://mindtech-quantum-os-goa1.onrender.com/api/v1/verify/chsh/history',
    MQOS_DOCS_URL: 'https://mindtech-quantum-os-goa1.onrender.com/docs',

    // Quantum AI Backend
    QUANTUM_AI_BASE_URL: 'https://quantum-ai-bd1.onrender.com',
    QUANTUM_AI_STATUS_URL: 'https://quantum-ai-bd1.onrender.com/api/quantum/status',
    QUANTUM_AI_BADGE_URL: 'https://quantum-ai-bd1.onrender.com/api/quantum/badge',
    QUANTUM_AI_PATENT_URL: 'https://quantum-ai-bd1.onrender.com/api/quantum/patent',

    // IBM Hardware
    IBM_JOB_ID: 'd8uhvl4bp3hs738628cg',
    IBM_BACKEND: 'ibm_kingston',
    IBM_QUBITS: 156,
    IBM_CHSH_S: 2.76,
    IBM_CORRELATION: '98.4%',
    IBM_DATE: '2026-06-25T12:32:20.448824Z',

    // Simulator
    SIM_CHSH_S: 2.8284,
    SIM_CORRELATION: '92.39%',
    SIM_BACKEND: 'qiskit_aer_exact',

    // Luvuno Chat
    LUVUNO_CHAT_URL: 'https://luvuno-quantum-chat-africa-os.onrender.com',
    LUVUNO_PROXY_URL: 'https://luvuno-backend-proxy.onrender.com',

    // Applications
    PELO_URL: 'https://pelo-app.onrender.com',
    KHENSANI_URL: 'https://spontaneous-fairy-11ae26.netlify.app',
    ENTANGLEGUARD_URL: 'https://entangleguard.onrender.com',
    QUANTUM_NATURE_URL: 'https://quantum-nature-modules.onrender.com',
    MOLECULEMIND_URL: 'https://moleculemind-backend.onrender.com',
    MINDCELL_URL: 'https://mindcell-quantum.onrender.com',

    // Portfolio
    PORTFOLIO_URL: 'https://mindtech-quantum-portfolio.onrender.com',
    SYSTEMS_URL: 'https://mindtech-quantum-systems.onrender.com',

    // Legal
    PATENT_NUMBER: 'SA 2026/05142',
    PATENT_AGENT: 'ENSafrica',
    PATENT_MATTER: '0564929',

    // Features
    FEATURES: {
        showHardwareBadge: true,
        showSimulatorBadge: true,
        showDualProof: true,
        autoRefresh: true,
        refreshInterval: 30000
    }
};
