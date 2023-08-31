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
    this.display(this.result)
    console.log('result: ', this.result);
    $(".loading-page").addClass("d-none");
  }
  display(result) {
    let game = "";
    for (let i = 0; i < result.length; i++) {
      game += `
      <div class="box" data-id="${result[i].id}">
      <div class="border border-dark border-1 p-3 h-100 ">
      <div class="card bg-transparent text-white d-flex flex-column border-0 justify-content-between align-items-center">
        <img src="${result[i].thumbnail}" class="card-img-top">
        <div class="card-body border-0">
          <div class="d-flex justify-content-between align-items-center">
          <h5 class="card-title">${result[i].title}</h5>
          <p id="free" class="btn btn-primary">FREE</p>
          </div>
          <p class="card-text fs-6 text-gray">${result[i].short_description}</p>
        </div>
        <div class="card-body border-1 border-top border-black d-flex justify-content-between align-items-center flex-0 pt-3">
          <a href="#" class="card-link text-white nav-link bg-black bg-opacity-25 px-2 py-1 h-fit rounded-3 category">${result[i].genre}</a>
          <a href="#" class="card-link text-white nav-link bg-black bg-opacity-25 px-2 py-1 h-fit rounded-3 platform">${result[i].platform}</a>
        </div>
      </div>
    </div>
    </div>
    ` 
    $("#row").html(game);
    document.querySelectorAll(".box").forEach((box) => {
      box.addEventListener("click",()=>{
        $("#gameInfo").removeClass("d-none");
        $("#games").addClass("d-none");
        const info = new GameInfo(box.dataset.id);
      })
            $(".close").click(()=>{
        $("#gameInfo").addClass("d-none")
        $("#games").removeClass("d-none");
      })
    })
  }

}


}
