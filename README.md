# Personal Portfolio

This is my personal portfolio site, built using plain HTML, CSS and a bit of
JavaScript, and hosted on GitHub Pages.

Live site: https://ibrahim-kone-dev.github.io

## What is in here

- index.html (home page and the about section)
- projects.html (the projects)
- resume.html (embeds the resume PDF in an iframe so it can be read in place)
- styles.css (custom styles, no frameworks)
- main.js (dark/light toggle, plus the copyright year)
- assets/Ibrahim_Kone_Resume.pdf (resume PDF)

I kept everything zero-dependency with no build tools or JS frameworks.

## Dark and light mode

The chosen theme is saved in localStorage under the key `theme`. If nothing is
saved yet, the site follows the operating system setting instead.

Every page has a few lines of JavaScript in the `<head>` that set the theme
before the browser paints anything. That has to happen there rather than in
main.js, otherwise the page comes up light for a moment and then flips to dark,
which looks broken.

The colors are CSS custom properties, written out twice in styles.css: once on
`:root` for light and once on `[data-theme="dark"]`. The toggle only changes
that one attribute on `<html>`.

## Deployment and workflow

GitHub Pages builds the site automatically from the root of the main branch.
Whenever I push changes, it updates live within a minute or two.

To test changes locally I run `python -m http.server` in this folder and open
http://localhost:8000. Opening index.html straight from the file system mostly
works, but localStorage is unreliable on `file://` so the theme toggle is
easier to check on a server.

## Reminders for updates

- To update my resume, overwrite assets/Ibrahim_Kone_Resume.pdf using the same
  filename. resume.html points at that path, so nothing else needs changing.
- New projects go in the grid in projects.html. Copy an existing
  `<article class="project-card">` and fill it in.
- The header and footer are duplicated across all three pages. If I add a page
  or change a nav link, I have to do it in each file.
