import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, title: 'Naat 1', lyrics: 'Lyrics of Naat 1' },
    { id: 2, title: 'Naat 2', lyrics: 'Lyrics of Naat 2' },
  ]);
});

export default router;
