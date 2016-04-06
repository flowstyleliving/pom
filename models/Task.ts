import * as mongoose from 'mongoose';

export interface ITaskModel extends app.i.ITask, mongoose.Document{}

let taskSchema = new mongoose.Schema({
  title: {type: String},
  postDate: {type: Number},
  dueDate: {type: Number},
  checkNotes: {
    title: {type: String, default: "checkNote"},
    dueDate: {type: Number},
    check: {type: Number},
    isComplete: {type: Boolean, default: false}
  },
  pomStatus: {type: String},
  color: {type: String, default: "lightblue"}
});


export let Task = mongoose.model<ITaskModel>('Task', taskSchema);
