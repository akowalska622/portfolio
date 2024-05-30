import classes from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={classes.footer}>
      Created with ❤️ by &nbsp;
      <span class={classes.footerHover}>Ania Kowalska</span>&nbsp;in 2021 -{' '}
      {new Date().getFullYear()}. Copyright &copy; by&nbsp;
      <span class={classes.footerHover}>Ania Kowalska</span>. Always open to
      job/freelance propositions.
    </div>
  );
};
