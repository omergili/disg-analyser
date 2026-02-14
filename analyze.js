// api/analyze.js - Serverless Function
export default async function handler(req, res) {
    // Nur POST-Requests erlauben
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { type, text } = req.body;

    // Validierung
    if (!type || !text) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!['d', 'i', 's', 'g'].includes(type)) {
        return res.status(400).json({ error: 'Invalid type' });
    }

    const typeDescriptions = {
        d: {
            name: 'Dominant',
            traits: 'direkt, ergebnisorientiert, entscheidungsfreudig, ungeduldig',
            focus: 'Fokus auf Ergebnisse und Kontrolle'
        },
        i: {
            name: 'Initiativ',
            traits: 'enthusiastisch, kommunikativ, optimistisch, beziehungsorientiert',
            focus: 'Fokus auf Menschen und positive Energie'
        },
        s: {
            name: 'Stetig',
            traits: 'geduldig, loyal, kooperativ, harmoniebedürftig',
            focus: 'Fokus auf Stabilität und Teamarbeit'
        },
        g: {
            name: 'Gewissenhaft',
            traits: 'analytisch, präzise, detailorientiert, qualitätsbewusst',
            focus: 'Fokus auf Genauigkeit und Qualität'
        }
    };

    const typeInfo = typeDescriptions[type];
    
    const prompt = `Du bist ein DISG-Persönlichkeitsexperte. Analysiere die folgende Nachricht aus der Perspektive eines ${typeInfo.name}-Typs (${typeInfo.traits}).

Nachricht: "${text}"

Schreibe eine kurze, authentische Reaktion (2-4 Sätze), wie eine Person mit ${typeInfo.name}-Persönlichkeit auf diese Nachricht reagieren oder sie interpretieren würde. ${typeInfo.focus}.

Antworte NUR mit der Reaktion, ohne Einleitung oder Erklärung.`;

    try {
        // API Key ist sicher in Environment Variable gespeichert
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'user', content: prompt }
                ],
                temperature: 0.7,
                max_tokens: 300
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        const result = data.choices[0].message.content;
        
        return res.status(200).json({ result });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
