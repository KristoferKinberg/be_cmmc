const express = require('express');
const {
  ALL,
  SPECIFIC,
  UPDATE,
  DELETE,
  CREATE,
  GET,
  POST,
  DESTROY,
} = require('../constants');
const {
  getAll,
  getSpecific,
  patchSpecific,
  deleteSpecific,
  createRecord,
} = require('../core/fetchers');

const schema = baseRoute => ({
  [ALL]: { func: [getAll(baseRoute)], route: '', type: GET },
  [SPECIFIC]: { func: [getSpecific(baseRoute)], route: '/:id', type: GET },
  [UPDATE]: { func: [patchSpecific(baseRoute)], route: '/:id', type: POST },
  [DELETE]: { func: [deleteSpecific(baseRoute)], route: '/:id', type: DELETE },
  [CREATE]: { func: [createRecord(baseRoute)], route: '', type: POST }
});

const applyRoutes = (baseRoute, methods) => {
  const router = express.Router();
  const schm = schema(baseRoute);

  methods.map(method => {
    const { func, route, type } = schm[method];
    return router[type.toLowerCase()](`/api/${baseRoute}${route}`, ...func)
  });

  return router;
};

module.exports = {
  applyRoutes
};
