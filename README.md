# myLurch V2 – Strategische Planung durch Perspektivwechsel

## Kernfokus: Vorgehensweise & Projektplanung

### Was ist neu?

**myLurch ist jetzt ein strategisches Planungstool**, das Aufgaben und Projekte aus allen vier DISG-Perspektiven betrachtet.

---

## Konzept

### Input
Der Nutzer gibt eine **Aufgabe oder ein Ziel** ein:
- "Ein neues Produkt launchen"
- "Ein Team aufbauen"
- "Eine Präsentation vorbereiten"
- "Change Management durchführen"

### Output

**1. Vier Strategien:**
- **D-Strategie**: Wie ein Dominant-Typ vorgehen würde
- **I-Strategie**: Wie ein Initiativ-Typ vorgehen würde
- **S-Strategie**: Wie ein Stetig-Typ vorgehen würde
- **G-Strategie**: Wie ein Gewissenhaft-Typ vorgehen würde

**2. Persönliche Warnung:**
Basierend auf dem eigenen Typ:
> "Achtung: Als I-Typ achte bei diesem Auftrag besonders auf die G-Aspekte!"

**3. Persönliche Checkliste:**
> "Was du als [Dein Typ] wahrscheinlich vergisst"

---

## Features

✅ **Ganzheitliche Strategieentwicklung**
✅ **Blinde Flecken identifizieren**
✅ **Personalisierte Warnungen**
✅ **Typ-spezifische Checklisten**
✅ **Professionelles Business-Design**

---

## Design-Änderungen

### Neue Titel
- ❌ Alt: "Dominant (D)", "Initiativ (I)", etc.
- ✅ Neu: "Die D-Strategie", "Die I-Strategie", etc.

### Neue Auswahl
- Radio-Buttons: "Was ist dein eigener Typ?"
- 4 Optionen: D, I, S, G

### Neuer Slogan
- ❌ Alt: "Präzise Kommunikation durch Perspektivwechsel"
- ✅ Neu: "Strategische Planung durch Perspektivwechsel"

---

## Anwendungsbereiche

- **Projektplanung**: Vollständige Perspektive entwickeln
- **Produktentwicklung**: Alle Aspekte berücksichtigen
- **Change Management**: Widerstände antizipieren
- **Strategieentwicklung**: Blinde Flecken eliminieren
- **Teamaufbau**: Komplementäre Stärken nutzen

---

## Technologie

- Frontend: HTML, Tailwind CSS, Vanilla JavaScript
- Backend: Vercel Serverless Functions
- AI: Groq API (Llama 3.3 70B)
- Hosting: Vercel

---

## Deployment

### Vercel (wie gewohnt)

```bash
# Upload myLurch-V2-STRATEGY.zip
# Setze Environment Variable: GROQ_API_KEY
# Deploy
```

### Struktur

```
mylurch-v2/
├── index.html          # Strategisches Planungstool
└── api/
    └── analyze.js      # Backend
```

---

## Beispiel-Workflow

**Input:**
```
Aufgabe: "Ein neues Produkt launchen"
Eigener Typ: I (Initiativ)
```

**Output:**

**D-Strategie:**
"Klare Markteinführungs-Deadline setzen. Verantwortlichkeiten definieren. 
Go/No-Go Entscheidungspunkte festlegen..."

**I-Strategie:**
"Begeisterung im Team wecken. Early Adopters identifizieren. 
Launch-Event mit maximaler Sichtbarkeit planen..."

**S-Strategie:**
"Schrittweisen Rollout planen. Team mitnehmen. Risiken durch 
Beta-Phase minimieren..."

**G-Strategie:**
"Detaillierter Projektplan mit Meilensteinen. Qualitätsstandards definieren. 
Risikomatrix erstellen..."

**Warnung:**
"Achtung: Als I-Typ achte besonders auf die G-Aspekte! 
Details, Timelines und Qualitätssicherung nicht der Begeisterung opfern."

**Checkliste:**
```
• Detaillierte Timeline mit Deadlines
• Qualitäts-KPIs definieren
• Budget-Tracking einrichten
• Risk Management Plan
• Dokumentation der Entscheidungen
```

---

## Unterschied zu V1

| Aspekt | V1 (Kommunikation) | V2 (Strategie) |
|--------|-------------------|----------------|
| Fokus | Textanalyse | Projektplanung |
| Input | Nachricht | Aufgabe/Ziel |
| Output | Interpretationen | Strategien |
| Use Case | E-Mails, Messages | Projekte, Planung |
| Mehrwert | Missverständnisse vermeiden | Ganzheitliche Planung |

---

## Lizenz

Proprietär
