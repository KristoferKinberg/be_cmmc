const fs   = require('fs');
const jwt   = require('jsonwebtoken');
const path = require('path');

// use 'utf8' to get string instead of byte array  (512 bit key)
const privateKEY  = fs.readFileSync(path.resolve('keys/private.key'), 'utf8');
const publicKEY  = fs.readFileSync(path.resolve('keys/public.key'), 'utf8');
module.exports = {
  sign: (payload, $Options) => {
    /*
     sOptions = {
      issuer: "Authorizaxtion/Resource/This server",
      subject: "iam@user.me",
      audience: "Client_Identity" // this should be provided by client
     }
    */
    // Token signing options
    const signOptions = {
      issuer:  $Options.issuer,
      subject:  $Options.subject,
      audience:  $Options.audience,
      expiresIn:  "5d",    // 30 days validity
      algorithm:  "RS256"
    };
    return jwt.sign(payload, privateKEY, signOptions);
  },
  verify: (token, $Option) => {
    /*
     vOption = {
      issuer: "Authorization/Resource/This server",
      subject: "iam@user.me",
      audience: "Client_Identity" // this should be provided by client
     }
    */
    const verifyOptions = {
      issuer:  $Option.issuer,
      subject:  $Option.subject,
      audience:  $Option.audience,
      expiresIn:  "30d",
      algorithm:  ["RS256"]
    };
    try{
      return jwt.verify(token, publicKEY, verifyOptions);
    }catch (err){
      return false;
    }
  },
  decode: (token) => {
    return jwt.decode(token, {complete: true});
    //returns null if token is invalid
  }
};
