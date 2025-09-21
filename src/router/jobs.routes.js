import express from "express";
import JobsController from "../controller/jobs.Controller.js";

const router = express.Router();
const jobsController = new JobsController();

router.get('/', jobsController.getAllJobs);
router.post('/', jobsController.postNewJob);
router.get('/:id', jobsController.getJobById);
router.put('/:id', jobsController.updateJobById);
router.delete('/:id', jobsController.deleteJobById);

export default router;