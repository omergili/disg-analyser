# DISG Kommunikations-Analyzer

Eine interaktive Webanwendung, die analysiert, wie verschiedene DISG-Persönlichkeitstypen auf eine Nachricht reagieren würden.

## 🎯 Was ist DISG?

DISG ist ein Persönlichkeitsmodell mit vier Typen:
- **D** (Dominant) - Ergebnisorientiert, direkt, entscheidungsfreudig
- **I** (Initiativ) - Enthusiastisch, kommunikativ, optimistisch
- **S** (Stetig) - Geduldig, loyal, teamorientiert
- **G** (Gewissenhaft) - Analytisch, präzise, qualitätsorientiert

## ✨ Features

- 🎯 Echtzeit-Analyse mit Groq AI (Llama 3.3 70B)
- 🎨 Modernes, responsives Design
- 📱 Mobile-optimiert
- ⚡ Ultra-schnelle Antworten
- 🔒 Sicherer API Key (Serverless Functions)
- 🔄 Alle vier Typen gleichzeitig

## 🚀 Deployment auf Vercel

### Schnell-Deployment

1. **Projekt hochladen:**
   - Gehe zu [vercel.com](https://vercel.com)
   - Klicke "New Project"
   - Lade dein Projekt hoch (ZIP oder GitHub)

2. **Environment Variable setzen:**
   - Gehe zu: Settings → Environment Variables
   - Füge hinzu:
     - Name: `GROQ_API_KEY`
     - Value: `dein-groq-api-key` (von console.groq.com)
     - Environment: Production ✅ Preview ✅ Development ✅

3. **Deploy!**
   - Vercel deployed automatisch
   - Fertig! 🎉

### Über Vercel CLI

```bash
# 1. Installiere Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Setze Environment Variable
vercel env add GROQ_API_KEY
# Eingeben: dein-groq-api-key
# Wähle: Production, Preview, Development

# 5. Production Deploy
vercel --prod
```

## 🔑 API Key bekommen

1. Gehe zu [console.groq.com](https://console.groq.com)
2. Registriere dich (kostenlos)
3. Erstelle einen API Key
4. Nutze diesen Key in Vercel Environment Variables

**WICHTIG:** Setze den Key NIEMALS direkt im Code! Nutze immer Environment Variables.

## 💻 Lokales Testen

```bash
# 1. Erstelle .env Datei
echo "GROQ_API_KEY=dein-key" > .env

# 2. Installiere Vercel CLI
npm install -g vercel

# 3. Starte lokal
vercel dev

# 4. Öffne: http://localhost:3000
```

## 📁 Projektstruktur

```
disg-analyzer/
├── index.html              # Frontend (KEIN API Key!)
├── api/
│   └── analyze.js          # Serverless Function (liest .env)
├── .env.example            # Template für API Key
├── .gitignore              # Schützt .env
├── vercel.json             # Vercel-Konfiguration
├── package.json            # Projekt-Metadaten
└── README.md               # Diese Datei
```

## 🔒 Sicherheit

- ✅ API Key wird NUR auf dem Server gespeichert
- ✅ Kein API Key im Frontend-Code
- ✅ `.env` ist in `.gitignore`
- ✅ Serverless Functions schützen sensible Daten

## 🎮 Verwendung

1. Öffne die Website
2. Gib eine Nachricht ein (z.B. "Wir müssen das Projekt bis Freitag abschließen")
3. Klicke auf "Analysieren"
4. Sieh, wie jeder DISG-Typ reagieren würde

## 🛠️ Technologie

- **Frontend**: HTML, Tailwind CSS, Vanilla JavaScript
- **Backend**: Vercel Serverless Functions (Node.js)
- **AI**: Groq API (Llama 3.3 70B Versatile)
- **Hosting**: Vercel

## 📊 API Limits (Groq Free Tier)

- 14.400 Requests pro Tag
- 30 Requests pro Minute
- Komplett kostenlos!

## 📝 Lizenz

MIT

## 🤝 Support

Bei Fragen oder Problemen:
- Groq Docs: [console.groq.com/docs](https://console.groq.com/docs)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
