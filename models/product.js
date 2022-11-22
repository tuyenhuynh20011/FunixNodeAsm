// const mongodb = require('mongodb');
// const getDb = require('../util/database').getDb;


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  title:{
    type: String,
    require:true
  },
  price:{
    type: Number,
    require:true
  },
  description:{
    type: String,
    require:true
  },
  imageUrl:{
    type: String,
    require:true
  },
  userId:{
    type: Schema.Types.ObjectId,
    ref:'User',
    require:true
  }
})

module.exports = mongoose.model('Product', productSchema)

// class Product {
//   constructor(title,imageUrl, price, description,id,userId ) {
//     this.title = title;
//     this.price = price;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this._id = id ? new mongodb.ObjectId(id) : null;
//     this.userId= userId;
//   }

//   save() {
//     const db = getDb();
//     let dbOp;
//     if(this._id)
//     {
//       //update the product
//       dbOp = db.collection('products').updateOne({_id: (this._id)}, {$set: this} )
//     }
//     else
//     {
//       dbOp = db.collection('products').insertOne(this)
//     }
//     return db
//       .collection('products')
//       .insertOne(this)
//       .then(result => {
//         console.log(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection('products')
//       .find()
//       .toArray()
//       .then(products => {
//         return products;
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   static findById(prodId) {
//     const db = getDb();
//     return db
//       .collection('products')
//       .find({ _id: new mongodb.ObjectId(prodId) })
//       .next()
//       .then(product => {
//         return product;
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   static deleteById(prodId) {
//     const db = getDb();
//     return  db.collection('products').deleteOne({_id: new mongodb.ObjectId(prodId)})
//     .then(result => {
//       console.log('Deleted')
//     })
//     .catch(err => console.log(err));
//   }
// }

// module.exports = Product;
