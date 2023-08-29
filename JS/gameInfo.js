export class GameInfo{
  constructor(results){
    this.result = results
    console.log(this.result);
    this.display()
  }
  display() {
    let game = "";
    for (let i = 0; i < this.result.length; i++) {
      game += `
      <div class="box">
      <div class="border border-dark border-1 p-3 h-100 ">
      <div class="card bg-transparent text-white d-flex flex-column border-0 justify-content-between align-items-center">
        <img src="${this.result[i].thumbnail}" class="card-img-top">
        <div class="card-body border-0">
          <div class="d-flex justify-content-between align-items-center">
          <h5 class="card-title">${this.result[i].title}</h5>
          <p id="free" class="btn btn-primary">FREE</p>
          </div>
          <p class="card-text fs-6 text-gray">${this.result[i].short_description}</p>
          <p class="link d-none">${this.result[i].game_url}</p>
        </div>
        <div class="card-body border-1 border-top border-black d-flex justify-content-between align-items-center pt-3">
          <a href="#" class="card-link text-white nav-link bg-black bg-opacity-25 px-2 py-1 h-fit rounded-3 category">${this.result[i].genre}</a>
          <a href="#" class="card-link text-white nav-link bg-black bg-opacity-25 px-2 py-1 h-fit rounded-3 platform">${this.result[i].platform}</a>
        </div>
      </div>
    </div>
    </div>
    `
    }
    $("#row").html(game);
    this.setDataToDetails()
  }
  setDataToDetails(){
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
      $(boxes[i]).click(function () {
        $("#gameInfo").removeClass("d-none");
        let imgBox = this.querySelector("img").getAttribute("src");
        let titleBox = this.querySelector(".card-title").innerHTML;
        let discBox = this.querySelector(".card-text").innerHTML;
        let platformBox = this.querySelector(".platform").innerHTML;
        let categoryBox = this.querySelector(".category").innerHTML;
        let linkBox = this.querySelector(".link").innerHTML
        $(".imgInfo").attr("src",imgBox)
        $(".Category").html(categoryBox);
        $(".Platform").html(platformBox);
        $(".discription").html(discBox)
        $(".title").html(titleBox)
        $(".btnLink").attr("href",linkBox);
        setTimeout(function(){
          $(".game-info-loading-page").addClass("d-none");
        },300)
      })
    }
     // CLOSE GAME INFO
      $(".close").click(()=>{
        $("#gameInfo").addClass("d-none")
      })
  }
  
}