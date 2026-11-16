// ============================================================
// MINDTECH QUANTUM STATUS BADGE — DUAL-PROOF
// ============================================================
(function() {
    'use strict';

    const BADGE_ID = 'mindtech-quantum-badge';
    const TEXT_ID = 'quantum-badge-text';
    const HW_ID = 'quantum-badge-hw';
    const SIM_ID = 'quantum-badge-sim';

    if (document.getElementById(BADGE_ID)) return;

    const badge = document.createElement('div');
    badge.id = BADGE_ID;
    badge.style.cssText = [
        'position:fixed', 'bottom:20px', 'right:20px',
        'background:rgba(5,8,15,0.95)', 'border:1px solid #00B4D8',
        'border-radius:60px', 'padding:10px 20px',
        'font-family:"Space Mono",monospace', 'font-size:11px',
        'color:#00F5D4', 'z-index:9999', 'backdrop-filter:blur(12px)',
        'box-shadow:0 0 30px rgba(0,180,216,0.2)', 'cursor:pointer',
        'transition:all 0.3s', 'display:flex', 'align-items:center', 'gap:8px'
    ].join(';');

    badge.innerHTML = [
        '<span id="' + HW_ID + '" style="display:none;color:#00FF88;">✅ HW</span>',
        '<span id="' + SIM_ID + '" style="display:none;color:#FFD166;">⚛️ SIM</span>',
        '<span id="' + TEXT_ID + '">⚛️ Verifying...</span>'
    ].join('');

    document.body.appendChild(badge);

    const textEl = document.getElementById(TEXT_ID);
    const hwEl = document.getElementById(HW_ID);
    const simEl = document.getElementById(SIM_ID);

    async function fetchQuantumBadge() {
        try {
            const res = await fetch(MINDTECH_CONFIG.QUANTUM_AI_BADGE_URL);
            if (!res.ok) return null;
            return await res.json();
        } catch (e) {
            return null;
        }
    }

    async function fetchHardwareProof() {
        try {
            const res = await fetch(MINDTECH_CONFIG.MQOS_HISTORY_URL);
            if (!res.ok) return null;
            const data = await res.json();
            return data.jobs && data.jobs.length > 0 ? data.jobs[0] : null;
        } catch (e) {
            return null;
        }
    }

    async function updateBadge() {
        const [badgeData, hw] = await Promise.all([
            fetchQuantumBadge(),
            fetchHardwareProof()
        ]);

        if (badgeData) {
            hwEl.style.display = 'inline';
            simEl.style.display = 'none';
            textEl.innerHTML = badgeData.badge;
            badge.style.borderColor = '#00FF88';
            badge.style.boxShadow = '0 0 30px rgba(0,255,136,0.3)';
        } else if (hw) {
            hwEl.style.display = 'inline';
            simEl.style.display = 'none';
            textEl.innerHTML = 'S=' + hw.S + ' · ' + hw.correlation + '% · ' + hw.backend;
            badge.style.borderColor = '#00FF88';
        } else {
            hwEl.style.display = 'none';
            simEl.style.display = 'inline';
            textEl.innerHTML = 'Quantum backend offline';
            badge.style.borderColor = '#EF476F';
        }
    }

    badge.onclick = function() {
        window.open(MINDTECH_CONFIG.MQOS_DOCS_URL, '_blank');
    };

    updateBadge();

    if (MINDTECH_CONFIG.FEATURES.autoRefresh) {
        setInterval(updateBadge, MINDTECH_CONFIG.FEATURES.refreshInterval);
    }
})();
