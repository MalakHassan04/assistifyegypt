// --- API Configuration Template ---
// Duplicate this file as 'config.js' and fill in your API key.
// 'config.js' is gitignored to protect secrets.
const CONFIG = {
    GROQ_API_KEY: "YOUR_GROQ_API_KEY_HERE"
};

// Support Node.js exports if required
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
