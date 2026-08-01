import { animate, stagger, onScroll, utils } from 'animejs';

animate('.intro__title', {
  opacity: [0, 1],
  x: ['-100%', 0],
  autoplay: onScroll({
    enter: 'center -360px',
    leave: 'center top',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

animate('.intro__description', {
  opacity: [0, 1],
  x: ['-100%', 0],
  autoplay: onScroll({
    enter: 'center -150px',
    leave: 'center top',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

animate('.location__info', {
  opacity: [0, 1],
  scale: [0, 1],
  autoplay: onScroll({
    enter: 'center -600px',
    leave: 'center top',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

animate('.plan__title', {
  opacity: [0, 1],
  // scale: [0, 1],
  autoplay: onScroll({
    enter: 'center -340px',
    leave: 'center -200px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

utils.$('.plan__item').forEach(item => {
  animate(item, {
    opacity: [0, 1],
    scale: [0.4, 1],
    autoplay: onScroll({
      enter: 'center -340px',
      leave: 'center -240px',
      alternate: true,
      sync: true,
      // debug: true,
    }),
  });
});

animate('.timer', {
  opacity: [0, 1],
  // scale: [0, 1],
  autoplay: onScroll({
    enter: 'center -250px',
    leave: 'center -100px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

utils.$('.wishes__item').forEach(item => {
  animate(item, {
    opacity: [0, 1],
    // scale: [0.4, 1],
    autoplay: onScroll({
      enter: 'center -260px',
      leave: 'center -100px',
      alternate: true,
      sync: true,
      // debug: true,
    }),
  });
});

animate('.contacts__title', {
  opacity: [0, 1],
  // scale: [0, 1],
  autoplay: onScroll({
    enter: 'center 80px',
    leave: 'center 150px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

utils.$('.contacts__item').forEach(item => {
  animate(item, {
    opacity: [0, 1],
    y: ['-100%', 0],
    scale: [0.4, 1],
    autoplay: onScroll({
      enter: 'center 160px',
      leave: 'center 410px',
      alternate: true,
      sync: true,
      // debug: true,
    }),
  });
});
