import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config(); /* configure dotenv */
const MongoClient =
  mongodb.MongoClient; /* get access to MongoClient from MongoDB */
const port = process.env.PORT || 8000; //connect port

//Connect to MongoDB
MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  poolsize: 50,
  wtimeout: 2500,
  useNewUrlPar: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    //app.listen is used to start our web server, after connecting to the DB
    app.listen(port, () => {
      //we're listening at the port
      console.log(`listening on port ${port}`);
    });
  });
