import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';

import JobExperience from "./JobExperience";
import experience from "./experience";

const pages = [];

experience.forEach( (experience, key) => {
  pages.push(({style, onClick}) => <animated.div style={style}><JobExperience experience={experience} key={key} onClick={onClick}/></animated.div>);
});

export default function Resume() {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set(state => (state + 1) % experience.length), []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  return (
    <div>
      {transitions.map(({item, props, key}) => {
        const Page = pages[item]
        return <Page key={key} style={props} onClick={onClick} />
      })}
    </div>
  );
}
