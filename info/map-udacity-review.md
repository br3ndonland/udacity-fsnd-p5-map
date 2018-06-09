# Project review

<a href="https://www.udacity.com/">
  <img src="https://s3-us-west-1.amazonaws.com/udacity-content/rebrand/svg/logo.min.svg" width="300" alt="Udacity logo svg">
</a>

Udacity Full Stack Web Developer Nanodegree program

[Project 5. JavaScript Map](https://github.com/br3ndonland/udacity-fsnd-p5-map)

Brendon Smith

[br3ndonland](https://github.com/br3ndonland)

## Table of Contents <!-- omit in toc -->

- [Rubric](#rubric)
  - [Reviewer summary](#reviewer-summary)
  - [Interface design](#interface-design)
  - [App functionality](#app-functionality)
  - [App architecture](#app-architecture)
  - [Asynchronous data usage](#asynchronous-data-usage)
  - [Location details functionality](#location-details-functionality)
  - [Documentation](#documentation)
- [Code](#code)
- [Updates after review](#updates-after-review)

## Rubric

I passed code review on my first submission.

### Reviewer summary

> You nailed it! Very excellent job! :collision: :dizzy:
It's now time to sit back and reward yourself for the excellent hard work you've done!
>
> Congratulations on finishing the course. I hope you've enjoyed the program as much as many others did. And whatever you're planning to do next, I wish you best luck!

### Interface design

- [x] All application components render on-screen in a responsive manner.
- [x] All application components are usable across modern desktop, tablet, and phone browsers.

### App functionality

- [x] Includes a text input field or dropdown menu that filters the map markers and list items to locations matching the text input or selection. Filter function runs error-free.
- [x] A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied.
- [x] Clicking a location on the list displays unique information about the location, and animates its associated map marker (e.g. bouncing, color change.)
- [x] List functionality is responsive and runs error free.
- [x] Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied.
- [x] Clicking a marker displays unique information about a location in either an infoWindow or DOM element.
- [x] Markers should animate when clicked (e.g. bouncing, color change.)
- [x] Any additional custom functionality provided in the app functions error-free.

### App architecture

- [x] Code is properly separated based upon Knockout best practices (follow an MVVM pattern, avoid updating the DOM manually with jQuery or JS, use observables rather than forcing refreshes manually, etc). Knockout should not be used to handle the Google Map API.
- [x] There are at least 5 locations in the model. These may be hard-coded or retrieved from a data API.

>For Future Reference :zap:
>
>After this excellent practice with Knockout JS, there are also many other Javascript frameworks that you may want to consider to strengthen your skill set:
>
> - React JS by Facebook
> - Vue JS
> - Angular by Google
> - Ember JS
> - etc.
> If you're interested in learning React JS, you can consider this nanodegree in the future:[React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019)

### Asynchronous data usage

- [x] Application utilizes the Google Maps API or another mapping system (like leaflet.js or MapBox) and at least one non-Google third-party API.
- [x] All data requests are retrieved in an asynchronous manner.
- [x] Data requests that fail are handled gracefully using common fallback techniques (i.e. AJAX error or fail methods). 'Gracefully' means the user isn’t left wondering why a component isn’t working. If an API doesn’t load there should be some visible indication on the page (an alert box is ok) that it didn’t load. Note: You do not need to handle cases where the user goes offline.

### Location details functionality

- [x] Functionality providing additional data about a location is provided and sourced from a 3rd party API. Information can be provided either in the marker’s infoWindow, or in an HTML element in the DOM (a sidebar, the list view, etc.)
- [x] Provide attribution for the source of additional data. For example, if using Foursquare, indicate somewhere in your UI and in your README that you are using Foursquare data.
- [x] Application runs without errors.
- [x] Functionality is presented in a usable and responsive manner.

### Documentation

- [x] A README file is included detailing all steps required to successfully run the application.
- [x] Comments are present and effectively explain longer code procedures.
- [x] Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide.
- [x] If build tools (such as Gulp or Grunt) are used, both source and production code are submitted in the same repository in separate directories. These directories are usually named src and dist respectively.

## Code

> - *index.js*
>   - Great job keeping only one instance of the InfoWindow to be shared all markers for optimization! :star2:
>   - Excellent job showing / hiding markers efficiently with setVisible method of the Marker class!
>   - Excellent job fitting map markers within map view with fitBounds!
>   - Tip :zap:
>     - You can utilize this to make map display responsively by using a window resize event and call fitBounds method to make sure map markers always fit on screen as user resizes their browser window:
>
>       ```js
>       google.maps.event.addDomListener(window, 'resize', function() {
>         map.fitBounds(bounds); // `bounds` is a `LatLngBounds` object
>       });
>       ```
>
>   - Tip :zap:
>     - It's recommended that we separate JSON data into a file.
>     - Option 1
>       - A quick method is to create a separate JS file and request it before this JS file so that it can access the JSON data.
>     - Option 2
>       - Or a more ideal and practical method is to separate into a .json file:
>       - Move this JSON data into a .json file.
>         - You may want to validate the JSON data to makes sure it's in the correct JSON format. You can use JSONLint for this.
>       - Write an Ajax (XHR) request to retrieve this data (by using fetch or jQuery's ajax, etc.).
>         - Please note that if this options is used, we should make sure to re-factor app to adapt with the asynchronous nature of this request. If you're not confident with this, please go for option 1 above.
> - *index.html*
>   - Nice job binding KO observables and business logics to the DOM to manipulate them in an MVVM pattern!
>   - Great job loading map asynchronously!

## Updates after review

- The suggestion to externalize the styles JSON was a good one and I implemented it.
- Externalize
  - The styles JSON from Google is not properly formatted.The keys need to be double quoted.
  - I cut the `styles` object and pasted it into the Firefox browser console.
  - I converted the object to JSON with `stringify`:

    ```js
    const json = JSON.stringify(styles)
    console.log(json)
    ```

  - I saved the console output in a new file, *styles.json*.
  - I ran "Format Document" within vscode to prettify. The console output can also be pasted into the Firefox scratchpad and prettified there, though it may add single quotes instead of double quotes.
- Fetch
  - *index.js* is already wrapped in the `async function initMap ()` and a try/catch block.
  - I fetched *styles.json* and stored the result as the `styles` object.

    ```js
    const fetchStyles = fetch('static/js/styles.json')
    const styles = await (await fetchStyles).json()
    ```

  - The key to [formatting the local URL](https://stackoverflow.com/a/2188506) is to remember that the URL is formatted *relative to the displayed page,* so *index.html*, not *index.js*.
- I also added a DOM listener to ensure proper resizing of the map.
  - In *index.js*, after initializing the map, I added

    ```js
    google.maps.event.addDomListener(window, 'resize', () => map.fitBounds(bounds))
    ```

[(Back to top)](#top)
