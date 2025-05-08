const express = require('express');
const app = express();
const cors = require('cors'); // agar frontend ulanadigan bo‘lsa
const port = 3000;

app.use(cors()); // frontenddan ulanish uchun
app.use(express.static('public')); // public papkadan rasm yoki fayl xizmatini yoqish

const data = [
    { id: 1, name: "Qurbon" , lastname: "Sultonqulov", grade: "Front-end", age: "18 - years old",image: "http://localhost:3000/photo.jpg"},
    { id: 2, image: "" },
  ];
  
app.get('/api/items', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} da ishlayapti`);
});
