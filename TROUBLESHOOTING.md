# 🔧 Troubleshooting Guide

## Problem: "Fehler bei der Generierung"

### Schritt 1: Finde die genaue Ursache

1. **Öffne die Browser Developer Tools:**
   - Chrome/Edge: `F12` oder `Rechtsklick → Untersuchen`
   - Firefox: `F12` oder `Rechtsklick → Element untersuchen`
   - Safari: `Cmd+Option+I`

2. **Gehe zum "Console" Tab**

3. **Klicke "Analysieren" nochmal**

4. **Schaue nach Fehlermeldungen** (meist in rot)

---

## Häufige Fehler und Lösungen

### ❌ Fehler: "404 Not Found" oder "Failed to fetch /api/analyze"

**Ursache:** Die Serverless Function wurde nicht gefunden.

**Lösungen:**

1. **Prüfe ob du auf Vercel deployed hast:**
   - Die sichere Version (`index.html` + `api/analyze.js`) funktioniert NUR auf Vercel
   - Lokal funktioniert es NICHT ohne `vercel dev`

2. **Für lokales Testen:**
   ```bash
   # Installiere Vercel CLI
   npm install -g vercel
   
   # Im Projektordner
   vercel dev
   
   # Öffne: http://localhost:3000
   ```

3. **ODER nutze die Test-Version:**
   - Öffne `test-local.html` direkt im Browser
   - Gib deinen API Key ein
   - Diese Version funktioniert ohne Server

---

### ❌ Fehler: "500 Internal Server Error"

**Ursache:** API Key nicht gesetzt oder ungültig.

**Lösungen:**

1. **Prüfe Environment Variable in Vercel:**
   - Gehe zu: Vercel Dashboard → Dein Projekt → Settings → Environment Variables
   - Prüfe ob `GROQ_API_KEY` existiert
   - Falls nicht, füge hinzu (siehe DEPLOYMENT-ANLEITUNG.md)

2. **Prüfe ob der API Key korrekt ist:**
   - Gehe zu [console.groq.com](https://console.groq.com)
   - Gehe zu "API Keys"
   - Erstelle ggf. einen neuen Key
   - Aktualisiere in Vercel

3. **Redeploy nach Änderung:**
   - Vercel Dashboard → Deployments → ... → Redeploy

---

### ❌ Fehler: "401 Unauthorized"

**Ursache:** API Key ist falsch oder abgelaufen.

**Lösung:**
1. Gehe zu [console.groq.com](https://console.groq.com) → API Keys
2. Erstelle einen NEUEN API Key
3. Aktualisiere in Vercel: Settings → Environment Variables → GROQ_API_KEY
4. Redeploy

---

### ❌ Fehler: "429 Too Many Requests"

**Ursache:** Rate Limit erreicht (zu viele Anfragen).

**Lösung:**
- Warte 1 Minute
- Groq Free Tier erlaubt 30 Requests pro Minute
- Versuche es erneut

---

### ❌ Fehler: "CORS Error" oder "Cross-Origin"

**Ursache:** Browser blockiert die Anfrage.

**Lösung:**
- Dies passiert nur bei lokalen Tests ohne Server
- Nutze entweder:
  1. `vercel dev` (empfohlen)
  2. `test-local.html` (ruft Groq API direkt auf)
  3. Deploy auf Vercel (keine CORS-Probleme)

---

## Debugging Schritt-für-Schritt

### 1. Test mit test-local.html

```bash
# Öffne test-local.html im Browser
# Diese Version hat detaillierte Console-Logs
```

1. Öffne `test-local.html` im Browser
2. Öffne Developer Tools (F12) → Console Tab
3. Gib deine Nachricht ein
4. Klicke "Analysieren"
5. Schaue in der Console nach:
   - "Analyzing type d..." = API-Aufruf startet
   - "Response for type d: {...}" = Erfolg!
   - Fehlermeldungen in rot = Fehler

### 2. Prüfe API Key

```bash
# Teste deinen API Key direkt
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer DEIN-API-KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama-3.3-70b-versatile",
    "messages": [{"role": "user", "content": "Hallo"}]
  }'
```

Erwartete Antwort: JSON mit "choices" Array

### 3. Prüfe Vercel Deployment

1. Gehe zu Vercel Dashboard
2. Klicke auf dein Projekt
3. Gehe zu "Functions"
4. Prüfe ob `/api/analyze` gelistet ist
5. Falls nicht → Redeploy

### 4. Prüfe Vercel Logs

1. Vercel Dashboard → Dein Projekt
2. Klicke auf "Logs" oder "Runtime Logs"
3. Klicke "Analysieren" auf deiner Website
4. Schaue nach Fehlermeldungen in den Logs

---

## Welche Version nutzen?

### Für lokales Testen:
- ✅ **`test-local.html`** - Öffne direkt im Browser
- ✅ **`vercel dev`** - Mit voller Serverless Function

### Für Production:
- ✅ **Deploy auf Vercel** mit `index.html` + `api/analyze.js`
- ❌ **NICHT** `test-local.html` deployen (API Key im Code!)

---

## Quick Fix: Nutze test-local.html

Falls nichts funktioniert:

1. **Öffne `test-local.html` im Browser**
2. **Gib deinen Groq API Key ein** (von console.groq.com)
3. **Teste direkt** - sollte sofort funktionieren

Diese Version:
- Braucht keinen Server
- Braucht kein Vercel
- Funktioniert sofort
- ⚠️ Aber: NUR zum Testen! NICHT deployen!

---

## Noch Probleme?

### Checklist:

- [ ] Browser Developer Tools geöffnet (F12)
- [ ] Console Tab geöffnet
- [ ] Fehlermeldung kopiert
- [ ] `test-local.html` getestet
- [ ] API Key von console.groq.com geholt
- [ ] Internetverbindung funktioniert

### Häufigste Ursachen:

1. **80%** - API Key nicht in Vercel gesetzt
2. **15%** - API Key ungültig/falsch
3. **5%** - Andere Probleme

### Kontakt:

- Groq Support: [console.groq.com/docs](https://console.groq.com/docs)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)

---

## Erfolgscheck ✅

Wenn alles funktioniert siehst du:
1. ✅ Nachricht eingeben
2. ✅ "Analysieren" klicken
3. ✅ "Wird generiert..." erscheint
4. ✅ Nach 2-5 Sekunden erscheinen 4 Antworten
5. ✅ Keine roten Fehlermeldungen

Falls nicht → siehe oben!
