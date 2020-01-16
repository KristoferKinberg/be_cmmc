/**
 * Easier-to-see log function
 * @param args
 */
const log = (...args) => console.log(
  '\n\n\n\n===========================================\n===========================================\n\n',
  ...args,
  '\n\n===========================================\n===========================================\n\n\n\n'
);

/**
 * Derives the data from a database result
 * @param model
 * @returns {Uint8Array | BigInt64Array | *[] | Float64Array | Int8Array | Float32Array | Int32Array | Uint32Array | Uint8ClampedArray | BigUint64Array | Int16Array | Uint16Array}
 */
const derivePlainData = model => model.map(item => item.get({ plain: true }));

module.exports = {
  log,
  derivePlainData
};
