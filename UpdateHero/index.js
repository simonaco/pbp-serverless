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
      let hero = ({ id, name, saying } = req.body);
      let heroId = req.params.id;
      db
        .collection('Heroes')
        .findOneAndUpdate(
          { id: heroId },
          { $set: { id: hero.id, name: hero.name, saying: hero.saying } },
          (err, heroes) => {
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
