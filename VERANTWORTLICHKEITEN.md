# 🎯 Verantwortlichkeiten verfeinert – Setting & DISG-spezifisch

## Problem: Generische Verantwortungen

**Vorher:**
```
Verantwortung: Teammitglieder mit klaren Rollen
```
❌ Zu vage
❌ Nicht setting-spezifisch
❌ Nicht DISG-typ-spezifisch

## Lösung: 3-dimensionale Verfeinerung

### Dimension 1: Setting (Solo/Team/Spezialisten)
### Dimension 2: DISG-Typ (D/I/S/G)
### Dimension 3: Handlungsstil (was dieser Typ in diesem Setting tut)

---

## Setting-spezifische Verantwortungen

### 1. Solo-Setting

**Wer:** Immer DU selbst

**Fokus:** Tools, Vorlagen, externes Outsourcing

**Formulierungsstil:**
```
Du (Eigenleistung) oder Externe (Dienstleister/Tools)
```

**DISG-spezifische Beispiele:**

**D-Typ (Solo):**
```
Verantwortung: Du entscheidest sofort, externe Dienstleister (VA, 
Texter) setzen um. Steuerberater prüft Compliance.
```
→ D gibt vor, outsourcet Ausführung

**I-Typ (Solo):**
```
Verantwortung: Du kommunizierst mit Kunden, CRM-Tool automatisiert 
Follow-ups. Social Media Manager postet Content.
```
→ I kommuniziert, Tools automatisieren

**S-Typ (Solo):**
```
Verantwortung: Du arbeitest schrittweise Checkliste ab, Templates 
strukturieren Prozess. Buchhaltungs-Software erfasst Belege.
```
→ S nutzt Strukturen, Templates leiten

**G-Typ (Solo):**
```
Verantwortung: Du recherchierst DIN-Norm selbst, Fachanwalt prüft 
Details. Qualitätssicherungs-Tool validiert Output.
```
→ G recherchiert selbst, lässt extern validieren

---

### 2. Kleines Team

**Wer:** Du (Führung) + Generalisten

**Fokus:** Verteilung nach Kompetenz UND Kapazität

**Formulierungsstil:**
```
Du (Führung) + Generalist A/B/C (Umsetzung)
```

**DISG-spezifische Beispiele:**

**D-Typ (Kleines Team):**
```
Verantwortung: Du gibst Deadline vor (Freitag 17:00), Generalist mit 
meister Kapazität übernimmt Task. Bei Blocker eskalierst du sofort.
```
→ D setzt Deadline, verteilt pragmatisch

**I-Typ (Kleines Team):**
```
Verantwortung: Du motivierst im Kickoff, Teammitglied am nächsten am 
Thema setzt um. Du vernetzt bei Fragen mit anderen.
```
→ I motiviert, Ausführung beim Kompetenten

**S-Typ (Kleines Team):**
```
Verantwortung: Du koordinierst fair, Aufgaben nach aktueller 
Auslastung verteilen. Kollege B ist weniger ausgelastet → übernimmt.
```
→ S verteilt nach Auslastung, nicht Hierarchie

**G-Typ (Kleines Team):**
```
Verantwortung: Du prüfst Qualität im Review, Teammitglied mit 
Fachkompetenz führt aus. Du validierst vor Finalisierung.
```
→ G prüft, Kompetenter führt aus

---

### 3. Spezialisten-Team

**Wer:** Du (Strategie) → Abteilungen/Experten

**Fokus:** Deine Rolle ist DELEGIEREND, nicht operativ

**Formulierungsstil:**
```
Du (Strategie/Delegation) → Abteilung/Experte (Ausführung)
```

**DISG-spezifische Beispiele:**

**D-Typ (Spezialisten):**
```
Verantwortung: Du beauftragst IT-Abteilung mit Deadline (Q2), 
HR rekrutiert bis Ende März. Bei Verzug eskalierst du an Geschäftsführung.
```
→ D beauftragt mit harter Deadline

**I-Typ (Spezialisten):**
```
Verantwortung: Du briefst Marketing-Fachbereich, vernetzt mit 
Sales-Team. Community Manager setzt Kampagne um, du moderierst Abstimmung.
```
→ I briefed, vernetzt, moderiert

**S-Typ (Spezialisten):**
```
Verantwortung: Du koordinierst zwischen IT und Fachbereich, holst 
Feedback regelmäßig ein. Projektmanager orchestriert Timelines.
```
→ S koordiniert zwischen Abteilungen

**G-Typ (Spezialisten):**
```
Verantwortung: Du definierst Qualitätsstandards, Rechtsabteilung 
validiert Compliance. Fachabteilung Z prüft technische Umsetzung.
```
→ G definiert Standards, Experten validieren

---

## Beispiel: "Neues Produkt launchen"

### Solo-Setting

**D-Typ:**
```
Verantwortung: Du entscheidest Feature-Set heute, externe Agentur 
entwickelt MVP. Freelance-Tester prüft vor Launch.
```

**G-Typ:**
```
Verantwortung: Du recherchierst Markt-Standards selbst, externer 
UX-Experte validiert Usability. Anwalt prüft AGB.
```

### Kleines Team

