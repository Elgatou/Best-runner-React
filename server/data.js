const workoutSchema = {
  comment: { optional: true },
  date: {
    notEmpty: true,
    matches: { options: [/\d\d\d\d-\d\d-\d\d/] },
    errorMessage: 'invalid date',
  },
  km: { isNumeric: true, notEmpty: true, errorMessage: 'invalid km' },
  'type.name': {
    notEmpty: true,
    matches: { options: [/\b(walking|running|skiing|cycling)\b/], errorMessage: 'invalid type' },
  },
};

let workouts = [
  {
    id: 1,
    date: '2019-08-17',
    type: { name: 'walking', translated: 'ходьба' },
    km: 4,
    comment: '',
  },
  {
    id: 2,
    date: '2019-09-01',
    type: { name: 'walking', translated: 'ходьба' },
    km: 6,
    comment: '',
  },
  {
    id: 3,
    date: '2019-09-04',
    type: { name: 'running', translated: 'бег' },
    km: 3,
    comment: '',
  },
  {
    id: 4,
    date: '2019-11-04',
    type: { name: 'skiing', translated: 'лыжи' },
    km: 2,
    comment: '',
  },
  {
    id: 5,
    date: '2019-11-05',
    type: { name: 'skiing', translated: 'лыжи' },
    km: 2,
    comment: '',
  },
  {
    id: 6,
    date: '2019-11-15',
    type: { name: 'skiing', translated: 'лыжи' },
    km: 3,
    comment: '',
  },
  {
    id: 7,
    date: '2019-12-03',
    type: { name: 'skiing', translated: 'лыжи' },
    km: 3,
    comment: '',
  },
  {
    id: 8,
    date: '2020-01-26',
    type: { name: 'walking', translated: 'ходьба' },
    km: 6,
    comment: '',
  },
  {
    id: 9,
    date: '2020-01-28',
    type: { name: 'skiing', translated: 'лыжи' },
    km: 4,
    comment: '',
  },
  {
    id: 10,
    date: '2020-01-29',
    type: { name: 'walking', translated: 'ходьба' },
    km: 7,
    comment: '',
  },
  {
    id: 11,
    date: '2020-02-01',
    type: { name: 'walking', translated: 'ходьба' },
    km: 8,
    comment: '',
  },
  {
    id: 12,
    date: '2020-02-04',
    type: { name: 'running', translated: 'бег' },
    km: 4,
    comment: '',
  },
  {
    id: 13,
    date: '2020-02-05',
    type: { name: 'running', translated: 'бег' },
    km: 6,
    comment: '',
  },
  {
    id: 14,
    date: '2020-02-12',
    type: { name: 'cycling', translated: 'велосипед' },
    km: 15,
    comment: '',
  },
  {
    id: 15,
    date: '2020-02-16',
    type: { name: 'cycling', translated: 'велосипед' },
    km: 17,
    comment: '',
  },
];

module.exports = { workoutSchema, workouts };
