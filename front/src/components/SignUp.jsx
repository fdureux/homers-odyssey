import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const updateEmailField = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="SignUp">
      <h1>{email}</h1>
      <input
        type="email"
        name="email"
        onChange={(e) => updateEmailField(e)}></input>
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
