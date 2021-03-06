import * as express from 'express';
import {controller} from '../api/taskController';
import {Task} from '../models/Task';
import * as jwt from 'express-jwt';

// loose coupling
const ctrl = controller(Task)
const router = express.Router();
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

// Base Route == /api/v1/tasks

 // GET: /api/v1/tasks
router.get('/', ctrl.getAll);

// GET: /api/v1/tasks/:id
router.get('/:id', ctrl.getOne);

// POST: /api/v1/tasks
router.post('/', auth, ctrl.create);

// PUT: /api/v1/tasks
router.put('/:id', auth, ctrl.update);

// DELETE: /api/v1/tasks
router.delete('/:id', auth, ctrl.remove);

export = router;
