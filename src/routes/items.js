import { Router } from 'express';

const router = Router();
let items = [
  { id: 1, title: 'Sample Task', done: false },
  { id: 2, title: 'Code Review', done: true }
];

router.get('/', (req, res) => res.json(items));
router.post('/', (req, res) => {
  const newItem = { id: Date.now(), title: req.body.title || 'Untitled', done: false };
  items.push(newItem);
  res.status(201).json(newItem);
});

export default router;