export default async function handler(req, res) {
    const path = req.query.path || '';
    const isImage = req.query.type === 'image';

    try {
        const response = await fetch(`http://103.91.190.200:30120/${path}`, {
            method: req.method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
        });

        if (isImage) {
            const buffer = await response.arrayBuffer();
            res.setHeader('Content-Type', response.headers.get('content-type'));
            res.send(Buffer.from(buffer));
        } else {
            const data = await response.text();
            res.status(response.status).send(data);
        }
    } catch (error) {
        res.status(500).json({ error: 'Connection failed' });
    }
}