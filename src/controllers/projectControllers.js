
const projectModel= require('../models/projectModels')

const projectController = {
    getAllProject: (req, res) => {
      projectModel.getAll ((err,result) => {
            if(err){
                res.status(500).json({ error: err.message})
        }
        else {
            res.status(200).json(result)
        }
    } )

    }
}

module.exports = projectController;