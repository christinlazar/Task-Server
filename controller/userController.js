
const userRegister = async (req,res)=>{
    try {
        // console.log("req body",req.body)
        const {formData} = req.body

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

const addTask = async (req,res) =>{
    try {
        const {taskData} = req.body
        console.log("taskData",taskData)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

module.exports = {
    userRegister,
    addTask
}