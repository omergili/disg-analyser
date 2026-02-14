# DISG Kommunikations-Analyzer

Eine interaktive Webanwendung, die analysiert, wie verschiedene DISG-Persönlichkeitstypen auf eine Nachricht reagieren würden.

## Was ist DISG?

DISG ist ein Persönlichkeitsmodell mit vier Typen:
- **D** (Dominant) - Ergebnisorientiert, direkt, entscheidungsfreudig
- **I** (Initiativ) - Enthusiastisch, kommunikativ, optimistisch
- **S** (Stetig) - Geduldig, loyal, teamorientiert
- **G** (Gewissenhaft) - Analytisch, präzise, qualitätsorientiert

## Features

- 🎯 Echtzeit-Analyse mit Claude AI
- 🎨 Modernes, responsives Design
- 📱 Mobile-optimiert
- ⚡ Schnelle Antworten
- 🔄 Alle vier Typen gleichzeitig

## Deployment auf Vercel

### Schnell-Deployment

1. Installiere Vercel CLI (falls noch nicht geschehen):
```bash
npm install -g vercel
```

2. Im Projektordner:
```bash
vercel
```

3. Folge den Anweisungen im Terminal

### Über GitHub

1. Pushe den Code zu GitHub
2. Gehe zu [vercel.com](https://vercel.com)
3. Klicke auf "New Project"
4. Importiere dein GitHub Repository
5. Klicke auf "Deploy"

### Über Vercel Dashboard

1. Zippe alle Dateien
2. Gehe zu [vercel.com](https://vercel.com)
3. Klicke auf "New Project"
4. Wähle "Upload"
5. Lade die ZIP-Datei hoch

## Lokales Testen

```bash
# Mit Python
python -m http.server 8000

# Mit Node.js
npx serve .

# Dann öffne: http://localhost:8000
```

## Projektstruktur

```
disg-analyzer/
├── index.html       # Hauptdatei
├── vercel.json      # Vercel-Konfiguration
├── package.json     # Projekt-Metadaten
└── README.md        # Diese Datei
```

## Technologie

- **Frontend**: HTML, Tailwind CSS, Vanilla JavaScript
- **AI**: Anthropic Claude API (Sonnet 4)
- **Hosting**: Vercel

## Verwendung

1. Öffne die Website
2. Gib eine Nachricht ein (z.B. "Wir müssen das Projekt bis Freitag abschließen")
3. Klicke auf "Analysieren"
4. Sieh, wie jeder DISG-Typ reagieren würde

## Hinweis

Die Claude API wird direkt im Browser aufgerufen. Da kein API-Schlüssel erforderlich ist (wird von Claude.ai automatisch bereitgestellt), funktioniert dies nur in der Claude.ai-Umgebung.

Für eine produktive Version solltest du:
- Ein Backend mit API-Schlüsselverwaltung erstellen
- Rate Limiting implementieren
- Fehlerbehandlung verbessern

## Lizenz

MIT
