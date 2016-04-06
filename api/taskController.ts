import * as express from 'express';
import {ITaskModel} from '../models/Task';
import * as mongoose from 'mongoose';

export function controller(Task: mongoose.Model<ITaskModel>) {
  return {
    getAll: getAll,
    getOne: getOne,
    create: create,
    update: update,
    remove: remove
  }

  function getAll(req: express.Request, res: express.Response, next: Function) {
    Task.find({})
    .populate('name')
    .exec((err, tasks) => {
      if(err) return next(err);
      res.json(tasks);
    })
  }

  function getOne(req: express.Request, res: express.Response, next: Function) {
    Task.findOne({_id: req.params.id})
    .populate('name')
    .exec((err, tasks) => {
      if(err) return next(err);
      res.json(tasks);
    });
  }

  function create(req: express.Request, res: express.Response, next: Function) {
    req.body.postDate = Date.now();
    req.body.dueDate = Date.parse(req.body.dueDate);
    let t = new Task(req.body);
    t.save((err, task: ITaskModel) => {
      if(err) return next(err);
      res.json(task);
    });
  }

  function update(req: express.Request, res: express.Response, next: Function) {
    Task.update({_id: req.params.id}, req.body, (err, numRows: any) => {
        if(err) return next(err);
        // if(numRows.nModified === 0) return next ({message: "Could not update the requested task.", status: 500});
        res.json({message: "Your Task has been updated!"});
      })
  }

  function remove(req: express.Request, res: express.Response, next: Function) {
    Task.remove({_id: req.params.id}, (err) => {
      if(err) return next(err);
      res.json({message: 'Your Task has been removed!'});
    })
  }

}
