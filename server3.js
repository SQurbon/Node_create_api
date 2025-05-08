const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public')); // rasm uchun

const data = [
  {
    id: 1,
    name: "Ismim Akmal",
    image: "https://your-api.onrender.com/photo.jpg"
  },
  {
    id: 2,
    name: "Bu test item"
  }
];

app.get('/api/items', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server ishga tushdi: ${port}`);
});
