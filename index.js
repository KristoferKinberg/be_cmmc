const app = require('./server');

console.log('THE APPLICATION IS RUNNING AT ', process.env.PORT);
app.listen(process.env.PORT);
