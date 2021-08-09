import classes from './MoreInfo.module.scss';
import { Card } from './ui/Card';

export const MoreInfo = () => {
  return (
    <Card customClass={classes.more} position='left'>
      <div className={classes.moreProjects}>
        <h2>Are you craving more?</h2>
        <div className={classes.text}>
          <p>
            Check out my{' '}
            <a
              href='https://akowalska622.github.io/vanilla-js-academy/'
              className={classes.hoverLink}
              target='_blank'
            >
              Vanilla JS Academy
            </a>{' '}
            challenges.
          </p>
          <p>
            You can also take a look at my{' '}
            <a
              href='https://www.codewars.com/users/akowalska6222/completed_solutions'
              className={classes.hoverLink}
              target='_blank'
            >
              Codewars
            </a>
            .{' '}
          </p>
          <p>
            <a
              href='https://github.com/akowalska622/algorithms_challenges'
              target='_blank'
              className={classes.hoverLink}
            >
              Check out
            </a>{' '}
            how I deal with algorithms!
          </p>
          <p>
            {' '}
            <a
              href='https://codepen.io/collection/DBrrgx'
              className={classes.hoverLink}
              target='_blank'
            >
              Here
            </a>{' '}
            and{' '}
            <a
              className={classes.hoverLink}
              href='https://codesandbox.io/u/a.kowalska622'
              target='_blank'
            >
              here
            </a>{' '}
            you can find bunch of <br />
            my small projects, components.
          </p>
          <small>Credits for doughnut: Ahmed Sadek</small>
        </div>
      </div>
      <div className={classes.donut}>
        <div className={classes.donutBody}></div>
        <div className={classes.donutFace}></div>
        <div className={classes.donutHighlight}></div>
      </div>
    </Card>
  );
};
