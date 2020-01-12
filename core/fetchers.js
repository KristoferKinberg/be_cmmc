const  {
  getAllReq,
  getSpecificReq,
  patchSpecificReq,
  deleteSpecificReq,
  createRecordReq,
} = require('./basicQueries');

/**
 * Fetches all of a certain register
 * @param model
 * @returns {function(*, *): Promise<Array<Model>>}
 */
const getAll = model => (req, res) => getAllReq(model)
  .then(modelRows => res.send(modelRows));

/**
 * Fetches a specific register by id
 * @param model
 * @returns {function({params: *}, *): Promise<Model>}
 */
const getSpecific = model => ({ params: { id }}, res) => getSpecificReq(model, id)
  .then(modelData => res.send(modelData));

/**
 * Update specific record by id
 * @param model
 * @returns {function(*, *, *=)}
 */
const patchSpecific = model => ({ body, params: { id }}, res, next) => patchSpecificReq(model, id, body)
  .then(modelData => res.send(modelData));

/**
 * Delete specific record by id
 * @param model
 * @returns {function({params: *}, *): (void|PromiseLike<T>|Promise<T>)}
 */
const deleteSpecific = model => ({ params: { id }}, res) => deleteSpecificReq(model, id)
  .then(() => res.send(id))

/**
 * Creates a new record
 * @param model
 * @returns {function({body?: *}, *): (void|PromiseLike<T>|Promise<T>)}
 */
const createRecord = model => ({ body }, res) => createRecordReq(model, body)
  .then((record) => res.json(record));

module.exports = {
  getAll,
  getSpecific,
  patchSpecific,
  deleteSpecific,
  createRecord,
};
