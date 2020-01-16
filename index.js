'use strict';

const { app } = require('./server');
const Routes = require('./routes');

console.log('THE APPLICATION IS RUNNING AT ', process.env.PORT);

Routes.forEach(routeCollection => app.use(routeCollection));
app.listen(process.env.PORT);
