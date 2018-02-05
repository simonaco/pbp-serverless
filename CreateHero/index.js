const MongoClient = require('mongodb').MongoClient;
const auth = require('../shared/index');
module.exports = function(context, req) {
  MongoClient.connect(
    process.env.CosmosDBURL,
    { auth: auth },
    (err, database) => {
      if (err) throw err;
      let hero = ({ id, name, saying } = req.body);
      var db = database.db('admin');

      db.collection('Heroes').insertOne(
        {
          id: hero.id,
          name: hero.name,
          saying: hero.saying
        },
        (err, result) => {
          if (err) throw err;
          context.res = {
            body: hero
          };
          database.close();
          context.done();
        }
      );
    }
  );
};
