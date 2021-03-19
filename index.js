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

app.get('/api/genres', (req, res) => {
  res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
  let genre = genres.find((g) => g.id === parseInt(req.params.id))
  if(!genre) {
    return res.status(404).send('The genre with the given ID was not found');
  }
})
