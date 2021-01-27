const bodyParser = require('body-parser');
const { checkSchema, validationResult } = require('express-validator');
const app = require('express')();
const PORT = process.env.PORT || 3012;

let { workoutSchema, workouts } = require('./data.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

const translatedType = {
  walking: 'ходьба',
  running: 'бег',
  skiing: 'лыжи',
  cycling: 'велосипед',
};

app.get('/workouts', (req, res) => {
  res.send(workouts);
});

app.post('/workouts', checkSchema(workoutSchema), (req, res) => {
  const errors = validationResult(req);
  console.log(errors);

  const workout = {
    id: workouts.length + 1,
    date: req.body.date,
    type: { name: req.body.type.name, translated: translatedType[req.body.type.name] },
    km: req.body.km,
    comment: req.body.km,
  };
  workouts.push(workout);

  res.send(workouts);
});

app.put('/workouts/:id', checkSchema(workoutSchema), (req, res) => {
  const errors = validationResult(req);
  console.log(errors);

  const workout = workouts.find(workout => workout.id === +req.params.id);

  const { date, type, km, comment } = req.body;
  workout.date = date;
  workout.type = { name: type.name, translated: translatedType[type.name] };
  workout.km = km;
  workout.comment = comment;

  res.send(workouts);
});

app.delete('/workouts/:id', (req, res) => {
  workouts = workouts.filter(workout => workout.id !== +req.params.id);
  res.send(workouts);
});

app.listen(PORT, function () {
  console.log('API app started');
});
