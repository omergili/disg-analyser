# 🚀 Deployment-Anleitung

## Schritt 1: API Key besorgen


1. Gehe zu [console.groq.com](https://console.groq.com)
2. Klicke auf "Sign Up" (falls noch kein Account)
3. Bestätige deine E-Mail
4. Gehe zu "API Keys"
5. Klicke "Create API Key"
6. Kopiere den Key (sieht aus wie: `gsk_...`)
7. **Speichere ihn sicher!** (Du siehst ihn nur einmal)

---

## Schritt 2: Projekt auf Vercel deployen

### Option A: Über Vercel Dashboard (Empfohlen)

1. **Gehe zu [vercel.com](https://vercel.com)**
2. **Klicke "Sign Up" oder "Log In"**
3. **Klicke "Add New..." → "Project"**
4. **Import Project:**
   - Wähle "Upload" (ZIP) ODER
   - Verbinde dein GitHub Repository

5. **Projekt hochladen:**
   - Zippe alle Dateien (außer `.env`)
   - Lade die ZIP-Datei hoch

6. **Deploy Settings:**
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Klicke "Deploy"

7. **⏳ Warte bis Deployment fertig ist**

---

## Schritt 3: API Key in Vercel setzen

**WICHTIG:** Der API Key muss als Environment Variable gesetzt werden!

1. **Gehe zu deinem Projekt in Vercel**
2. **Klicke auf "Settings" (oben)**
3. **Klicke auf "Environment Variables" (links)**
4. **Füge neue Variable hinzu:**
   - **Key:** `GROQ_API_KEY`
   - **Value:** `gsk_...` (dein Groq API Key von Schritt 1)
   - **Environments:** Wähle alle aus:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
5. **Klicke "Save"**

---

## Schritt 4: Redeploy

Nachdem du die Environment Variable gesetzt hast:

1. **Gehe zu "Deployments"**
2. **Klicke auf die letzte Deployment**
3. **Klicke "..." → "Redeploy"**
4. **Wähle "Use existing Build Cache"**
5. **Klicke "Redeploy"**

---

## Schritt 5: Testen

1. **Öffne deine Website** (Link von Vercel)
2. **Gib eine Nachricht ein**
3. **Klicke "Analysieren"**
4. **Prüfe ob alle 4 Quadranten Ergebnisse anzeigen**

✅ **Funktioniert es?** → Perfekt!
❌ **Fehler?** → Siehe Troubleshooting unten

---

## 🔧 Troubleshooting

### Fehler: "Server configuration error"
**Problem:** API Key nicht gesetzt
**Lösung:** 
1. Gehe zu Settings → Environment Variables
2. Prüfe ob `GROQ_API_KEY` existiert
3. Falls nicht, füge hinzu (siehe Schritt 3)
4. Redeploy (siehe Schritt 4)

### Fehler: "Internal server error"
**Problem:** API Key ungültig
**Lösung:**
1. Prüfe ob der Key richtig kopiert wurde
2. Erstelle einen neuen Key bei Groq
3. Aktualisiere die Environment Variable
4. Redeploy

### Fehler: "API Error: 401"
**Problem:** API Key falsch oder abgelaufen
**Lösung:**
1. Gehe zu console.groq.com
2. Erstelle neuen API Key
3. Aktualisiere in Vercel
4. Redeploy

### Keine Antworten, aber kein Fehler
**Problem:** JavaScript lädt nicht
**Lösung:**
1. Öffne Browser DevTools (F12)
2. Gehe zu "Console" Tab
3. Schaue nach Fehlermeldungen
4. Prüfe "Network" Tab ob `/api/analyze` aufgerufen wird

---

## 🎯 Vercel CLI Alternative

Für Fortgeschrittene:

```bash
# 1. Installiere Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Im Projektordner
cd disg-analyzer

# 4. Deploy
vercel

# 5. Folge den Anweisungen
# Project Name: disg-analyzer
# Setup and Deploy: Y

# 6. Setze Environment Variable
vercel env add GROQ_API_KEY
# Wert eingeben: gsk_...
# Environments: Production, Preview, Development (alle auswählen)

# 7. Production Deploy
vercel --prod
```

---

## ✅ Checkliste

Vor dem Go-Live prüfen:

- [ ] Groq API Key erstellt
- [ ] Projekt auf Vercel deployed
- [ ] Environment Variable `GROQ_API_KEY` gesetzt
- [ ] Alle Environments ausgewählt (Production, Preview, Development)
- [ ] Nach dem Setzen der Variable redeployed
- [ ] Website getestet (Nachricht eingeben funktioniert)
- [ ] F12 → Console: Keine Fehler
- [ ] F12 → Sources: KEIN API Key im Code sichtbar

---

## 🔒 Sicherheits-Check

### SO prüfst du ob dein API Key sicher ist:

1. Öffne deine deployed Website
2. Drücke **F12** (Developer Tools)
3. Gehe zu **"Sources"** Tab
4. Öffne **index.html**
5. Suche nach "gsk_" (Strg+F oder Cmd+F)

**Ergebnis:**
- ✅ **"0 of 0"** oder "Nicht gefunden" → SICHER!
- ❌ **Key sichtbar** → UNSICHER! Nutze Serverless Function

---

## 📊 Monitoring

Nach dem Deployment:

1. **Groq Dashboard** ([console.groq.com](https://console.groq.com))
   - Prüfe API Usage
   - Überwache Request Limits
   - Schaue nach ungewöhnlicher Aktivität

2. **Vercel Dashboard**
   - Prüfe Function Invocations
   - Schaue Logs an (bei Fehlern)
   - Überwache Bandwidth

---

## 🎉 Fertig!

Dein DISG-Analyzer ist jetzt live und sicher deployed!

**Deine Website URL:** `https://dein-projekt.vercel.app`

Bei weiteren Fragen:
- Groq Docs: https://console.groq.com/docs
- Vercel Docs: https://vercel.com/docs
