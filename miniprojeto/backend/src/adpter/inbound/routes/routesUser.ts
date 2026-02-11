import { Router } from 'express';
import {makeByAllUser} from '../../../main/factory/factoryByAllUser'
import {makeByIdUser} from '../../../main/factory/factoryByIdUser'
import {makeCreateUser} from '../../../main/factory/factoryCreateUser'
import {makeDeleteUser} from '../../../main/factory/factoryDeleteUser'
import {makeLoginUser} from '../../../main/factory/factoryLoginUser'
import {makeUpdateUser} from '../../../main/factory/factoryUpdateUser'

const router = Router();

const createControler = makeCreateUser();
//const createControler = makeByAllUser();
//const createControler = makeByIdUser();
//const createControler = makeDeleteUser();
//const createControler = makeLoginUser();
//const createControler = makeUpdateUser();