# Portfolio@Next.JS

- Date: August in 2023

## What happened

- 'left-1/2 -translate-x-1/2' doesn't work in motion.div in Header component, cos it's overwritten by 'initial' and 'animate', so add "x:'-50%'" can fix it, write translate in motion.div

- Package of 'react-intersection-observer' realizes that the focus of Header items will change as long as user scroll down the page

1. use context hook to implement this function

- 'npm i react-vertical-timeline-component' makes the experience section

- use Server Action in Next.JS

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

## Questions

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

- [ ] Contact Form: clear the input area after submit
- [ ] Change the color of icons in footer
