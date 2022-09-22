require('dotenv').config();

const express = require('express');
const { sequelize } = require('./db/models');
const config = require('./config/config');

const authRouterApi = require('./routes/api/authRouteApi');
const lkRouterApi = require('./routes/api/lkRouteApi');
const dataRouter = require('./routes/api/dataRouter');

const app = express();
config(app);

const PORT = process.env.PORT ?? 4000;

app.use('/api', authRouterApi);
app.use('/lk', lkRouterApi);
app.use('/data', dataRouter);

app.listen(PORT, async () => {
  try {
    // eslint-disable-next-line no-console
    console.log(`Server started at ${PORT} port...`);
    await sequelize.authenticate();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
});
