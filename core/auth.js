const jwtAuth = (req, res, next) => {
  try{
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT, function (err, payload) {
      payload
        ? next()
        : res.sendStatus(405);
    })
  }catch(e){
    res.status(500).send('not allowed');
  }
};

module.exports = {
  jwtAuth
};
