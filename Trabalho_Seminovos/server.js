const express = require('express');
const path = require('path');

const app = express();
const PORT = 6200;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/index.html'));
});

app.get('/quemsou', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/quemsou.html'));
});

app.get('/ofertas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/ofertas.html'));
});

app.get('/novos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/novos.html'));
});

app.get('/seminovos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pages/seminovos.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});