import classes from './Icon.module.scss';

export const Icon = ({ children, label }) => {
  return (
    <span className={classes.iconWrapper}>
      {children}
      <span className={classes.label}>{label}</span>
    </span>
  );
};
