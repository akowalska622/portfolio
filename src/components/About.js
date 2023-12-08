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
        Hi there! I'm self-taught web-developer from Poland, but currently based in Spain. I'm deeply passionate about web and mobile
        development and I'm eager to share this passion with you! <br />
        When I don't code, I climb, travel, play with my dog or practice BJJ.
        <br />I can communicate with you in Polish, English, Spanish, or
        Italian.
      </p>
    </Card>
  );
};
