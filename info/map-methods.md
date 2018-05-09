# Computational narrative

<a href="https://www.udacity.com/">
  <img src="https://s3-us-west-1.amazonaws.com/udacity-content/rebrand/svg/logo.min.svg" width="300" alt="Udacity logo svg">
</a>

Udacity Full Stack Web Developer Nanodegree program

[Project 5. JavaScript Knockout Neighborhood Map](https://github.com/br3ndonland/udacity-fsnd-p5-map)

Brendon Smith

br3ndonland

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Prep](#prep)
  - [Directory setup](#directory-setup)
  - [JavaScript background](#javascript-background)
- [Page layout](#page-layout)
- [Google Maps API](#google-maps-api)
  - [Map](#map)
  - [Markers](#markers)
  - [Location list](#location-list)
- [Knockout](#knockout)

## Prep

### Directory setup

- I created the typical directory structure, with static/ containing the css/, img/, and js/ directories for static website content.
- I added info/ for the Udacity documentation and computational narrative.
- In the top-level directory, I added the README.md, and index.html. I got the HTML started by using the `html:5` Emmet snippet in vscode (just save the file as HTML, and type html).

### JavaScript background

The Full Stack Web Developer Nanodegree program (FSND) doesn't provide introductory training for JavaScript, so I started off taking several days to strengthen my JavaScript skills.

#### JavaScript syntax

- [x] I checked out the [Udacity Intro to JavaScript](https://www.udacity.com/course/intro-to-javascript--ud803) course, but skipped it, because it's not updated for ES6.
- [x] [Udacity ES6 - JavaScript Improved](https://www.udacity.com/course/es6-javascript-improved--ud356) course
  - I took this course during the [Grow with Google scholarship program](https://github.com/br3ndonland/udacity-google). I reviewed my notes from the course and practiced the syntax.
- [x] [cs50](https://cs50.harvard.edu/)
  - [x] Lecture 11 JavaScript
- [x] [cs50 CSCI E-33a](https://cs50.github.io/web/lectures)
  - [x] Lecture 05 JavaScript
- [ ] [Wes Bos JavaScript30](https://javascript30.com/)

#### JavaScript testing and debugging

- [x] General vscode JavaScript testing and debugging features
  - [x] Shift+Cmd+D, then enter, to run JS file
  - [x] [Quokka.js](https://quokkajs.com):
    - Select "Quokka.js: Start on Current File" and it will run the JS and show output inline.
  - `console.log(varName)` is like `print()` in Python.
- [x] [vscode Node.js tutorial](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
- [x] [Firefox debugger playground](https://mozilladevelopers.github.io/playground/debugger/)
- [ ] [Wes Bos JavaScript30](https://javascript30.com/) lesson 9, "14 must-know dev tools tricks"

## Page layout

- This is a simple one-page web app. Based on the mockup in the project description, I should have a header bar at the top, and a sliding drawer menu on the side.
- The header was simple: just add HTML `<header>` tags before the `<div id="map"></div>`
- I used an `<aside>` element for the sliding drawer menu. *TODO*

## Google Maps API

### Map

- I completed the [Udacity Google Maps APIs course](https://www.udacity.com/course/google-maps-apis--ud864) and followed the steps in the [Google Maps JavaScript API documentation](https://developers.google.com/maps/documentation/javascript/tutorial) to create the map.
- [Load the Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial#Loading_the_Maps_API) into *index.html*.
- Add [Map DOM element](https://developers.google.com/maps/documentation/javascript/tutorial#Map_DOM_Elements) to *index.html*.
- [Set Map options](https://developers.google.com/maps/documentation/javascript/tutorial#MapOptions)
  - center
  - zoom
  - style: I used the [Map Styler tool](https://mapstyle.withgoogle.com/) and the [styling instructions in the Google Maps JavaScript API docs](https://developers.google.com/maps/documentation/javascript/styling).
  - I kept the JavaScript in *index.js*.
  - The map requires CSS with `height` attributes for `body` and `#map`.
  - I attempted to change `var map` to `const map`, but wasn't able to get it to work.
  - I was thinking about using the drawing tools to draw a border around Back Bay, but I expanded my list of coffee shops to the greater Boston area, so I didn't need the Back Bay border.

### Markers

- I added a simple drop animation for the marker using the [marker instructions in the Google Maps API docs](https://developers.google.com/maps/documentation/javascript/markers).
- Changing the marker color is, strangely, not straightforward. TODO

### Location list

Rather than manually input an array, I decided to create a list in Gooogle Maps, ["Boston's best beans by br3ndonland"](https://goo.gl/maps/wmHnqRoFfhz), and access the JSON from that. This way, if the list is updated (if I add more coffee shops, for example), the app will automatically have the new information.

I curated a list of my favorite coffee shops in the Boston area.

- Barrington Coffee Roasters
- Blue Bottle Coffee Harvard Square
- Curio Coffee
- George Howell Coffee
- Gracenote Coffee
- Intelligentsia Coffeebar Watertown
- Neighborhoods Coffee and Crepes
- Pavement Coffeehouse Fenway
- Pavement Coffeehouse Newbury St
- Render Coffee South End
- Thinking Cup Newbury St
- Thinking Cup Tremont St

Filter the list by `open_now: true` from the JSON

## Knockout

- [x] [JavaScript Design Patterns course](https://www.udacity.com/course/javascript-design-patterns--ud989)
- [KnockoutJS tutorials](http://learn.knockoutjs.com)
