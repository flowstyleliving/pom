import * as mongoose from 'mongoose';

export interface IUserModel extends app.i.IUser, mongoose.Document {}

let userSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true, trim: true, unique: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  age: {type: Number},
  gender: {type: String},
  bio: {type: String},
  location: {type: String},
  imageUrl: {type: String},

  tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]


})


export let User = mongoose.model<IUserModel>('User', userSchema);
