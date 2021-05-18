const shuffle = () => {
  var songs = [
    '<div class="feature-box col-lg-4 col-md-6"><iframe src="https://open.spotify.com/embed/track/46NHU4NCL41ErRLWMdvmJ6" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>',  // "armory!" by Kid Sora (produced by srdbeatz, 5v, and odece)
    '<div class="feature-box col-lg-4 col-md-6"><iframe src="https://open.spotify.com/embed/track/2o8O5q8oxIwOvzDZiK3BdR" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>',  // "WAT U KNO ABT THAT" by Lil Yawh (produced by srdbeatz)
    '<div class="feature-box col-lg-4 col-md-6"><iframe src="https://open.spotify.com/embed/track/0hQgEP0Thly4pG4DGuJLX6" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>',  // "goin2myhead" by i9bonsai (produced by srdbeatz)
    '<div class="feature-box col-lg-4 col-md-6"><iframe src="https://open.spotify.com/embed/track/3D88PDMxUKx9uwyxSdPEpX" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>',  // "Zombie" by Chiefed Samurai (produced by srdbeatz and o9serenity)
    '<div class="feature-box col-lg-4 col-md-6"><iframe src="https://open.spotify.com/embed/track/0uz7adrUqpaaTvI0XI3BUC" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>',  // "Trigun" by benjamingotbenz (produced by srdbeatz)
    '<div class="feature-box col-lg-4 col-md-6"><iframe src="https://open.spotify.com/embed/track/4aQqRB02G8XjP5UFhRLBcJ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>',  // "not sorry" by Nosgov (produced by srdbeatz, lb66music, and hadif10k),
    '<div class="feature-box col-lg-4 col-md-6"><iframe src="https://open.spotify.com/embed/track/68vhMwhv5RcSEDE89S9dSn" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>'  // "#flashbang OMFG" by Kevinhilfiger (produced by srdbeatz)
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
    var newNode = parser.parseFromString(htmlStr, "text/html");
    featuredBox.appendChild(newNode.documentElement.childNodes[1].childNodes[0]);
  });
}

shuffle();  // On Page load.
