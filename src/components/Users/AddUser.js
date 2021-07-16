import React, { useState } from "react";
import Card from "../UI/Card";

import classes from "../../css/AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      console.log("All fields are required");
      return;
    }
    if (parseInt(enteredAge) < 0) {
      console.log("Age is invalid :>> ", enteredAge);
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameChangedHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={usernameChangedHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          name="age"
          id="age"
          value={enteredAge}
          onChange={ageChangedHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
