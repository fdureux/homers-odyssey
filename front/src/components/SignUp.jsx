import React, { useState } from "react";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    passwordconf: "",
    firstname: "",
    lastname: "",
  });
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    console.log(userInfo);
  };
  return (
    <div className="SignUp">
      <h1>{JSON.stringify(userInfo)}</h1>
      <form>
        <input type="email" name="email" onChange={handleSignUpChange}></input>
        <input
          type="password"
          name="password"
          onChange={handleSignUpChange}></input>
        <input
          type="password"
          name="passwordconf"
          onChange={handleSignUpChange}></input>
        <input
          type="text"
          name="firstname"
          onChange={handleSignUpChange}></input>
        <input
          type="text"
          name="lastname"
          onChange={handleSignUpChange}></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;

/* Place an onchange listener into the tag which will listen for edits made in the field.

Assign a function to the listener which will be executed following every change. Call the function updateEmailField.

Transmit (bind) the event context to the function usingbind(this).

Implement the updateEmailField(event){} function where event corresponds to the event context => event.target.value returns the input value.

Ensure that the function returns the email state.

Append theemail state to the <h1>title. */
