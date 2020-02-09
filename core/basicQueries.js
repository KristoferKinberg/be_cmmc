const models = require('../models');
const {getDefaultJson} = require("../utils/defaultJson");


/**
 * Fetches all of a certain register
 * @param model
 * @returns {function(*, *): Promise<Array<Model>>}
 */
const getAllReq = (model, where = { where: {}}) => models[model]
  .findAll(where)
  .catch(error => console.log(error));

/**
 * Fetches a specific register by id
 * @param model
 * @returns {function({params: *}, *): Promise<Model>}
 */
const getSpecificReq = (model, id) => models[model]
  .findOne({ where: { id }})
  .catch(error => console.log(error));

/**
 * Update specific record by id
 * @param model
 * @returns {function(*, *, *=)}
 */
const patchSpecificReq = (model, id, body) => models[model]
    .update(body, { where: { id }})
    .then(() => getSpecificReq(model, id))
    .catch(error => console.log(error));

/**
 * Delete specific record by id
 * @param model
 * @returns {function({params: *}, *): (void|PromiseLike<T>|Promise<T>)}
 */
const deleteSpecificReq = (model, id) => models[model]
  .destroy({ where: { id }})
  .catch(error => console.log(error));

/**
 * Creates a new record
 * @param model
 * @returns {function({body?: *}, *): (void|PromiseLike<T>|Promise<T>)}
 */
const createRecordReq = (model, body) => models[model]
  .create({ ...body })
  .catch(error => console.log(error));

/**
 * Retrieve data from several tables and returns a promise
 * @param models
 * @returns {Promise<unknown[] | void>}
 */
const getAllList = models => Promise
  .all(models.map(model => getAllReq(model)))
  .catch(error => console.log(error));

/**
 * Creates new for returning model objects
 * @param model
 * @returns {Function}
 */
const generateNewObjReq = model => (req, res) => {
  const data = Object.keys(models[model].rawAttributes)
    .filter(key => (!['id', 'createdAt', 'updatedAt'].includes(key)))
    .reduce((acc, curr) => ({ ...acc, [curr]: '' }), {});

  res.send(data);
};

module.exports = {
  getAllReq,
  getSpecificReq,
  patchSpecificReq,
  deleteSpecificReq,
  createRecordReq,
  getAllList,
  generateNewObjReq,
};
