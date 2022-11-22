const mongodb= require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect=(callback) => {
  MongoClient.connect('mongodb://localhost:27017/')
  .then(client => {
    console.log('Connected !');
    _db=client.db('funixNode')
    callback(client)
  })
  .catch(err => {console.error(err);
    throw err
  })
}

const getDb = () => {
  if(_db)
  {
    return _db
  }
  throw 'no db found!'
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;




