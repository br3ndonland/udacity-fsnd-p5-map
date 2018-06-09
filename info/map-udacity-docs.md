# Udacity documentation

<a href="https://www.udacity.com/">
  <img src="https://s3-us-west-1.amazonaws.com/udacity-content/rebrand/svg/logo.min.svg" width="300" alt="Udacity logo svg">
</a>

Udacity Full Stack Web Developer Nanodegree program

[Project 5. JavaScript Knockout Neighborhood Map](https://github.com/br3ndonland/udacity-fsnd-p5-map)

Brendon Smith

br3ndonland

## Table of Contents <!-- omit in toc -->

- [Project overview](#project-overview)
  - [Why this project](#why-this-project)
  - [What will I learn](#what-will-i-learn)
  - [How does this help my career](#how-does-this-help-my-career)
- [Project details](#project-details)
  - [How will I complete this project](#how-will-i-complete-this-project)
  - [Example: BART Locations San Francisco](#example-bart-locations-san-francisco)
  - [Helpful resources](#helpful-resources)
- [A note about plagiarism](#a-note-about-plagiarism)
- [Project submission details](#project-submission-details)
  - [Project submission](#project-submission)
  - [Evaluation](#evaluation)
  - [Submission](#submission)
  - [What's next](#whats-next)
- [Project rubric](#project-rubric)
  - [Interface design](#interface-design)
  - [App functionality](#app-functionality)
  - [App architecture](#app-architecture)
  - [Asynchronous data usage](#asynchronous-data-usage)
  - [Location details functionality](#location-details-functionality)
  - [Documentation](#documentation)
  - [Suggestions to make your project stand out](#suggestions-to-make-your-project-stand-out)
- [Handling Google Maps in async and fallback](#handling-google-maps-in-async-and-fallback)

## Project overview

You will develop a single page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add functionality to this map including highlighted locations, third-party data about those locations and various ways to browse the content.

### Why this project

The neighborhood map application is complex enough and incorporates a variety of data points that it can easily become unwieldy to manage. There are a number of frameworks, libraries and APIs available to make this process more manageable and many employers are looking for specific skills in using these packages.

### What will I learn

You will learn how design patterns assist in developing a manageable codebase. You’ll then explore how frameworks can decrease the time required developing an application and provide a number of utilities for you to use. Finally, you’ll implement third-party APIs that provide valuable data sets that can improve the quality of your application.

### How does this help my career

- Interacting with API servers is the primary function of Front-End Web Developers
- Use of third-party libraries and APIs is a standard and acceptable practice that is encouraged
- Asynchronous programming is important to understand in today's market

## Project details

### How will I complete this project

**Update May 11th, 2018: We are no longer requiring the use of Google Maps for this project. You have the option of using another mapping system instead of Google Maps.**

1. Review our course [JavaScript Design Patterns](https://www.udacity.com/course/javascript-design-patterns--ud989) and check out the [Neighborhood Map project rubric](https://review.udacity.com/#!/rubrics/17/view).
2. Download the [Knockout framework](http://knockoutjs.com/). Knockout must be used to handle the list, filter, and any other information on the page that is subject to changing state. Things that should not be handled by Knockout: anything the Maps API is used for, creating markers, tracking click events on markers, making the map, refreshing the map. **Note 1**: Tracking click events on list items _should_ be handled with Knockout. **Note 2:** Creating your markers as a part of your ViewModel is allowed (and recommended). Creating them as Knockout observables is not.
3. Asynchrony and Error Handling. Note that all data APIs used in the project should [load asynchronously](https://discussions.udacity.com/t/handling-google-maps-in-async-and-fallback/34282) and errors should be handled gracefully. In case of error (e.g. in a situation where a third party API does not return the expected result) we expect your webpage to do one of the following: A message is displayed notifying the user that the data can't be loaded, **OR** There are no negative repercussions to the UI. **Note:** Please note that we expect students to handle errors if the browser has trouble initially reaching the 3rd-party site as well. For example, imagine a user is using your Neighborhood Map, but her firewall prevents her from accessing the Instagram servers. Here is a reference article on [how to block websites](http://www.digitaltrends.com/computing/how-to-block-a-website/) with the hosts file. It is important to handle errors to give users a consistent and good experience with the webpage. Read [this blogpost](http://ruben.verborgh.org/blog/2012/12/31/asynchronous-error-handling-in-javascript/) to learn more. Some JavaScript libraries provide special methods to handle errors. For example: refer to .fail() method discussed [here](http://api.jquery.com/jquery.ajax/#jqXHR) if you use jQuery's ajax() method. We strongly encourage you to explore ways to handle errors in the library you are using to make API calls.
4. Write code required to add a full-screen map to your page using the [Google Maps API](https://developers.google.com/maps/). For sake of efficiency, the map API should be called only once.
5. If you are prompted to do so, you may want to get a [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key), and include it as the value of the `key` parameter when loading the Google Maps API in **index.html**: `<script src="http://maps.googleapis.com/maps/api/js?libraries=places&key=[YOUR_API_KEY]"></script>` You may have some initial concerns with placing your API key directly within your JavaScript source files, but rest assured this is perfectly safe. All client-side code must be downloaded by the client; therefore, the client must download this API key - it is not intended to be secret. Google has security measures in place to ensure your key is not abused. **It is not technically possible to make anything secret on the client-side.**
6. Write code required to display map markers identifying at least 5 locations that you are interested in within this neighborhood. Your app should display those locations by default when the page is loaded.
7. Implement a list view of the set of locations defined in step ~~5~~ 6. *(br3ndonland note: this is a typo, they mean step 6)*
8. Provide a filter option that uses an input field to filter both the list view and the map markers displayed by default on load. The list view and the markers should update accordingly in real time. Providing a search function through a third-party API is not enough to meet specifications. This filter can be a text input or a dropdown menu.
9. Add functionality using third-party APIs to provide information when a map marker or list view entry is clicked (ex: Yelp reviews, Wikipedia, Flickr images, etc). Note that StreetView and Places don't count as an additional 3rd party API because they are libraries included in the Google Maps API. If you need a refresher on making AJAX requests to third-party servers, check out our [Intro to AJAX](https://www.udacity.com/course/ud110) course. Please provide attribution to the data sources/APIs you use. For example if you are using Foursquare, indicate somewhere in your interface and in your README that you used Foursquare's API.
10. Add functionality to animate a map marker when either the list item associated with it or the map marker itself is selected.
11. Add functionality to open an infoWindow with the information described in step 9 (you can also populate a DOM element with this info, but you should still open an infoWindow, even with minimal info, like location name) when either a location is selected from the list view or its map marker is selected directly.
12. The app's interface should be intuitive to use. For example, the input text area to filter locations should be easy to locate. It should be easy to understand what set of locations is being filtered. Selecting a location via list item or map marker should cause the map marker to bounce or in some other way animate to indicate that the location has been selected and associated info window should open above the map marker with additional information.

### Example: BART Locations San Francisco

![Clicking map marker](http://i.imgur.com/7SJztlY.png)

Clicking a marker on the map should open more information about that location.

![Clicking map name](http://i.imgur.com/74IC6X6.png)

Clicking a name in the list view should open the information window for the associated marker.

![Filtering location list](http://i.imgur.com/KCYzG3L.png)

The list of locations should be filterable with a text input or dropdown menu. Filtering the list also filters the markers on the map.

![Mobile responsive](http://i.imgur.com/Dj2sWt7.png)

The web app should be mobile responsive - notice the hamburger menu icon used to hide the list on small screens (this is just one possible mobile implementation).

### Helpful resources

None of these are required, but they may be helpful.

- [Foursquare API](https://developer.foursquare.com/)
- [MediaWikiAPI for Wikipedia](http://www.mediawiki.org/wiki/API:Main_page)
- [Google Maps Street View Service](https://developers.google.com/maps/documentation/javascript/streetview)
- [Google Maps](https://developers.google.com/maps/documentation/)
- [Project 5 Overview WebCast](https://github.com/udacity/fend-office-hours/tree/master/Javascript%20Design%20Patterns/P5%20Project%20Overview)
- [Knockout JS Tutorials](http://learn.knockoutjs.com/)
- [Todo MVC Knockout Example](http://todomvc.com/examples/knockoutjs/)

## A note about plagiarism

Please take a second to review this section of the Udacity Honor Code (which you agree to whenever you submit a project):

> I hereby confirm that all project submissions consist of my own work. Accordingly, I will document and cite the origins of any part(s) of my project submissions that were taken from websites, books, forums, blog posts, github repositories, or any other source and explain why I used them for any part of my submission. Acceptable sources consist of:
>
> - Un/modified code from the Udacity courses
> - A modest amount of un/modified code from third-party sources with attribution
> - NOT ACCEPTABLE: any part of another student’s work, even with attribution

Neighborhood Map is a difficult project - that's on purpose. You'll be starting with a blank slate and will be designing the architecture of your app entirely on your own.

**PLEASE** don't copy work from other students. We will find out and we will ask you to do the project again. If you do get stuck, here are some tips for how to seek out inspiration without violating the Honor Code:

- Look at documentation and online tutorials **FIRST**.
- If you do look at another student's work for inspiration (on GitHub or elsewhere), **don't copy it**. Don't take any part of it and don't download it. Review it to understand their thought process.
- Reflect on their design choices - what are some of the tradeoffs of different decisions in their code?
- Take a break, if need be, as you figure out how you will implement your app. You have to write your own code so understanding one implementation of it but taking the time to think through your own implementation is extremely important for your own learning and in producing original work.
- Return to your code and write **your own** implementation.
- Cite any submissions you looked at to give credit where it is due.

These steps will help you better understand how to review others' submissions without copying and getting flagged for plagiarism. We are invested in your learning and will celebrate your successes with you.

## Project submission details

### Project submission

You will develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add additional functionality to this application, including: map markers to identify popular locations or places you’d like to visit, a search function to easily discover these locations, and a listview to support simple browsing of all locations. You will then research and implement third-party APIs that provide additional information about each of these locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).

### Evaluation

Your project will be evaluated by a Udacity reviewer according to the **[Neighborhood Map Project Rubric](https://review.udacity.com/#!/projects/2711658591/rubric)**. Be sure to review it thoroughly before you submit. All criteria must "meet specifications" in order to pass.

### Submission

1. If build tools (such as Gulp or Grunt) are used, submit both your source and production code in the same repository in separate directories. These directories are usually named `src` and `dist` respectively.
2. If build tools are used the gulp or grunt.js file as well as the package.json file must be included in the submission.
3. If build tools are used, the instructions for building the project and running the tool must be included in the README.md. You may find the short [Writing READMEs course](https://www.udacity.com/course/writing-readmes--ud777) helpful.
4. The node_modules directory may contain thousands of files and should not be contained in the submission. See the forum post [how to remove node_modules directory from Github repository](https://discussions.udacity.com/t/how-to-remove-node-modules-directory-from-github-respository/40929) for instructions.
5. The master branch is the default Github repository branch. If you wish to submit another branch, you'll need to set it as the [new default branch](https://help.github.com/articles/setting-the-default-branch/) inside your Github repository.
6. When you're ready to submit your project go back to your [Udacity Home](https://www.udacity.com/me), click on Project 5.1, and we'll walk you through the rest of the submission process. Due to the high volume of submissions we receive, please allow up up to **7 business days** for your evaluation to be returned.
7. If you are having any problems submitting your project or wish to check on the status of your submission, please email us at **frontend-project@udacity.com** or visit us in the [discussion forums](http://discussions.udacity.com).

### What's next

You will get an email as soon as your reviewer has feedback for you. In the meantime, review your next project and feel free to get started on it or the courses supporting it!

## Project rubric

### Interface design

- Responsiveness: All application components render on-screen in a responsive manner.
- Usability: All application components are usable across modern desktop, tablet, and phone browsers.

### App functionality

- Filter Locations:
  - Includes a text input field or dropdown menu that filters the map markers and list items to locations matching the text input or selection.
  - Filter function runs error-free.
- List View:
  - A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied.
  - Clicking a location on the list displays unique information about the location, and animates its associated map marker (e.g. bouncing, color change.)
  - List functionality is responsive and runs error free.
- Map and Markers:
  - Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied.
  - Clicking a marker displays unique information about a location in either an `infoWindow` or `DOM` element.
  - Markers should animate when clicked (e.g. bouncing, color change.)
  - Any additional custom functionality provided in the app functions error-free.

### App architecture

- Proper Use of `Knockout`
  - Code is properly separated based upon `Knockout` best practices
    - follow an `MVVM` pattern
    - avoid updating the `DOM` manually with `jQuery` or `JS`
    - use `observables` rather than forcing refreshes manually
    - etc.
  - `Knockout` should not be used to handle the `Google Map API`.
- There are at least 5 locations in the model. These may be hard-coded or retrieved from a data API.

### Asynchronous data usage

- Asynchronous API Requests
  - Application utilizes the `Google Maps API` and at least one non-Google third-party `API`. Refer to [this documentation](https://developers.google.com/maps/documentation/javascript/tutorial)
  - All data requests are retrieved in an asynchronous manner.
- Error Handling
  - Data requests that fail are handled gracefully using common fallback techniques (i.e. `AJAX` error or fail methods). 'Gracefully' means the user isn’t left wondering why a component isn’t working. If an `API` doesn’t load there should be some visible indication on the page (an alert box is ok) that it didn’t load. _Note_: You do not need to handle cases where the user goes offline.

### Location details functionality

- Additional Location Data
  - Functionality providing additional data about a location is provided and sourced from a 3rd party API. Information can be provided either in the marker’s `infoWindow`, or in an `HTML` element in the `DOM` (a sidebar, the list view, etc.)
  - Provide attribution for the source of additional data. For example, if using Foursquare, indicate somewhere in your UI and in your README that you are using Foursquare data.
- Error Free
  - Application runs without errors.
- Usability
  - Functionality is presented in a usable and responsive manner.

### Documentation

- README
  - A `README` file is included detailing all steps required to successfully run the application.
- Comments
  - Comments are present and effectively explain longer code procedures.
- Code Quality
  - Code is formatted with consistent, logical, and easy-to-read formatting as described in the [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html).
  - If build tools (such as Gulp or Grunt) are used, both source and production code are submitted in the same repository in separate directories. These directories are usually named `src` and `dist` respectively.

### Suggestions to make your project stand out

- Add unique functionality beyond the minimum requirements (i.e. the ability to “favorite” a location, etc.).
- Incorporate a build process allowing for production quality, minified code, to be delivered to the client.
- Data persists when the app is closed and reopened, either through localStorage or an external database (e.g. Firebase).
- Include additional third-party data sources beyond the minimum required.
- Style different markers in different (and functionally-useful) ways, depending on the data set.
- Implement additional optimizations that improve the performance and user experience of the filter functionality (keyboard shortcuts, autocomplete functionality, filtering of multiple fields, etc).
- Integrate all application components into a cohesive and enjoyable user experience.

## Handling Google Maps in async and fallback

**From [Udacity discussion forum post](https://discussions.udacity.com/t/handling-google-maps-in-async-and-fallback/34282). Forum post provided by Udacity on how to make asynchronous HTTP requests. The info is outdated and not particularly useful.**

Hiya everyone,

For all data APIs of the Neighborhood Map project, each must:

- Load asynchronously (success callback)
- Have their errors handled gracefully (error callback or timeout message)

This includes Google Maps. There seems to be some confusion with the implementation, so I thought I'd try to clear things up. The explanation ended up kind of lengthy, so I thought I'd give it its own thread. :laughing:

I admit I'm perfectly imperfect, so I'm definitely open to input and suggestions.

**Note on Posting:** For any questions or suggestions on what I've written in this thread, please post! But if you have a problem with getting it to work with your project, _please make your own thread_ (preferably one that includes a link to your project on GitHub). It is better to make your own and get your problem its full attention. Also, in doing so, you will always get emails and/or notifications when someone replies.

### Basic Tactics: The Two Routes <!-- omit in toc -->

The most basic way to set up a script to load asynchronously is through the HTML itself. There are two ways you can do this. You can either use `async` or `defer`, and both of these options will work with your Google Maps script to make it load asynchronously.

With `async`:

```html
<script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=googleSuccess" onerror="googleError()"></script>
```

With `defer`:

```html
<script defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=googleSuccess" onerror="googleError()"></script>
```

Where (for both)

- `YOUR_API_KEY` is your API key.
- `googleSuccess` is the name of the function you want called if the script loads successfully. The name is passed through with `callback` in the URL for the Google Maps script.
- `googleError` is the name of the function you want called if the  script fails to load, making use of `onerror`. (This is your fallback function!)

(Do replace the `googleSuccess` and `googleError` names with your own, as you see fit.)

In either case, it is important that both callback functions and any other necessary parts are loaded _before_ the Google Maps script runs.

Of the two, I think `defer` is better in this situation. Why? Because we are dealing with dependencies and you can start loading your file sooner, getting the most advantage of loading asynchronously. If you're using `async`, you pretty much are stuck with putting your Google Maps script as last, and if it's the last one, it's not all that different from not using any asynchronous loading at all, isn't it?

#### Using Defer <!-- omit in toc -->

What `defer` does is start to load the file asynchronously, but it won't actually run the script until _after_ the browser has finished parsing the HTML. In this way, you can set this up as your first script

So let's say we have `example-script.js` that relies on the Google Maps script. Maybe we set it up to hold our successful and error-handling callbacks, too. We can set things up just like this:

```html
    <script defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=googleSuccess" onerror="googleError()"></script>
    <script src="./example-script.js"></script>
</body>
</html>
```

The browser would hit the Google Maps script and start to download it and then go to download `example-script.js`. Once both the Google Maps script is done _and_ the browser is done going through the HTML, the Google Maps script will run and trigger the appropriate callback function.

##### Why Not Defer Them All <!-- omit in toc -->

`defer` preserves the order of the scripts it is used on. So, if you did:

```html
<script defer "example1.js"></script>
<script defer "example2.js"></script>
<script defer "example3.js"></script>
```

It _should_ load them all asynchronously and then still execute them in the same order. This could make a page load really quickly, so why not just do that?

Well, it turns out that [there is a bug in Internet Explorer browsers](https://github.com/h5bp/lazyweb-requests/issues/42) that makes `defer` not function properly or work reliably in multiples. Ouch. There seems to be some possible workarounds, so it may be doable with some effort.

#### Using Async <!-- omit in toc -->

If you still wanted to use `async`, you could. You would simply have to put the Google Maps script last.

```html
    <script src="./example-script.js"></script>
    <script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=googleSuccess" onerror="googleError()"></script>
</body>
</html>
```

This ensures that all the necessary parts are loaded before it can run. If you put it in another position, you can't be sure when it'll run. I'd say `async` is usually better for situations where you aren't dealing with script dependencies like we are in this project, but you can still use it if you set it up in a way that will work out.

#### Using Async and Defer Together <!-- omit in toc -->

You've probably seen examples that use both `async` and `defer` at the same time, like so:

```html
    <script src="./example-script.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=googleSuccess" onerror="googleError()"></script>
</body>
</html>
```

Here, `async` is what happens in most browsers. In a browser that doesn't support `async`, it uses `defer`. So for the most part, it works the same as just `async` by itself.

### Using jQuery <!-- omit in toc -->

If you're using jQuery in your project, you can instead have jQuery load the script for you by using `$.getScript`. With that, you have `done` and `fail` options that give you the same kind of control you'll use for your other APIs and their fallbacks.

You can [read the docs on `getScript` here](http://api.jquery.com/jQuery.getScript/). If you'd like to see it in action, [here's a Codepen](http://codepen.io/SittingFox/pen/BoREqP?editors=101).

Since you still need the callback for the script, you could avoid the `done` call altogether. Just have the script's callback handle what happens if it works.

### Checking Your Fallback Technique <!-- omit in toc -->

Here are some ways you can check that your fallback handling is working:

- Disconnect your computer from the internet and try to load the page.
- Open up the page in Dev Tools, turn on the emulator, and under _Network_ choose the _Offline_ option. Then refresh.
- Block the APIs with changes to your host file or by using some blocking software. If you want to try changing your host file, here are some instructions:
  - [Windows](http://www.rackspace.com/knowledge_center/article/modify-your-hosts-file#Windows_Vista)
  - [Mac](http://www.imore.com/how-edit-your-macs-hosts-file-and-why-you-would-want)
  - [Linux](http://www.rackspace.com/knowledge_center/article/modify-your-hosts-file#Linux)
- Make typos in the URL.

Making a typo in the URL is my favorite, with using Dev Tools to fake disconnected internet to be my second choice. Both are easy and don't interfere with anything else on the computer. Use whatever option you prefer.

Keep in mind that the options that involve having no internet (for real or not) will not allow scripts that aren't hosted locally to work. No internet means no downloading _at all_.

### URL Modifications <!-- omit in toc -->

You may need to make some adjustment to the URL you use, depending on what you're trying to do.

#### Using Other Google Libraries <!-- omit in toc -->

If you have libraries you need to load, like Places, you still just add on the callback with an ampersand (like `&callback=googleSuccess`). So you'd end up with something like this:

```html
<script defer src="http://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=googleSuccess" onerror="googleError()"></script>
```

#### Percent Encoding <!-- omit in toc -->

To make things check out with the HTML Validator, replace the ampersand with the [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding) `%26`. So it becomes `%26callback=googleSuccess`.

```html
<script defer src="http://maps.googleapis.com/maps/api/js?libraries=places%26callback=googleSuccess" onerror="googleError()"></script>
```

### FAQ <!-- omit in toc -->

#### Does the Google Maps script need an API key <!-- omit in toc -->

Yes. You can get one [over here](https://developers.google.com/maps/documentation/javascript/get-api-key).

#### How can I hide my API key <!-- omit in toc -->

If you're putting your project on GitHub, you could simply not include the API key. If you would like to make use of GitHub Pages, you could make it take more effort by only including the API key on the branch for showing the site.

Most people don't go to great lengths to hide their Google Maps API keys, especially for only a free version.

Feel free to [read through this thread](https://discussions.udacity.com/t/hiding-google-api-key/170445/2?u=stacy), which discusses different things you could try for hiding an API key.

[(Back to top)](#top)
