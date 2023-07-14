import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const c = classNames.bind(styles);
function Button({
  children,
  login = false,
  signup = false,
  to,
  href,
  onClick,
  ...passProps
}) {
  let Comp = "button";

  const props = {
    ...passProps,
  };

  if (login || signup) {
    props.type = "submit";
  }
  if (onClick) {
    props.onClick = onClick;
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = c("wrapper", { login, signup });

  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
}

export default Button;
