import { Router } from 'express';

import AccountController from '../controllers/Account.controller';

const router = Router();

router.get('/checkbalance', AccountController.checkBalance);
router.post('/selfdeposit', AccountController.selfDeposit);
router.post('/externdeposit', AccountController.externDeposit);
router.post('/interntransfer', AccountController.internTransfer);
router.post('/externtransfer', AccountController.externTransfer);
router.post('/movementrecords', AccountController.movementRecords);
router.post('/purchasedebt', AccountController.purchaseDebt);

export default router;
