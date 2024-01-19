import { USER } from "../models/user.js";

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation
  const { id, firstName, lastName, email, password, phoneNumber } = USER;
  if (
    (id === "" &&
      firstName === "" &&
      lastName === "" &&
      email === "" &&
      password === "" &&
      phoneNumber === "") ||
    password.length < 3
  ) {
    res.status(400).json({
      message: "Invalid user data",
    });
  }

  next();
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  const { id, firstName, lastName, email, password, phoneNumber } = USER;
  if (
    (id === "" &&
      firstName === "" &&
      lastName === "" &&
      email === "" &&
      password === "" &&
      phoneNumber === "") ||
    password.length < 3
  ) {
    res.status(400).json({
      message: "Invalid user data",
    });
  }

  next();
  next();
};

export { createUserValid, updateUserValid };