**D-Typ:**
```
Verantwortung: Du gibst Go-Live-Datum vor (30. Juni), Entwickler A 
(hat Kapazität) baut Features. Designer B erstellt Assets parallel.
```

**S-Typ:**
```
Verantwortung: Du koordinierst Tasks nach Auslastung, Entwickler mit 
wenigster Load übernimmt Backend. Alle geben Feedback im Weekly.
```

### Spezialisten-Team

**D-Typ:**
```
Verantwortung: Du beauftragst Produktmanagement mit Roadmap (KW 20), 
Engineering implementiert bis Q2. Marketing startet parallel Kampagne.
```

**G-Typ:**
```
Verantwortung: Du definierst Qualitäts-KPIs, QA-Abteilung validiert 
vor Release. Legal prüft alle Claims, IT-Security testet Penetration.
```

---

## Prompt-Verbesserungen

### Neue Struktur im Prompt

```javascript
const settingContexts = {
    solo: {
        whoGuidance: 'Du selbst führst aus oder outsourcest',
        whoExamples: {
            d: 'Du entscheidest sofort, externe Dienstleister setzen um',
            i: 'Du kommunizierst, Tools automatisieren Routinen',
            s: 'Du arbeitest schrittweise ab, Templates strukturieren',
            g: 'Du recherchierst Standards selbst, Fachexperten prüfen'
        },
        focusNote: 'Fokus auf Tools, Vorlagen, externes Outsourcing',
        roleStyle: 'Du (Eigenleistung) oder Externe (Dienstleister/Tools)'
    },
    // ... small_team, specialists
};

const whoExample = settingContext.whoExamples[type];
```

### DISG-spezifische Verhaltensweisen im Prompt

```javascript
WICHTIG - DISG-SPEZIFISCHE VERANTWORTUNG:
Ein ${info.name}-Typ im ${settingContext.name} agiert so:
${type === 'd' ? '- Gibt Deadlines vor, fordert Ergebnisse ein' : ''}
${type === 'i' ? '- Kommuniziert Vision, vernetzt Beteiligte' : ''}
${type === 's' ? '- Koordiniert sanft, verteilt nach Auslastung' : ''}
${type === 'g' ? '- Definiert Standards, prüft Details' : ''}
```

---

## Qualitätskriterien

### ✅ Setting-spezifisch
- Solo: "Du" oder "Externe"
- Team: "Du" + "Generalist A/B"
- Spezialisten: "Du" → "Abteilung X"

### ✅ DISG-spezifisch
- D: Gibt Deadlines vor, eskaliert
- I: Kommuniziert, vernetzt, motiviert
- S: Koordiniert, verteilt fair, holt Feedback
- G: Definiert Standards, validiert Details

### ✅ Actionable
- Keine Vaguheit ("jemand macht")
- Konkrete Rollen benannt
- Klare Aufgabenverteilung

---

## Vorher/Nachher

### Vorher (generisch)
```
Verantwortung: Projektleiter steuert, Team setzt um
```
❌ Gilt für alle Settings gleich
❌ Kein DISG-Bezug
❌ Zu vage

### Nachher Solo (D-Typ)
```
Verantwortung: Du entscheidest Feature-Set heute, externe Agentur 
entwickelt MVP bis Freitag. Freelance-Tester prüft vor Launch.
```
✅ Klar wer (Du + Externe)
✅ D-typisch (schnelle Entscheidung, Deadline)
✅ Solo-typisch (Outsourcing)

### Nachher Spezialisten (G-Typ)
```
Verantwortung: Du definierst Qualitäts-KPIs und Abnahmekriterien, 
QA-Abteilung validiert jedes Feature vor Merge. Legal prüft alle 
Customer-facing Claims.
```
✅ Klar wer (Du strategisch, Abteilungen operativ)
✅ G-typisch (Standards definieren, validieren)
✅ Spezialisten-typisch (Delegation an Fachabteilungen)

---

## Testing-Checkliste

Nach Deployment prüfen:

### Solo
- [ ] Steht "Du" für Eigenleistung?
- [ ] Werden Tools/Externe benannt?
- [ ] D-Typ entscheidet schnell?
- [ ] G-Typ recherchiert selbst?

### Kleines Team
- [ ] Steht "Du" für Führung?
- [ ] Sind "Generalisten" benannt?
- [ ] Verteilung nach Kapazität erwähnt?
- [ ] S-Typ koordiniert fair?

### Spezialisten
- [ ] Ist Rolle strategisch/delegierend?
- [ ] Sind Abteilungen konkret benannt (IT, HR, Legal)?
- [ ] Keine operative Eigenleistung von "Du"?
- [ ] D-Typ gibt Deadlines vor, I vernetzt?

---

## Zusammenfassung

**Jede Verantwortung ist jetzt:**
- ✅ Setting-spezifisch (Solo/Team/Spezialisten)
- ✅ DISG-typ-spezifisch (D/I/S/G Handlungsstil)
- ✅ Konkret benannt (keine vagen Rollen)
- ✅ Actionable (klar wer was macht)

**3-dimensionale Präzision:**
```
Setting × DISG-Typ × Handlungsstil = Präzise Verantwortung
```

**myLurch liefert jetzt chirurgisch präzise Verantwortungs-Zuweisungen!** 🎯
