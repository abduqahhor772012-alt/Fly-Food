const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// API Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Fly Food API is running' });
});

// Order creation endpoint
app.post('/api/orders', (req, res) => {
  const { name, phone, address, items } = req.body;
  if (!phone || !address) {
    return res.status(400).json({ error: 'Telefon va manzil kiritilishi shart' });
  }

  const orderId = 'FLY-' + Math.floor(100000 + Math.random() * 900000);
  res.status(201).json({
    message: 'Buyurtma qabul qilindi',
    orderId,
    details: { name, phone, address, items }
  });
});

app.listen(PORT, () => {
  console.log(`Fly Food Server is running on port ${PORT}`);
});
