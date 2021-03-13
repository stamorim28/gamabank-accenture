import { Router } from 'express';

import status from './status.route';
import users from './users.route';
import auth from './auth.route';

const routes = Router();

routes.use('/status', status);
routes.use('/users', users);
routes.use('/auth', auth);

export default routes;