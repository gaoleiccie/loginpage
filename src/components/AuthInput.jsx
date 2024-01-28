import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

export default function AuthInput() {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  const passwordNotValid = submitted && enteredPassword.trim().length < 6; 
  const emailNotValid = submitted && !enteredEmail.includes("@");

  function clickedSubmit() {
    setSubmitted(true);
  }

  return (
    <div className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-2 mb-6">
        <Input
          label="Email"
          type="email"
          invalid={emailNotValid}
          onChange={(event) => handInputChange("email", event.target.value)}
        />
        <Input
          label="Password"
          type="password"
          invalid={passwordNotValid}
          onChange={(event) => handInputChange("password", event.target.value)}
        />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">Crate a new account</button>
        <Button onClick={clickedSubmit}>Sign in</Button>
      </div>
    </div>
  );
}
