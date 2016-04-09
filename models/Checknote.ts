import * as mongoose from 'mongoose';

export interface IChecknoteModel extends app.i.IChecknote, mongoose.Document {}

let checknoteSchema = new mongoose.Schema({
  title: {type: String, default: "checknote"},
  dueDate: {type: Number},
  note: {type: String},
  completeOrnah: {type: Boolean, default: false},

  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  task: {type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true}
});

export let Checknote = mongoose.model<IChecknoteModel>("Checknote", checknoteSchema);
