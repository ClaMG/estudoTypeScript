import { Router } from 'express';
import {makeByAllUser} from '../../../main/factory/factoryByAllUser.js';
import {makeByIdUser} from '../../../main/factory/factoryByIdUser.js';
import {makeCreateUser} from '../../../main/factory/factoryCreateUser.js';
import {makeDeleteUser} from '../../../main/factory/factoryDeleteUser.js';
import {makeLoginUser} from '../../../main/factory/factoryLoginUser.js';
import {makeUpdateUser} from '../../../main/factory/factoryUpdateUser.js';
import {makeSendCodedUser} from '../../../main/factory/factorySendCodeUser.js'
import {makeUpdatePasswordUser} from '../../../main/factory/factoryUpdatePassword.js'
import {makeRequestAdminUser} from '../../../main/factory/factoryRequestAdmin.js'
import {makeByAdminViewUser} from '../../../main/factory/factoryRequestAdminView.js'
import {authMiddleware} from '../../../utils/security/auth.js';
const router = Router();

const createControler = makeCreateUser()
const byAllControler = makeByAllUser()
const byIdControler = makeByIdUser()
const updateControler = makeUpdateUser()
const deleteControler = makeDeleteUser()
const loginControler = makeLoginUser()
const sendCodeControler = makeSendCodedUser()
const updatePasswordControler = makeUpdatePasswordUser()
const requestAdminControler = makeRequestAdminUser()
const byAdminViewControler = makeByAdminViewUser()

router.get('/users', authMiddleware, (req, res) => byAllControler.handle(req, res))

router.get('/view-admins', authMiddleware, (req, res) => byAdminViewControler.handle(req, res))

router.post('/send-admin', authMiddleware, (req, res) => requestAdminControler.handle(req, res))

router.get('/user', authMiddleware, (req, res) => byIdControler.handle(req, res))

router.put('/update', authMiddleware, (req, res) => updateControler.handle(req, res))

router.delete('/delete', authMiddleware, (req, res) => deleteControler.handle(req, res))

router.post('/create', async (req, res) => await createControler.handle(req, res))

router.post('/create-admin', authMiddleware, async (req, res) => await createControler.handle(req, res))

router.post('/login', async (req, res) => await loginControler.handle(req, res))

router.put('/update-password', async (req, res) => await updatePasswordControler.handle(req, res))

router.post('/send-code', async (req, res) => await sendCodeControler.handle(req, res))

export default router