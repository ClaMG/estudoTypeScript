import { Router } from 'express';
import {makeByAllUser} from '../../../main/factory/factoryByAllUser'
import {makeByIdUser} from '../../../main/factory/factoryByIdUser'
import {makeCreateUser} from '../../../main/factory/factoryCreateUser'
import {makeDeleteUser} from '../../../main/factory/factoryDeleteUser'
import {makeLoginUser} from '../../../main/factory/factoryLoginUser'
import {makeUpdateUser} from '../../../main/factory/factoryUpdateUser'

const router = Router();

const createControler = makeCreateUser();
const byAllControler = makeByAllUser();
const byIdControler = makeByIdUser();
const updateControler = makeUpdateUser();
const deleteControler = makeDeleteUser();
const loginControler = makeLoginUser();

router.get('/users', async (req, res) => {
    await byAllControler.handle(req, res);
});

router.get('/user', async (req, res) => {
    await byIdControler.handle(req, res);
});

router.post('/create', async (req, res) => {
    await createControler.handle(req, res);
});

router.put('/update', async (req, res) => {
    await updateControler.handle(req, res);
});

router.delete('/delete', async (req, res) => {
    await deleteControler.handle(req, res);
});

router.post('/login', async (req, res) => {
    await loginControler.handle(req, res);
});

export default router