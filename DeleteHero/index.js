const MongoClient = require('mongodb').MongoClient;
const auth = require('../shared/index');
module.exports = function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  MongoClient.connect(
    process.env.CosmosDBURL,
    { auth: auth },
    (err, database) => {
      if (err) throw err;
      const db = database.db('admin');
      let heroId = req.params.id;
      db
        .collection('Heroes')
        .findOneAndDelete({ id: heroId }, (err, result) => {
          if (err) throw err;
          context.res = {
            status: 200,
            body: { message: 'Hero deleted successfully!' }
          };
          database.close();
          context.done();
        });
    }
  );
};
