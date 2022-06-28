const jwt = require("jsonwebtoken");

const secret = "thisssmysecretsshhhhh";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    console.log(token);

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log(data);
      req.user = data;
      console.log(req.user);
    } catch {
      console.log("Nahhh Invalid token");
    }

    return req;
  },
  signToken: function ({ name, email, _id, role }) {
    const payload = { name, email, _id, role };
    console.log(payload); //*delete this before production ///
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

// Either: (1) jwt.sign isn't hashing the token correctly or (2) jwt.verify isn't verifying the tokens correctly. For some reason it seems that 