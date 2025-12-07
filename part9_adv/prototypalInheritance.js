function Anime(name) {
  this.name = name;
}

Anime.prototype.top = function () {
  console.log(`Your favourite Anime is: ${this.name}`);
};

let favAnime = new Anime("Attack on Titan");
favAnime.top();

// OUTPUT:
// Your favourite Anime is: Attack on Titan