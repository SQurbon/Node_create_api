const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

const data = [
  { id: 1, name: "Qurbon", lastname: "Sultonqulov", grade: "Front-end", age: "18 - years old" },
];

app.get('/api/items', (req, res) => {
  res.json(data);
});


app.listen(port, () => {
  console.log(`Server ${port}-portda ishlayapti`);
});