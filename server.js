const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('.'));
app.post('/api/report', (req, res) => {
    console.log('📍 座標截獲:', req.body.lat, req.body.lng);
    res.json({ status: 'ok' });
});
module.exports = app;
app.listen(3000);
