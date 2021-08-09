import classes from "./Card.module.scss";

export const Card = ({ children, position, customClass }) => {
  return (
    <div className={`${classes.card} ${classes[position]} ${customClass}`}>
      {children}
    </div>
  );
};
