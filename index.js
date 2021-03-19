const express = require('express');

const app = express();

const genres = [
  {
    id: 1,
    name: 'action',
  },
  {
    id: 2,
    name: 'horror',
  },
  {
    id: 3,
    name: 'romance',
  },
  {
    id: 4,
    name: 'drama',
  },
  {
    id: 5,
    name: 'comedy',
  },
  {
    id: 6,
    name: 'documentary',
  },
];

app.post('/api/genres', (req, res) => {
  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };
  genres.push(genre);
  res.send(genre);
});


