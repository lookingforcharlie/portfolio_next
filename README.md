# Portfolio@Next.JS

- Date: August in 2023

## What happened

- 'left-1/2 -translate-x-1/2' doesn't work in motion.div in Header component, cos it's overwritten by 'initial' and 'animate', so add "x:'-50%'" can fix it, write translate in motion.div

- Package of 'react-intersection-observer' realizes that the focus of Header items will change as long as user scroll down the page

1. use context hook to implement this function

## Questions

- in activeSectionContext.tsx

```
type SectionName = (typeof links)[number]['name'];
```

- in Project.tsx

```
<Project {...project} />
```
