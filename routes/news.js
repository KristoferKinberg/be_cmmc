const { modelConstants: { NEWS }} = require('../models');
const app = require('../server');
const {
  getAll
} = require('../core/fetchers');

app.get('/news', getAll(NEWS));
