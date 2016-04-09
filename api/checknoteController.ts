import * as express from 'express';
import * as mongoose from 'mongoose';
import {IChecknoteModel} from '../models/Checknote';
import {ITaskModel} from '../models/Task';

export function controller(Checknote: mongoose.Model<IChecknoteModel>, Task: mongoose.Model<ITaskModel>) {
  return {
    getAll: getAll,
    create: create,
    remove: remove,
    update: update
  }

  function getAll(req: express.Request, res: express.Response, next: Function) {
    Checknote.find({})
      // .populate('completeOrnah')
      .exec((err, checknotes) => {
        if(err) return next(err);
        res.json(checknotes);
      })
  }

  function create(req: express.Request, res: express.Response, next: Function) {
    let c = new Checknote(req.body);
    c.dueDate = Date.now();
    console.log(req.body)
    // c.user = req['payload']._id;
    c.save((err, checknote) => {
      if (err) return next(err);
      console.log('hi')
      Task.update({ _id: c.task }, { $push: { 'checknotes': c } }, (err, result) => {
        if (err) return next(err);
        res.json(c);
      });
    });
  }

  function remove(req: express.Request, res: express.Response, next: Function) {
    Checknote.findOneAndRemove({ _id: req.params.id, user: req['payload']._id }, (err, checknote) => {
      if (err) return next(err);
      // if checknote is found and deleted, update the task
      if (checknote) {
        Task.update({ _id: req.params.id, user: req['payload']._id }, { $pull: { checknotes: req.params.id } },
          (err, numRows) => {
            if (err) return next(err);
            res.json({ message: 'Checknote has been deleted' });
          });
      } else {
        next({ message: 'Could not delete checknote', status: 500 });
      }
    });
  }

  function update(req: express.Request, res: express.Response, next: Function) {
    Checknote.update({_id: req.params.id, user: req['payload']._id}, (err, checknote) => {
      if(err) return next(err);
      if(checknote) {
        res.json({message: 'Checknote has been updated'});
      }
    })
  }


}
