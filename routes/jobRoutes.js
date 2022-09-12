import express from 'express';
const router = express.Router();

import {createJob,
        getAllJobs,
        updateJob,
        deleteJob,
        showStats
} from "../controllers/jobsController";


router.route('/').get(getAllJobs).post(createJob);
router.route('/stats').get(showStats);
router.route('/:id').get(updateJob, deleteJob);

export default router;