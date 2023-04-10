export const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button className="" 
    type={type}
    {...otherProps}
    >
      {children}
    </button>
  );
};
