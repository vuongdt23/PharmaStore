// const User = require('../models/user');
// const bcrypt = require('bcrypt');
// /**
//  * POST /signup
//  * Create a new local account.
//  */
//  exports.signup = (req, res, next) => {
//     bcrypt.hash(req.body.password, 10).then(
//       (hash) => {
//         const user = new User({
//           username: req.body.username,
//           password: hash
//         });
//         user.save().then(
//           () => {
//             res.status(201).json({
//               message: 'User added successfully!'
//             });
//           }
//         ).catch(
//           (error) => {
//             res.status(500).json({
//               error: error
//             });
//           }
//         );
//       }
//     );
//   };