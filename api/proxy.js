export default async function handler(req, res) {
    const path = req.query.path || '';
    const isImage = req.query.type === 'image';

    // สร้าง query string จากค่าที่เหลือใน req.query (ยกเว้น path และ type)
    const queryParams = new URLSearchParams();
    Object.keys(req.query).forEach(key => {
        if (key !== 'path' && key !== 'type') {
            queryParams.append(key, req.query[key]);
        }
    });

    const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
    const baseUrl = isImage ? 'http://103.91.190.200:3322' : 'http://103.91.190.200:30120';

    try {
        const response = await fetch(`${baseUrl}/${path}${queryString}`, {
            method: req.method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
        });

        if (isImage) {
            const buffer = await response.arrayBuffer();
            const contentType = response.headers.get('content-type') || 'image/png';
            const fileName = path.split('/').pop();

            res.setHeader('Content-Type', contentType);
            res.setHeader('Content-Disposition', `inline; filename="${fileName}"`);
            res.send(Buffer.from(buffer));
        } else {
            const data = await response.text();
            res.status(response.status).send(data);
        }
    } catch (error) {
        res.status(500).json({ error: 'Connection failed' });
    }
}