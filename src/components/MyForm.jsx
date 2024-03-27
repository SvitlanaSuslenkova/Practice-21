import React, { useRef, useState } from "react";
import "./myForm.css";
import FormInput from "./FormInput";
import Button from "./MyButton";

function MyForm(propps) {
  const useremailRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    let inputValue = useremailRef.current.value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
      return setIsValid(false);
    } else {
      alert(`Thank you!`);
      setIsValid(true);
      useremailRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="email"
        name="useremail"
        refer={useremailRef}
        placeholder="Your email address..."
        style={{
          borderColor: isValid ? "hsl(223, 87%, 63%, 75%)" : "red",
        }}
        //className={isValid ? "" : "invalid"}
      />
      {!isValid && (
        <span className="errorText">Please provide a valid email address</span>
      )}
      <Button type="submit" text="Notify Me" />
    </form>
  );
}

export default MyForm;
