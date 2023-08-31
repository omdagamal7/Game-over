export class GameInfo{
  constructor(id){
    this.getDetails(id)
  }

async getDetails(id){
  $(".game-info-loading-page").removeClass("d-none");
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e871f3d194msh4a231076c4f1818p1d8de4jsnbd68ebe35be7',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options);
  const result = await response.json();
  $(".game-info-loading-page").addClass("d-none");
  this.displayDetails(result);

}


displayDetails(result){
  const detailsBox = `
  <img class="imgInfo rounded img-fluid flex-basis-40" src="${result.thumbnail}" alt="">
  <div class="infoData flex-basis-60">
    <h4 class="title">${result.title}</h4>
    <div class="d-flex align-items-center"><p class="me-2">Category: </p> <p class="Category btn btn-info mb-3 p-0 px-2">${result.genre}</p></div>
    <div class="d-flex align-items-center"><p class="me-2">Platform: </p> <p class="Platform btn btn-info mb-3 p-0 px-2">${result.platform}</p></div>
    <div class="d-flex align-items-center"><p class="me-2">Statue: </p> <p class="Status btn btn-info p-0 px-2 mb-3 ">${result.status}</p></div>
    <div class="mb-5"><p class="mb-1">Discription: </p><p class="discription">${result.description}</p></div>
    <a class="btnLink btn btn-outline-warning text-white" target="_blank" href="${result.game_url}">Show Game</a>
  </div>
  `
  $(".info").html(detailsBox);
}
}