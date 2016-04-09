import * as mongoose from 'mongoose';

export interface ITaskModel extends app.i.ITask, mongoose.Document{}

let taskSchema = new mongoose.Schema({
  title: {type: String},
  postDate: {type: Number},
  dueDate: {type: Date},
  pomStatus: {type: String},
  color: {type: String, default: "lightblue"},
  completeOrnah: {type: Boolean, default: false},

  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  checknotes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Checknote'}]
});


export let Task = mongoose.model<ITaskModel>('Task', taskSchema);
