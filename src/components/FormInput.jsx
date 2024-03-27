import "./formInput.css";
const FormInput = (props) => {
  return (
    <input
      ref={props.refer}
      placeholder={props.placeholder}
      style={props.style}
      value={props.value}
    />
  );
};
export default FormInput;
