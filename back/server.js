const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./models/index');
const userRoutes = require('./routes/userRoutes');
const formRoutes = require('./routes/FormRoutes');
const swaggerSetup = require('./swagger');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' })); // Garante parsing de JSON
app.use(express.static('public'));

app.use('/api/users', userRoutes);
app.use('/api', formRoutes);
swaggerSetup(app);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${process.env.PORT}`);
  });
});