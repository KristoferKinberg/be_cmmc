const models = require('../models');

/**
 * Fetches all of a certain register
 * @param model
 * @returns {function(*, *): Promise<Array<Model>>}
 */
const getAll = model => (req, res) => models[model]
    .findAll()
    .then(modelRows => res.send(modelRows))
    .catch(error => console.log(error));

/**
 * Fetches a specific register by id
 * @param model
 * @returns {function({params: *}, *): Promise<Model>}
 */
const getSpecific = model => ({ params: { id }}, res) => {
  models[model].findOne({ where: { id }})
    .then(modelData => res.send(modelData))
    .catch(error => console.log(error));
};

/**
 * Update specific record by id
 * @param model
 * @returns {function(*, *, *=)}
 */
const patchSpecific = model => (req, res, next) => {
  const { body, params: { id }} = req;

  models[model].update(body, { where: { id }})
    .then(() => getSpecific(model)(req, res, next))
    .catch(error => console.log(error));
};

/**
 * Delete specific record by id
 * @param model
 * @returns {function({params: *}, *): (void|PromiseLike<T>|Promise<T>)}
 */
const deleteSpecific = model => ({ params: { id }}, res) =>
  models[model].destroy({ where: { id }})
    .then(() => res.send(id))
    .catch(error => conosle.log(error));

/**
 * Creates a new record
 * @param model
 * @returns {function({body?: *}, *): (void|PromiseLike<T>|Promise<T>)}
 */
const createRecord = model => ({ body }, res) => {
  models[model].create({ ...body })
    .then((record) => res.json(record))
    .catch(error => console.log(error));
};

module.exports = {
  getAll,
  getSpecific,
  patchSpecific,
  deleteSpecific,
  createRecord,
};
