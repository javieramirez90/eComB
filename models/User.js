const Schema = require('mongoose').Schema;

const userSchema = new Schema({
  name: String,
  lastname: String,
  username: String,
  email: String,
  kind: {
    type: String,
    enum: [manager, supplier, distributor, vendor, client]
  }
}, {
  timestamps: {
    createdAt: 'created-at',
    updatedAt: 'updated_at'
  }
})