import { Request, Response, Router } from 'express';
import { helloWorld, testRoute } from '../controllers/hello';

const router = Router();

router.get('/hello', helloWorld);
router.get('/', testRoute);

export default router;
