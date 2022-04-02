
// const express = require('express')
// const router = express.Router();
// const User = require("../model/user");
// const bcrypt = require("bcrypt");
// var jwt = require("jsonwebtoken");
// const checkAuth = require("../middleware/validate");
// const saltRounds = 10;
// const { json } = require("body-parser");
// const TOKEN_SECRET = "222hwhdhnnjduru838272@@$henncndbdhsjj333n33brnfn";

// const validateEmail = (email) => {
//   return email.match(
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   );
// };


// function RemoveExtraSpace(value)
//   {
//     return value.replace(/\s+/g,' ');
//   }

// router.post("/login", function (req, res, next) {
//   let { email, password } = req.body;
//   if (email === "" || password === "" || !email || !password) {
//     res.status(400).send({ message: "field cannot be empty" });
//   }
//   if (!validateEmail(RemoveExtraSpace(email))) {
//     res.status(400).send({ message: "enter a valid email" });
//   }
//   User.findOne({ email: email })
//     .then(function (user) {
//       if (!user) {
//         res.status(400).send({ message: "invalid credentials" });
//       }

//       else{
//         bcrypt.compare(password, user.password).then(function (result) {
//           if (!result) {
//             res.status(400).send({ message: "invalid credentials" });
//           }
//          else{
//           Profile.find({ user: user._id }).then(function (profile) {
//             let token = jwt.sign({ id: user._id }, TOKEN_SECRET, {
//               expiresIn: "3600000000s",
//             });
//             if(profile.length == 0){
//               res.status(400).send({message: "failed"})
//             }else{
//               res.send({
//                 id: user._id,
//                 token: token,
//                 email: user.email,
//                 fullname: profile[0].name,
//                 amount: profile[0].amount,
//                 image: profile[0].image,
//               });
//             }
            
//           });
//          }
//         });
//       }
//     })
    
//     .catch(next);
// });





// router.post("/signup", function (req, res, next) {
//   let { email, password, fullname, image, phone } = req.body;
//   if (email === "" || password === "" || !email || !password || !image ||!phone) {
//     res.status(400).send({ message: "field cannot be empty" });
//   }
//   else if (password.length <= 6) {
//         res
//           .status(400)
//           .send({ message: "password must be greater than 6 characters" });
//       }
//       else if (!validateEmail(RemoveExtraSpace(email))) {
//         res.status(400).send({ message: "enter a valid email" });
//       }
//      else{
//         User.findOne({ email: email })
//         .then(function (user) {
//           if (user) {
//             res.status(400).send({ message: "user already exist" });
//           } else {
//             bcrypt.hash(password, saltRounds, function (err, hashedPassword) {
//               User.create({
//                 email: email,
//                 password: hashedPassword,
//                 fullname: fullname,
//                 image: image,
//                 phone: phone,
//               })
//                 .then(function (createduser) {
//                     // Profile.create({
//                     //   email: email,
//                     //   name: fullname,
//                     //   user: createduser._id,
//                     //   amount: "0",
//                     //   image: "",
//                     // })
//                     //   .then(function (profile) {
//                     //     let token = jwt.sign({ id: createduser._id }, TOKEN_SECRET, {
//                     //       expiresIn: "3600000000s",
//                     //     });
//                     //     res.send({
//                     //       id: createduser._doc._id,
//                     //       token: token,
//                     //       fullname: fullname,
//                     //       email: createduser._doc.email,
//                     //       amount: "0",
//                     //       image: "",
//                     //     });
//                     //   })
//                     //   .catch(next);
//                  res.send({message: createduser})
//                 })
//                 .catch(next);
//             });
//           }
//         }) .catch(next);
//     }
    
// });



// //get all user
// router.get("/users", function (req, res, next) {
//   User.find({}).then(function (users) {
//     res.send(users);
//   });
// });


// //get user of a particular user
// router.get("/user", checkAuth, function (req, res, next) {
//     User.findOne ({ user: req.params.userid }).then(function (user) {
//     res.send(user);
//   });
// });

// module.exports = router; 