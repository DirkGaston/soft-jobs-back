const reportingMiddleware = (req, res, next) => {
  console.log("Received request: ", req.method, req.url);
  console.log("Request headers: ", req.headers);
  console.log("Request body: ", req.body);
  next();
};

module.exports = { reportingMiddleware };
