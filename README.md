# myLurch – DISG Kommunikations-Analyse

## Professionelles Business-Tool für präzise Kommunikation

### Übersicht

myLurch ist eine SaaS-Anwendung zur Analyse und Optimierung von Nachrichten basierend auf DISG-Persönlichkeitsprofilen.

---

## Features

✅ **Perspektivanalyse**: Zeigt, wie verschiedene Persönlichkeitstypen eine Nachricht interpretieren
✅ **Umschreib-Funktion**: Passt Nachrichten an spezifische DISG-Profile an
✅ **Professionelles Design**: Klares, businesstaugliches Interface (#1e293b)
✅ **Powered by Groq AI**: Schnelle, präzise KI-Analysen

---

## Design-Prinzipien

- **Farbschema**: Tiefes Blau (#1e293b), Weißraum, graue Akzente
- **Tonfall**: Sachlich, direkt, effizient
- **Zielgruppe**: Professionals, Teams, Business Communication
- **Keine persönlichen Bezüge**: Rein funktionales Tool

---

## Deployment

### Vercel (Empfohlen)

```bash
# 1. Repository erstellen (GitHub)
# 2. Mit Vercel verbinden
# 3. Environment Variable setzen:
#    GROQ_API_KEY = dein-api-key

# Deploy automatisch bei Git Push
```

### Lokales Testen

```bash
vercel dev
```

---

## Struktur

```
mylurch/
├── index.html          # Hauptanwendung
└── api/
    └── analyze.js      # Groq API Integration
```

---

## Anwendungsbereiche

- E-Mail-Kommunikation
- Meeting-Vorbereitung
- Präsentationen
- Feedback-Gespräche
- Change Management
- Stakeholder-Kommunikation

---

## DISG-Modell

**D (Dominant)**: Ergebnisorientiert, direkt
**I (Initiativ)**: Kommunikativ, enthusiastisch
**S (Stetig)**: Geduldig, teamorientiert
**G (Gewissenhaft)**: Analytisch, präzise

---

## Technologie

- Frontend: HTML, Tailwind CSS, Vanilla JavaScript
- Backend: Vercel Serverless Functions
- AI: Groq API (Llama 3.3 70B)
- Hosting: Vercel

---

## Lizenz

Proprietär
