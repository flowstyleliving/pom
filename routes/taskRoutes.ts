import * as express from 'express';
import {controller} from '../api/taskController';
import {Task} from '../models/Task';

// loose coupling
const ctrl = controller(Task)
const router = express.Router();

// Base Route == /api/v1/tasks

 // GET: /api/v1/tasks
router.get('/', ctrl.getAll);

// GET: /api/v1/tasks/:id
router.get('/:id', ctrl.getOne);

// POST: /api/v1/tasks
router.post('/', ctrl.create);

// PUT: /api/v1/tasks
router.put('/:id', ctrl.update);

// DELETE: /api/v1/tasks
router.delete('/:id', ctrl.remove);

export = router;
