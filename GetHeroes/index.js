const MongoClient = require('mongodb').MongoClient;
const auth = require('../shared/index');
module.exports = function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  MongoClient.connect(
    process.env.CosmosDBURL,
    { auth: auth },
    (err, database) => {
      if (err) throw err;
      console.log('Connected succesfully');
      const db = database.db(process.env.CosmosDB);
      db
        .collection('Heroes')
        .find()
        .toArray((err, result) => {
          if (err) throw err;
          context.log('This is a happy moment');
          result.forEach(hero => delete hero._id);
          context.res = {
            //status: 200,
            body: result
          };
          database.close();
          context.done();
        });
    }
  );
};
