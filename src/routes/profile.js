import { Router } from 'express';

const router = Router();


router.get('/myprofile', (req, res) => {
  const name = 'Gil';
  const gender = 'male';
  const email = 'gil';
  res.status(200).send({ name, gender, email });
});



export default router;