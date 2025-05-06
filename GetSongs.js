const shuffle = () => {
  var songs = [
    '"https://open.spotify.com/embed/track/5qNcN9D7qV7gLL5YjOEp7g"',
    '"https://open.spotify.com/embed/track/0JGzWmU2dBSIrWu25UjWwZ"',
    '"https://open.spotify.com/embed/track/14apWkXuh5o8PQg4smwfKL"',
    '"https://open.spotify.com/embed/track/5PY4JyJ5oQIxLx9iqrXXEG"',
    '"https://open.spotify.com/embed/track/0pwFrIJoyqy9ugDZzS6LuL"',
    '"https://open.spotify.com/embed/track/2HaBkCslZfvnQezlLJqTFA"',,
    '"https://open.spotify.com/embed/track/3ZCczSAiyiT3WZMbeWjuzi"',
    '"https://open.spotify.com/embed/track/0wpiw06Mi04WzoE66WeZIm"',
    '"https://open.spotify.com/embed/track/04nPLtaR2lP2Gr9aht1cXq"',
    '"https://open.spotify.com/embed/track/4mMevxIGyOGDmaG8MVAKZm"',
    '"https://open.spotify.com/embed/track/6Mc3itw8LFnVDrASVN1J3A"',
    '"https://open.spotify.com/embed/track/3QwcOzf70Y7P2w7XJYboNW"',
    '"https://open.spotify.com/embed/track/0f9E0d2hbsdWEu1c2nXlNL"',
    '"https://open.spotify.com/embed/track/5oERKCRba1gdGMAfzbMaHs"',
  ];
  var featuredBox = document.getElementById('featured-box');
  while(featuredBox.firstChild) {  // Remove all current elements.
    featuredBox.removeChild(featuredBox.firstChild);
  }
  let i = Math.floor(Math.random()) % songs.length;
  const shuffled = songs.sort(() => 0.5 - Math.random());  // Shuffle array
  let selected = shuffled.slice(0, 3);  // Get sub-array of first n elements after shuffled
  var parser = new DOMParser();
  selected.forEach((htmlStr) => {
    var newNode = parser.parseFromString(
      `<div class="feature-box col-lg-4 col-md-6"><iframe src=${htmlStr} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`,
       "text/html");
    featuredBox.appendChild(newNode.documentElement.childNodes[1].childNodes[0]);
  });
};

shuffle();  // On Page load.
