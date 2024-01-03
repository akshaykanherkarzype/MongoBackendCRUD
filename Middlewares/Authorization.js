// const UserModel = require("../Models/User.model");

// const Authorization = (permitedRolls) => {
//   return async (req, res, next) => {
//     let { email } = req.body;
//     const user = await UserModel.findOne({ email });

//     if (!permitedRolls.includes(user.roll)) {
//       return res.send("Not Authorized");
//     }
//     next();
//   };
// };

// module.exports = Authorization;
