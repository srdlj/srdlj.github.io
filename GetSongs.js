const shuffle = () => {
  var songs = [
    '"https://open.spotify.com/embed/track/46NHU4NCL41ErRLWMdvmJ6"',  // "armory!" by Kid Sora (produced by srdbeatz, 5v, and odece)
    '"https://open.spotify.com/embed/track/2o8O5q8oxIwOvzDZiK3BdR"',  // "WAT U KNO ABT THAT" by Lil Yawh (produced by srdbeatz)
    '"https://open.spotify.com/embed/track/0hQgEP0Thly4pG4DGuJLX6"',  // "goin2myhead" by i9bonsai (produced by srdbeatz)
    '"https://open.spotify.com/embed/track/3D88PDMxUKx9uwyxSdPEpX"',  // "Zombie" by Chiefed Samurai (produced by srdbeatz and o9serenity)
    '"https://open.spotify.com/embed/track/0uz7adrUqpaaTvI0XI3BUC"',  // "Trigun" by benjamingotbenz (produced by srdbeatz)
    '"https://open.spotify.com/embed/track/4aQqRB02G8XjP5UFhRLBcJ"',  // "not sorry" by Nosgov (produced by srdbeatz, lb66music, and hadif10k),
    '"https://open.spotify.com/embed/track/68vhMwhv5RcSEDE89S9dSn"',  // "#flashbang OMFG" by Kevinhilfiger (produced by srdbeatz)
    '"https://open.spotify.com/embed/track/3dNgIro8gFfFA6JkOhi3bV"'  // "WAT'S NEXT (PINK HEART EMOJIS)" by Lil Yawh (produced by srdbeatz)
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
