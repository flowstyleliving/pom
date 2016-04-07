import * as mongoose from 'mongoose';
import * as express from 'express';
import {Task} from '../models/Task';
import {Checknote} from '../models/Checknote';
import {controller} from '../api/checknoteController';
import * as jwt from 'express-jwt';

// loose coupling
const ctrl = controller(Checknote, Task);
const router = express.Router();
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

// Base Route: /api/v1/checknotes

// POST: /api/v1/checknotes
router.post('/', auth, ctrl.create);

// DELETE: /api/v1/checknotes
router.delete('/:id', auth, ctrl.remove);

// PUT: /api/v1/checknotes
router.put('/:id', auth, ctrl.update);

export = router;
