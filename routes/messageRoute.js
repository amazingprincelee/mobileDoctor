// routes/Message.Routes.js
import express from 'express';
import messageController from '../controllers/messageController.js'

const router = express.Router();


router.post('/send', messageController.sendMessage);
// Route for creating a prescription
router.post('/createPrescription/:doctorId', messageController.prescriptions );
router.get('/conversations/:userId', messageController.listConversations);
router.get('/:conversationId', messageController.getMessages);


export default router;

