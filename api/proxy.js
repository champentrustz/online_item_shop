export default async function handler(req, res) {
    const path = req.query.path || '';

    try {
        const response = await fetch(`http://103.91.190.200:30120/${path}`, {
            method: req.method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
        });

        const data = await response.text();
        res.status(response.status).send(data);
    } catch (error) {
        res.status(500).json({ error: 'Connection failed' });
    }
}