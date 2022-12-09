import {app} from './app'
import { connectDB } from './config/db';

const start = async() =>{
  console.log('Starting up........');
  if(!process.env.MONGO_URI){
    throw new Error('MONGO_URI must be defined');
  }
  if (!process.env.SECRET_KEY) {
    throw new Error('SECRET_KEY must be defined');
  }
  if (!process.env.SMTP) {
    throw new Error('SMTP must be defined');
  }
  if (!process.env.SMTP_PASSWORD) {
    throw new Error('SMTP_PASSWORD must be defined');
  }
  if (!process.env.SMTP_USER) {
    throw new Error('SMTP_USER must be defined');
  }

 await connectDB();

 const port = process.env.PORT || 8000;

 app.listen(port, () =>
  console.log(`app started on port ${port} in ${process.env.NODE_ENV !=='production'?'Development': process.env.NODE_ENV} mode`)
);

}
start()