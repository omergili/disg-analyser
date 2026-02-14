# Kostenlose KI-Integrationen für DISG-Analyzer

## 🎯 Übersicht der kostenlosen Optionen

| Option | Kostenlos | Setup | Qualität | Limits |
|--------|-----------|-------|----------|--------|
| Hugging Face | ✅ Ja | Einfach | Gut | 1000 Requests/Tag |
| Groq | ✅ Ja | Sehr einfach | Sehr gut | 14.400 Requests/Tag |
| Cohere | ✅ Ja (Trial) | Einfach | Sehr gut | 100 Requests/Min |
| OpenRouter | ✅ Ja (Free models) | Mittel | Variiert | Modellabhängig |

---

## 1. Hugging Face Inference API (EMPFOHLEN) ⭐

**Vorteile:**
- Komplett kostenlos
- Kein API-Key erforderlich (optional für höhere Limits)
- Viele Modelle verfügbar

**Setup:**
1. Optional: Gehe zu [huggingface.co](https://huggingface.co/join)
2. Optional: Erstelle einen Token unter Settings → Access Tokens
3. Ersetze `YOUR_HF_TOKEN` in der index.html

**Verfügbare Modelle:**
- `mistralai/Mistral-7B-Instruct-v0.2` (gut für Deutsch)
- `meta-llama/Llama-2-7b-chat-hf`
- `google/flan-t5-xxl`

**Code ist bereits in der aktualisierten index.html!**

---

## 2. Groq (Sehr schnell!) 🚀

**Vorteile:**
- Extrem schnell
- Kostenlos mit großzügigen Limits
- Gute Modelle

**Setup:**
1. Registriere auf [console.groq.com](https://console.groq.com)
2. Erstelle API Key
3. Verwende diesen Code:

```javascript
async function analyzeType(type, text) {
    const typeInfo = typeDescriptions[type];
    const prompt = `Du bist ein DISG-Persönlichkeitsexperte. [...]`;
    
    const GROQ_API_KEY = 'gsk_...'; // Dein Groq API Key
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile', // Sehr gutes Modell!
            messages: [
                { role: 'user', content: prompt }
            ],
            temperature: 0.7,
            max_tokens: 300
        })
    });
    
    const data = await response.json();
    const result = data.choices[0].message.content;
    results[type].innerHTML = `<p class="fade-in">${result}</p>`;
}
```

---

## 3. Cohere Free Tier

**Vorteile:**
- Gute Qualität
- Einfache API
- Kostenloser Trial

**Setup:**
1. Registriere auf [cohere.com](https://cohere.com)
2. Hole API Key vom Dashboard
3. Code:

```javascript
async function analyzeType(type, text) {
    const typeInfo = typeDescriptions[type];
    const prompt = `Du bist ein DISG-Persönlichkeitsexperte. [...]`;
    
    const COHERE_API_KEY = 'dein-cohere-key';
    
    const response = await fetch('https://api.cohere.ai/v1/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${COHERE_API_KEY}`
        },
        body: JSON.stringify({
            model: 'command',
            prompt: prompt,
            max_tokens: 300,
            temperature: 0.7
        })
    });
    
    const data = await response.json();
    const result = data.generations[0].text;
    results[type].innerHTML = `<p class="fade-in">${result}</p>`;
}
```

---

## 4. OpenRouter (Zugang zu vielen Modellen)

**Vorteile:**
- Zugang zu vielen kostenlosen Modellen
- Einheitliche API für verschiedene Anbieter
- Gute für Experimente

**Setup:**
1. Registriere auf [openrouter.ai](https://openrouter.ai)
2. Hole kostenlosen API Key
3. Code:

```javascript
async function analyzeType(type, text) {
    const typeInfo = typeDescriptions[type];
    const prompt = `Du bist ein DISG-Persönlichkeitsexperte. [...]`;
    
    const OPENROUTER_API_KEY = 'dein-openrouter-key';
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
            'HTTP-Referer': window.location.href,
            'X-Title': 'DISG Analyzer'
        },
        body: JSON.stringify({
            model: 'mistralai/mistral-7b-instruct:free', // Kostenloses Modell
            messages: [
                { role: 'user', content: prompt }
            ]
        })
    });
    
    const data = await response.json();
    const result = data.choices[0].message.content;
    results[type].innerHTML = `<p class="fade-in">${result}</p>`;
}
```

**Kostenlose Modelle auf OpenRouter:**
- `mistralai/mistral-7b-instruct:free`
- `google/gemma-7b-it:free`
- `meta-llama/llama-3-8b-instruct:free`

---

## 5. Lokale LLM-Lösung (Komplett offline)

**Mit Ollama (für fortgeschrittene Nutzer):**

1. Installiere [Ollama](https://ollama.ai)
2. Lade Modell: `ollama pull mistral`
3. Starte Server: `ollama serve`
4. Code:

```javascript
async function analyzeType(type, text) {
    const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: 'mistral',
            prompt: prompt,
            stream: false
        })
    });
    
    const data = await response.json();
    const result = data.response;
    results[type].innerHTML = `<p class="fade-in">${result}</p>`;
}
```

---

## 🛡️ Sicherheitshinweis für API Keys

**WICHTIG:** API Keys sollten NIEMALS direkt im Frontend-Code stehen!

### Richtige Lösung: Serverless Function

Erstelle ein Backend (z.B. Vercel Serverless Function):

**api/analyze.js:**
```javascript
export default async function handler(req, res) {
    const { type, text } = req.body;
    
    const response = await fetch('https://api.groq.com/...', {
        headers: {
            'Authorization': `Bearer ${process.env.GROQ_API_KEY}` // Sicher!
        },
        body: JSON.stringify({...})
    });
    
    const data = await response.json();
    res.json(data);
}
```

**Im Frontend:**
```javascript
const response = await fetch('/api/analyze', {
    method: 'POST',
    body: JSON.stringify({ type, text })
});
```

---

## 🎁 Meine Empfehlung

Für den Start: **Hugging Face** (bereits implementiert!)
- Keine Registrierung nötig
- Funktioniert sofort
- Für mehr Requests: Erstelle kostenlosen Account

Für beste Performance: **Groq**
- Sehr schnell
- Gute Modelle
- Kostenlos und großzügig

Für Produktion: **Backend mit Serverless Functions**
- Sicher
- Skalierbar
- API Keys geschützt
