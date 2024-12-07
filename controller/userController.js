// 
const UserModel= require("../../user_authentication/model/userModel")
 
//user sign up
// exports.createUser = async (req, res) => {
//     try {
//       const user = new UserModel(req.body);
//       await user.save();
//       res.status(201).send(user);
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   };
 
 
  //post method
exports.createUser = async(req , res)=>{
try {
    const {name , email , password} = req.body
    if(!name && !email && !password){
      return res.status(400).json({
        message : "all fields are required"
      })
    }else if(!name || !email || !password){
      return res.status(400).json({
        message : "please enter valid information"
      })
    }
    const newUser = await UserModel.create({
        name , email , password
    })
    return res.status(201).json({
        message : "user signed up",
        data : newUser
    })
} catch (error) {
    console.error("unable to sign up" , error)
}
  }
 
//get method
exports.getAllUsers = async(req , res)=>{
  try {
    const users = await UserModel.find()
    return res.status(200).json({
      message : "gotten all users",
      data : users
    })
  } catch (error) {
    return res.status(400).json({
      message : "couldn't get users",
      error
    })
  }
}
 
 
//get one method
exports.getOneById = async(req , res)=>{
  try {
    // const {id} = req.params
    // const users = await UserModel.findById({id})
    const users = await UserModel.findById(req.params.id)
    return res.status(200).json({
      message : "gotten the user",
      data : users
    })
  } catch (error) {
    return res.status(400).json({
      message : "couldn't get user",
      error
    })
  }
}
 
exports.getOneByName = async(req , res)=>{
  try {
    const {name} = req.body
    if(!name){
      return res.status(404).json({
        message : "please enter name"
      })
    }
    const users = await UserModel.findOne({name})
    return res.status(200).json({
      message : "gotten the user",
      data : users
    })
  } catch (error) {
    return res.status(400).json({
      message : "couldn't get user",
      error
    })
  }
}

//update method
exports.updateUser = async(req , res)=>{
  try {
    const {id} = req.params
    const {password , name} = req.body
    const update = await UserModel.findByIdAndUpdate(id, {password, name}, {new:true})
    //const update = await userModel.findByIdAndUpdate(req.params.id, req.body.password,{new:true})
    return res.status(202).json({
      message : "updated",
      data : update
    })
  }catch (error){
    return res.status(400).json({
      message : "couldn't update",
      error
    })
  }
}
 

//delete method
exports.deleteUser = async(req , res)=>{
  try{
    const removeUser = await UserModel.findByIdAndDelete(req.params.id)

    return res.status(200).json({
      message:"user deleted",
    })
  }catch (error){
    return res.status(400).json({
      message : "couldn't delete",
      error
    })
  }
}

//findOneandDelete method
exports.getOneAndDelete = async(req , res)=>{
  try {
    const {name} = req.body
    const users = await UserModel.findOneAndDelete({name})
    return res.status(200).json({
      message : "gotten the user",
      data : users
    })
  } catch (error) {
    return res.status(400).json({
      message : "couldn't get user",
      error
    })
  }
}

Product : [
  {type : mongoose.Schema.Types.ObjectId ,
    ref : "Product"
  }
]