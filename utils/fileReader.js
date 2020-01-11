
/**
 * Reads all the file names and returns them as an array
 * @returns {string[]}
 */
const getModelNames = () => fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  });

module.exports = {
  getModelNames
};
