import { Router } from 'express';
import {makeByAllUser} from '../../../main/factory/factoryByAllUser.js';
import {makeByIdUser} from '../../../main/factory/factoryByIdUser.js';
import {makeCreateUser} from '../../../main/factory/factoryCreateUser.js';
import {makeDeleteUser} from '../../../main/factory/factoryDeleteUser.js';
import {makeLoginUser} from '../../../main/factory/factoryLoginUser.js';
import {makeUpdateUser} from '../../../main/factory/factoryUpdateUser.js';
import {authMiddleware} from '../../../utils/security/auth.js';
const router = Router();

const createControler = makeCreateUser()
const byAllControler = makeByAllUser()
const byIdControler = makeByIdUser()
const updateControler = makeUpdateUser()
const deleteControler = makeDeleteUser()
const loginControler = makeLoginUser()

router.get('/users', authMiddleware, (req, res) => byAllControler.handle(req, res))

router.get('/user', authMiddleware, (req, res) => byIdControler.handle(req, res))

router.put('/update', authMiddleware, (req, res) => updateControler.handle(req, res))

router.delete('/delete', authMiddleware, (req, res) => deleteControler.handle(req, res))

router.post('/create', async (req, res) => await createControler.handle(req, res))

router.post('/create-admin', async (req, res) => await createControler.handle(req, res))

router.post('/login', async (req, res) => await loginControler.handle(req, res))

export default router