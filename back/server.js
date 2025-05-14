const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./models/index');
const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${process.env.PORT}`);
  });
});