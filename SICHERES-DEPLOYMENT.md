# 🔒 Sicheres Deployment - Anleitung

## ⚠️ WICHTIG: Warum die aktuelle Version UNSICHER ist

Die `index.html` hat den API Key direkt im Code eingebaut. Das bedeutet:
- ❌ Jeder kann den Key im Browser sehen (Rechtsklick → Seitenquelltext)
- ❌ Jeder kann deinen Key stehlen und missbrauchen
- ❌ Du hast keine Kontrolle über die Nutzung
- ❌ Dein Groq-Kontingent kann schnell aufgebraucht werden

## ✅ SICHERE Lösung: Serverless Functions

Die sichere Version verwendet:
- ✅ API Key versteckt auf dem Server
- ✅ Nur deine Website kann die API nutzen
- ✅ Kein direkter Zugriff auf den Key möglich
- ✅ Volle Kontrolle und Monitoring

---

## 🚀 Sichere Deployment-Schritte

### Option A: Über Vercel Dashboard (Empfohlen)

1. **Dateien vorbereiten:**
   - Ersetze `index.html` mit `index-secure.html`
   - Behalte den `api/` Ordner

2. **Projekt hochladen:**
   - Gehe zu [vercel.com](https://vercel.com)
   - Klicke auf "New Project"
   - Lade dein Projekt hoch (ZIP oder GitHub)

3. **Environment Variable setzen:**
   - Gehe zu: Project Settings → Environment Variables
   - Füge hinzu:
     - Name: `GROQ_API_KEY`
     - Value: `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`
     - Environment: Production, Preview, Development
   - Klicke "Save"

4. **Deploy:**
   - Vercel deployed automatisch
   - Fertig! 🎉

### Option B: Über Vercel CLI

```bash
# 1. Installiere Vercel CLI
npm install -g vercel

# 2. Im Projektordner
cd dein-projekt

# 3. Ersetze index.html
mv index-secure.html index.html

# 4. Login bei Vercel
vercel login

# 5. Deploy
vercel

# 6. Setze Environment Variable
vercel env add GROQ_API_KEY
# Wenn gefragt, gib ein: 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
# Wähle: Production, Preview, Development (alle)

# 7. Redeploy mit neuer Variable
vercel --prod
```

---

## 📁 Projektstruktur für sicheres Deployment

```
disg-analyzer/
├── index.html              ← Sichere Version (vorher: index-secure.html)
├── api/
│   └── analyze.js          ← Serverless Function mit API Key
├── vercel.json
├── package.json
├── .env.example            ← Vorlage für Environment Variables
└── README.md
```

---

## 🧪 Lokales Testen (mit sicherer Version)

```bash
# 1. Erstelle .env Datei
cp .env.example .env

# 2. Installiere Vercel CLI
npm install -g vercel

# 3. Starte lokal
vercel dev

# 4. Öffne: http://localhost:3000
```

---

## 🔍 So überprüfst du, ob es sicher ist

### ❌ UNSICHER:
```javascript
// API Key direkt im Code sichtbar
const GROQ_API_KEY = 'gsk_...';
```

### ✅ SICHER:
```javascript
// Kein API Key im Frontend!
const response = await fetch('/api/analyze', {
    method: 'POST',
    body: JSON.stringify({ type, text })
});
```

**Test:** 
1. Öffne deine deployed Website
2. Drücke F12 (Developer Tools)
3. Gehe zu "Sources" oder "Network"
4. Suche nach "gsk_" oder "API"
5. Wenn du den Key NICHT findest → ✅ Sicher!
6. Wenn du den Key findest → ❌ Unsicher!

---

## 💡 Weitere Sicherheits-Tipps

### 1. Rate Limiting hinzufügen
```javascript
// api/analyze.js
let requestCount = {};

export default async function handler(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    // Maximal 10 Requests pro Minute pro IP
    if (!requestCount[ip]) {
        requestCount[ip] = { count: 0, resetTime: Date.now() + 60000 };
    }
    
    if (Date.now() > requestCount[ip].resetTime) {
        requestCount[ip] = { count: 0, resetTime: Date.now() + 60000 };
    }
    
    if (requestCount[ip].count >= 10) {
        return res.status(429).json({ error: 'Too many requests' });
    }
    
    requestCount[ip].count++;
    
    // ... rest of code
}
```

### 2. CORS beschränken (nur deine Domain)
```javascript
// api/analyze.js
export default async function handler(req, res) {
    const allowedOrigins = ['https://deine-domain.vercel.app'];
    const origin = req.headers.origin;
    
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    
    // ... rest of code
}
```

### 3. API Key regelmäßig rotieren
- Erstelle jeden Monat einen neuen API Key bei Groq
- Aktualisiere die Environment Variable in Vercel
- Lösche den alten Key

---

## 📊 Monitoring

Überwache deine API-Nutzung:
1. Gehe zu [console.groq.com](https://console.groq.com)
2. Überprüfe "Usage" regelmäßig
3. Setze Alerts für ungewöhnlich hohe Nutzung

---

## ❓ FAQ

**Q: Kann ich trotzdem die unsichere Version nutzen?**
A: Nur zum Testen oder für private Projekte. Für öffentliche Websites NIEMALS!

**Q: Kostet Vercel extra für Serverless Functions?**
A: Nein! Vercel Free Tier beinhaltet 100GB Serverless Function Execution.

**Q: Was passiert wenn jemand meinen Key stiehlt?**
A: Sie können dein Groq-Kontingent aufbrauchen. Lösche den Key sofort bei Groq und erstelle einen neuen.

---

## ✅ Checkliste vor dem Go-Live

- [ ] `index-secure.html` als `index.html` verwenden
- [ ] `api/analyze.js` vorhanden
- [ ] Environment Variable `GROQ_API_KEY` in Vercel gesetzt
- [ ] API Key NICHT im Frontend-Code
- [ ] Test durchgeführt (F12 → kein Key sichtbar)
- [ ] Optional: Rate Limiting implementiert
- [ ] Optional: CORS beschränkt

---

🎉 **Nach diesen Schritten ist dein DISG-Analyzer sicher deployed!**
