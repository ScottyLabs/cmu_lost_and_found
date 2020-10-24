export default class UserController {
  /**
   * Login a user given a token
   * @param  {String}   token    auth token
   * @param  {Function} callback args(err, token, user)
   */
  loginWithToken(token, callback) {
    // User.getByToken(token, function(err, user){
    //     return callback(err, token, user);
    // });
  }

  /**
   * Login a user given an email and password.
   * @param  {String}   email    Email address
   * @param  {String}   password Password
   * @param  {Function} callback args(err, token, user)
   */
  loginWithPassword(email, password, callback) {

  }

  createUser(email, password, callback) {
    
  }


}
