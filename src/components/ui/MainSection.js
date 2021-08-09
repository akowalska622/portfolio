import classes from "./MainSection.module.scss";

export const MainSection = ({ children }) => {
  return <div className={classes.section}>{children}</div>;
};
