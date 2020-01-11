'use strict';

const { app } = require('./server');
const Routes = require('./routes');

Routes.forEach(routeCollection => app.use(routeCollection));

console.log('THE APPLICATION IS RUNNING AT ', process.env.PORT);
app.listen(process.env.PORT);
