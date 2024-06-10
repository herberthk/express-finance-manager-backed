import mongoose,{Mongoose} from 'mongoose';
// import { __prod__ } from '../constants';

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}



export const connectDB = async () => {
  let cached:MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null
  }
}
  const uri = process.env.MONGO_URI
  // console.log('Mongodb uri', uri);
  try {
    if (cached.conn) {
      return cached.conn
    }

    if(!uri){
      throw new Error('MONGO_URI must be defined');
    }
    
    cached.promise = cached.promise || mongoose.connect(uri,{
      // bufferCommands:false
    })

    cached.conn = await cached.promise

    console.log(`MongoDB Connected: ${cached.conn.connection.host}`);

    return cached.conn

    // const conn = await mongoose.connect(uri, {});
    // const conn = await mongoose.connect(uri!, {
    //   // useNewUrlParser: true,
    //   // useUnifiedTopology: true,
    //   // useFindAndModify: false,
    //   // useCreateIndex: true,
    // });

  
  } catch (err) {
    console.log('Could not connect to MongoDB',err);
    process.exit(1);
  }
};
