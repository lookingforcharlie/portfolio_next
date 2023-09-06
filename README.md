# Portfolio@Next.JS

- Date: August 31, 2023

## Stacks

- Next.JS, App Router, Server Action, Form Action, useContext, TypeScript, Framer Motion, Resend, React Email, React Intersection Observer, React Vertical Timeline, Tailwind CSS, clsx,

## What happened

- 'left-1/2 -translate-x-1/2' doesn't work in motion.div in Header component, cos it's overwritten by 'initial' and 'animate', so add "x:'-50%'" can fix it, write translate in motion.div

- Package of 'react-intersection-observer' realizes that the focus of Header items will change as long as user scroll down the page

1. use context hook to implement this function

- 'npm i react-vertical-timeline-component' makes the experience section

- use Server Action in Next.JS, it's still in beta stage

```
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};
```

- 'npm i resend' to implement send email function.

- Style the email using 'https://react.email/'

1. npm i @react-email/components @react-email/tailwind

- https://react-hot-toast.com/, 'npm i react-hot-toast'

- in activeSectionContext.tsx

```
type SectionName = (typeof links)[number]['name'];
```

- in Project.tsx

```
<Project {...project} />
```

## Issues

- Framer-motion literally takes each component into client side rendering, ain't a good choice for large project.

- react-vertical-timeline-component also only works on CSR.

- react-vertical-timeline-component doesn't support Tailwind CSS.

## Expected Update

- [ ] Fix Contact Form: clear the input area after submit
- [ ] Add Location
- [ ] Change the color of icons in footer
- [ ] Redesign the Skills section
- [x] Update the content of Experience
- [ ] Rewrite About content
- [ ] Fix the FlashCards project
- [ ] Modify the bg color for dark mode
- [ ] Modify the bg color for light mode
- [x] Add projects for backup
- [ ] Modify the motion effect for Projects section
- [x] Fix the bug of iPhone12 Pro screen draggable horizontally
- [ ] Fix the bug of Header text color when focused in dark mode
- [x] favicon isn't loaded online
- [x] Add 'Scroll to top' button on the page
