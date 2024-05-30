import classes from './MyStack.module.scss';
import { Card } from './ui/Card';
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiGit,
  SiGithub,
  SiSvelte,
  SiNextdotjs,
  SiGraphql,
  SiFirebase,
  SiStorybook,
  SiTypescript,
  SiRedux,
  SiMongodb,
} from 'react-icons/si';

import { FaSass, FaNodeJs, FaVuejs } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { Icon } from './Icon';

export const MyStack = () => {
  return (
    <Card position='left' customClass={classes.stack}>
      <div className={classes.stackSection}>
        <h2>Strongest skills</h2>
        <div className={classes.gallery}>
          <div className={classes.row}>
            <Icon label='HTML5'>
              <SiHtml5 className={`${classes.icon} ${classes.html}`} />
            </Icon>
            <Icon label='CSS3'>
              <SiCss3 className={`${classes.icon} ${classes.css}`} />
            </Icon>
            <Icon label='JavaScript'>
              <SiJavascript className={`${classes.icon} ${classes.js}`} />
            </Icon>
          </div>
          <div className={classes.row}>
            <Icon label='React'>
              <SiReact className={`${classes.icon} ${classes.react}`} />
            </Icon>
            <Icon label='React Native'>
              <TbBrandReactNative
                className={`${classes.icon} ${classes.reactnative}`}
              />
            </Icon>
            <Icon label='NextJS'>
              <SiNextdotjs className={`${classes.icon} ${classes.next}`} />
            </Icon>
          </div>
          <div className={classes.row}>
            <Icon label='TypeScript'>
              <SiTypescript
                className={`${classes.icon} ${classes.typescript}`}
              />
            </Icon>
            <Icon label='Firebase'>
              <SiFirebase className={`${classes.icon} ${classes.firebase}`} />
            </Icon>
            <Icon label='Redux'>
              <SiRedux className={`${classes.icon} ${classes.redux}`} />
            </Icon>
          </div>
        </div>
      </div>
      <div className={classes.stackSection}>
        <h2>Also worked with</h2>
        <div className={classes.gallery}>
          <div className={classes.row}>
            <Icon label='NodeJS'>
              <FaNodeJs className={`${classes.icon} ${classes.node}`} />
            </Icon>
            <Icon label='MongoDB'>
              <SiMongodb className={`${classes.icon} ${classes.mongo}`} />
            </Icon>
            <Icon label='GraphQL'>
              <SiGraphql className={`${classes.icon} ${classes.graph}`} />
            </Icon>
          </div>
          <div className={classes.row}>
            <Icon label='Svelte'>
              <SiSvelte className={`${classes.icon} ${classes.svelte}`} />
            </Icon>
            <Icon label='Vue.js'>
              <FaVuejs className={`${classes.icon} ${classes.vue}`} />
            </Icon>
            <Icon label='Storybook'>
              <SiStorybook className={`${classes.icon} ${classes.storybook}`} />
            </Icon>
          </div>
          <div className={classes.row}>
            <Icon label='Sass'>
              <FaSass className={`${classes.icon} ${classes.sass}`} />
            </Icon>
            <Icon label='Git'>
              <SiGit className={`${classes.icon} ${classes.git}`} />
            </Icon>
            <Icon label='Github'>
              <SiGithub className={`${classes.icon} ${classes.github}`} />
            </Icon>
          </div>
        </div>
      </div>
    </Card>
  );
};
