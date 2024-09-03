import { Router } from 'express';

const router = Router();


router.get('/firstname', (req, res) => {
  const name = 'GIL';
  res.status(200).send({ name});
});

export default router;