// Vercel Serverless Function für DISG Analyzer
// WICHTIG: Diese Datei muss in api/analyze.js liegen

export default async function handler(req, res) {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // GET request für Testing
    if (req.method === 'GET') {
        res.status(200).json({ 
            status: 'Function is running!',
            message: 'Use POST request with type and text parameters',
            timestamp: new Date().toISOString()
        });
        return;
    }

    // POST request für echte Analyse
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        const { type, text } = req.body;

        // Validierung
        if (!type || !text) {
            res.status(400).json({ 
                error: 'Missing parameters',
                required: { type: 'd|i|s|g', text: 'string' }
            });
            return;
        }

        if (!['d', 'i', 's', 'g'].includes(type)) {
            res.status(400).json({ error: 'Invalid type. Must be d, i, s, or g' });
            return;
        }

        // DISG Typ-Beschreibungen
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

        // API Key aus Environment Variable
        const apiKey = process.env.GROQ_API_KEY;
        
        if (!apiKey) {
            console.error('GROQ_API_KEY not set in environment variables');
            res.status(500).json({ 
                error: 'Server configuration error',
                message: 'API key not configured. Please set GROQ_API_KEY in Vercel environment variables.'
            });
            return;
        }

        // Groq API Call
        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
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

        if (!groqResponse.ok) {
            const errorText = await groqResponse.text();
            console.error('Groq API Error:', groqResponse.status, errorText);
            res.status(groqResponse.status).json({ 
                error: 'AI service error',
                status: groqResponse.status,
                message: 'Failed to generate response from AI'
            });
            return;
        }

        const data = await groqResponse.json();
        
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            console.error('Unexpected response format:', data);
            res.status(500).json({ error: 'Unexpected response format from AI' });
            return;
        }

        const result = data.choices[0].message.content;
        
        res.status(200).json({ result });

    } catch (error) {
        console.error('Handler error:', error);
        res.status(500).json({ 
            error: 'Internal server error',
            message: error.message 
        });
    }
}
