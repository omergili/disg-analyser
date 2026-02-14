// api/analyze.js - Serverless Function
// Der API Key wird sicher aus der Environment Variable gelesen

export default async function handler(req, res) {
    // CORS Headers für Entwicklung
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

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
        // API Key wird sicher aus der Environment Variable gelesen
        // Dieser Key wird in Vercel unter Settings → Environment Variables gesetzt
        const apiKey = process.env.GROQ_API_KEY;
        
        if (!apiKey) {
            console.error('GROQ_API_KEY not found in environment variables');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
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
            const errorData = await response.text();
            console.error('Groq API Error:', response.status, errorData);
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
