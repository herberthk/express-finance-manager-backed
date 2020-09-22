import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import exphbs from 'express-handlebars';
import morgan from 'morgan';
import { connectDB } from './config/db';
import path from 'path';
import auth from './routes/auth';
import company from './routes/company';
import code from './routes/code';
import transaction from './routes/transaction';
import { __prod__ } from './constants';
// import os, { arch, cpus, freemem, hostname, userInfo } from 'os';
// const os = require('os');
// Load config
dotenv.config({ path: './config.env' });

const app: Application = express();

const port = process.env.PORT || 8000;
// console.log('my info', os.userInfo());
// console.log(os.constants);
// console.log('Architecture: ' + os.arch());
connectDB();
// Logging
if (!__prod__) {
  app.use(morgan('dev'));
}
// Handlebars
app.engine(
  '.hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
  })
);

app.set('view engine', '.hbs');
// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
// Static folder
app.use(express.static(path.join(__dirname, '../public')));

/**
 * @description // Routes
 */
app.get('/', (req: Request, res: Response) => {
  res.render('index.html');
  // res.render('main', {
  //   layout: 'main',
  // });
});
/**
 * Route for registering and login
 */
app.use('/auth', auth);
/**
 * Routes for company creation
 */
app.use('/company', company);

/**
 * Routes for security
 */
app.use('/code', code);
/**
 * Routes for transactions
 */
app.use('/transaction', transaction);

app.listen(port, () =>
  console.log(`app started on port ${port} in ${process.env.NODE_ENV} mode`)
);