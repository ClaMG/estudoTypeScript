import { Router } from 'express';
import {authMiddleware} from '../../../utils/security/auth.js';
import {makeByAllAnimal} from '../../../main/factory/animal/factoryByAllAnimal.js';
import {makeCreateAnimal} from '../../../main/factory/animal/factoryCreateAnimal.js';
import {makeDeleteAnimal} from '../../../main/factory/animal/factoryDeleteAnimal.js';
import {makeUpdateAnimal} from '../../../main/factory/animal/factoryUpdateAnimal.js';
const router = Router();

const controllerByAll = makeByAllAnimal()
const controllerCreate = makeCreateAnimal()
const controllerDelete = makeDeleteAnimal()
const controllerUpdate = makeUpdateAnimal()

router.get('/animals/:idView', authMiddleware, (req, res) => controllerByAll.handle(req as any, res))//c
router.post('/create', authMiddleware, (req, res) => controllerCreate.handle(req, res))
router.delete('/delete', authMiddleware, (req, res) => controllerDelete.handle(req, res))
router.put('/update', authMiddleware, (req, res) => controllerUpdate.handle(req, res))
export default router