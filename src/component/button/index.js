import "./index.css"

const Button = (props, { onPress }) => {
  return (
    <button onClick={props.onClick}>{props.children ? props.children : "default"}</button>
  );
}

export default Button;
