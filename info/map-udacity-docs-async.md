# Handling Google Maps in Async and Fallback

From [Udacity discussion forum post](https://discussions.udacity.com/t/handling-google-maps-in-async-and-fallback/34282)

Hiya everyone,

For all data APIs of the Neighborhood Map project, each must:

* Load asynchronously (success callback)
* Have their errors handled gracefully (error callback or timeout message)

This includes Google Maps. There seems to be some confusion with the implementation, so I thought I'd try to clear things up. The explanation ended up kind of lengthy, so I thought I'd give it its own thread. :laughing:

I admit I'm perfectly imperfect, so I'm definitely open to input and suggestions.

**Note on Posting:** For any questions or suggestions on what I've written in this thread, please post! But if you have a problem with getting it to work with your project, _please make your own thread_ (preferably one that includes a link to your project on GitHub). It is better to make your own and get your problem its full attention. Also, in doing so, you will always get emails and/or notifications when someone replies.

---

* <a href="#basic-tactics">Basic Tactics: The Two Routes</a>
  * <a href="#using-defer">Using Defer</a>
    * <a href="#why-not-defer-all">Why Not Defer Them All?</a>
  * <a href="#using-async">Using Async</a>
    * <a href="#using-async-and-defer">Using Async and Defer Together?</a>
* <a href="#using-jquery">Using jQuery</a>
* <a href="#checking-fallback-technique">Checking Your Fallback Technique</a>
* <a href="#url-modifications">URL Modifications</a>
  * <a href="#other-google-libraries">Using Other Google Libraries</a>
  * <a href="#percent-encodings">Percent Encodings</a>
* <a href="#faq">FAQ</a>

---

## <a name="basic-tactics" href="#basic-tactics">Basic Tactics: The Two Routes</a>

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

* `YOUR_API_KEY` is your API key.
* `googleSuccess` is the name of the function you want called if the script loads successfully. The name is passed through with `callback` in the URL for the Google Maps script.
* `googleError` is the name of the function you want called if the  script fails to load, making use of `onerror`. (This is your fallback function!)

(Do replace the `googleSuccess` and `googleError` names with your own, as you see fit.)

In either case, it is important that both callback functions and any other necessary parts are loaded _before_ the Google Maps script runs.

Of the two, I think `defer` is better in this situation. Why? Because we are dealing with dependencies and you can start loading your file sooner, getting the most advantage of loading asynchronously. If you're using `async`, you pretty much are stuck with putting your Google Maps script as last, and if it's the last one, it's not all that different from not using any asynchronous loading at all, isn't it?

### <a name="using-defer" href="#using-defer">Using Defer</a>

What `defer` does is start to load the file asynchronously, but it won't actually run the script until _after_ the browser has finished parsing the HTML. In this way, you can set this up as your first script

So let's say we have `example-script.js` that relies on the Google Maps script. Maybe we set it up to hold our successful and error-handling callbacks, too. We can set things up just like this:

```html
    <script defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=googleSuccess" onerror="googleError()"></script>
    <script src="./example-script.js"></script>
</body>
</html>
```

The browser would hit the Google Maps script and start to download it and then go to download `example-script.js`. Once both the Google Maps script is done _and_ the browser is done going through the HTML, the Google Maps script will run and trigger the appropriate callback function.

#### <a name="why-not-defer-all" href="#why-not-defer-all">Why Not Defer Them All?</a>

`defer` preserves the order of the scripts it is used on. So, if you did:

```html
<script defer "example1.js"></script>
<script defer "example2.js"></script>
<script defer "example3.js"></script>
```

It _should_ load them all asynchronously and then still execute them in the same order. This could make a page load really quickly, so why not just do that?

Well, it turns out that [there is a bug in Internet Explorer browsers](https://github.com/h5bp/lazyweb-requests/issues/42) that makes `defer` not function properly or work reliably in multiples. Ouch. There seems to be some possible workarounds, so it may be doable with some effort.

### <a name="using-async" href="#using-async">Using Async</a>

If you still wanted to use `async`, you could. You would simply have to put the Google Maps script last.

```html
    <script src="./example-script.js"></script>
    <script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=googleSuccess" onerror="googleError()"></script>
</body>
</html>
```

This ensures that all the necessary parts are loaded before it can run. If you put it in another position, you can't be sure when it'll run. I'd say `async` is usually better for situations where you aren't dealing with script dependencies like we are in this project, but you can still use it if you set it up in a way that will work out.

  ### <a name="using-async" href="#using-async-and-defer">Using Async and Defer Together?</a>

You've probably seen examples that use both `async` and `defer` at the same time, like so:

```html
    <script src="./example-script.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=googleSuccess" onerror="googleError()"></script>
</body>
</html>
```

Here, `async` is what happens in most browsers. In a browser that doesn't support `async`, it uses `defer`. So for the most part, it works the same as just `async` by itself.

<a href="#table-of-contents"><strong>^ Back to Top</strong></a>

---

## <a name="using-jquery" href="#using-jquery">Using jQuery</a>

If you're using jQuery in your project, you can instead have jQuery load the script for you by using `$.getScript`. With that, you have `done` and `fail` options that give you the same kind of control you'll use for your other APIs and their fallbacks.

You can [read the docs on `getScript` here](http://api.jquery.com/jQuery.getScript/). If you'd like to see it in action, [here's a Codepen](http://codepen.io/SittingFox/pen/BoREqP?editors=101).

Since you still need the callback for the script, you could avoid the `done` call altogether. Just have the script's callback handle what happens if it works.

<a href="#table-of-contents"><strong>^ Back to Top</strong></a>

---

## <a name="checking-fallback-technique" href="#checking-fallback-technique">Checking Your Fallback Technique</a>

Here are some ways you can check that your fallback handling is working:

* Disconnect your computer from the internet and try to load the page.
* Open up the page in Dev Tools, turn on the emulator, and under _Network_ choose the _Offline_ option. Then refresh.
* Block the APIs with changes to your host file or by using some blocking software. If you want to try changing your host file, here are some instructions:
  * [Windows](http://www.rackspace.com/knowledge_center/article/modify-your-hosts-file#Windows_Vista)
  * [Mac](http://www.imore.com/how-edit-your-macs-hosts-file-and-why-you-would-want)
  * [Linux](http://www.rackspace.com/knowledge_center/article/modify-your-hosts-file#Linux)
* Make typos in the URL.

Making a typo in the URL is my favorite, with using Dev Tools to fake disconnected internet to be my second choice. Both are easy and don't interfere with anything else on the computer. Use whatever option you prefer.

Keep in mind that the options that involve having no internet (for real or not) will not allow scripts that aren't hosted locally to work. No internet means no downloading _at all_.

<a href="#table-of-contents"><strong>^ Back to Top</strong></a>

----

## <a name="url-modifications" href="#url-modifications">URL Modifications</a>

You may need to make some adjustment to the URL you use, depending on what you're trying to do.

### <a name="other-google-libraries" href="#other-google-libraries">Using Other Google Libraries</a>

If you have libraries you need to load, like Places, you still just add on the callback with an ampersand (like `&callback=googleSuccess`). So you'd end up with something like this:
```html
<script defer src="http://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=googleSuccess" onerror="googleError()"></script>
```

### <a name="percent-encoding" href="#percent-encoding">Percent Encoding</a>

To make things check out with the HTML Validator, replace the ampersand with the [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding) `%26`. So it becomes `%26callback=googleSuccess`.
```html
<script defer src="http://maps.googleapis.com/maps/api/js?libraries=places%26callback=googleSuccess" onerror="googleError()"></script>
```

<a href="#table-of-contents"><strong>^ Back to Top</strong></a>

----

## <a name="faq" href="#faq">FAQ</a>

### Does the Google Maps script need an API key?

Yes. You can get one [over here](https://developers.google.com/maps/documentation/javascript/get-api-key).

### How can I hide my API key?

If you're putting your project on GitHub, you could simply not include the API key. If you would like to make use of GitHub Pages, you could make it take more effort by only including the API key on the branch for showing the site.

Most people don't go to great lengths to hide their Google Maps API keys, especially for only a free version.

Feel free to [read through this thread](https://discussions.udacity.com/t/hiding-google-api-key/170445/2?u=stacy), which discusses different things you could try for hiding an API key.

<a href="#table-of-contents"><strong>^ Back to Top</strong></a>