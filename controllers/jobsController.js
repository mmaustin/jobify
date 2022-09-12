const createJob = async (req, res) => {
    res.send('create jobs');
}

const getAllJobs = (req, res) => {
    res.send('Get all jobs');
}

const updateJob = (req, res) => {
    res.send('Update job');
}

const deleteJob = (req, res) => {
    res.send('delete job');
}

const showStats = (req, res) => {
    res.send('show stats');
}

export {createJob, getAllJobs, updateJob, deleteJob, showStats};