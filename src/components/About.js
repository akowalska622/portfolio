import { Card } from "./ui/Card";
import avatar from "../assets/avatar.jpg";
import classes from "./About.module.scss";

export const About = () => {
  return (
    <Card position="right" customClass={classes.about} id="about">
      <img
        src={avatar}
        className={classes.avatar}
        alt="Author of the portfolio"
      />
      <p className={classes.description}>
        Hi there! I'm self-taught web-developer based in Poland, although I
        consider myself as a world's citizen. I'm deeply passionate about web
        development and I'm eager to share this passion with you! <br />
        When I don't code, I read books, travel, play with my dog or learn
        languages.
        <br />I can communicate with you in Polish, English, Spanish, or
        Italian.
      </p>
    </Card>
  );
};
