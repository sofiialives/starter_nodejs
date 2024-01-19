const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  const result = req.responseData;
  if (result) {
    res.status(200).json(result);
  }
  req.status(404).json({ message: "Not found" });
  next();
};

export { responseMiddleware };
