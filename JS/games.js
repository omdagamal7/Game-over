import { GameInfo } from "./gameInfo.js";
export class Games {
  constructor() {
    // RUN GET DATA FUNCTION
    this.getData("mmorpg")
    this.getCategory()
  }
  getCategory(){
    
    let category = document.querySelectorAll(".anchor")
    for (let i = 0; i < category.length; i++) {
      category[i].addEventListener("click",(e)=>{
        this.getData(e.target.innerHTML)
        $(category[i]).addClass("active")
        $(category[i]).parent().siblings().children().removeClass("active")
      })

      
    }
  }
  // GET ALL DATA FROM API
  async getData(category) {
    // API LINK
    this.url =
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    
  // API OPTIONS
  this.options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e871f3d194msh4a231076c4f1818p1d8de4jsnbd68ebe35be7",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    }
  }
  // GET NEEDED DATA FROM API
    const response = await fetch(this.url, this.options);
    // CONVERT FROM STRINGIFY TO PARSE
    this.result = await response.json();
    $(".loading-page").addClass("d-none");
    const games = new GameInfo(this.result);
  }


}
