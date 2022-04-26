export default function Button(props) {
  const { children, outline, className, ...rest } = props;

  const genClass = props.outline ? "btn-outline" : "btn btn-default";
  const classNames = props.className === undefined ? genClass : `${genClass} ${props.className}`;

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
}