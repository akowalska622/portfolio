import classes from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerWrapper}>
        Created with ❤️ by{" "}
        <span class={classes.footerHover}>Ania Kowalska</span> in 2021.
        Copyright &copy; by Ania Kowalska. Always open to job/freelance
        propositions.
      </div>
    </div>
  );
};
