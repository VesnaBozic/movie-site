let movies = JSON.parse(localStorage.getItem("movies"));


function createMovies(){
let counterMovie = 0;
movies.forEach(movie => {
    let body = document.getElementsByTagName("body")[0];
    let divShowCaseLast;
    if(counterMovie%5==0){
        let divShowCase = document.createElement("div");
        divShowCase.id="showcase";
        divShowCaseLast = divShowCase;
    }
    else{
        divShowCaseLast = body.children[body.children.length-1];
    }
    
    let divsliderBox = document.createElement("div");
    divsliderBox.className = "slider-box";
    let pTime = document.createElement("p");
    pTime.className="time";
    pTime.innerHTML = movie["genre"];
    divsliderBox.appendChild(pTime);
    let imgBox = document.createElement("div");
    imgBox.className ="img-box";
    let picLink =document.createElement("a");
    picLink.href="movie.html";
    let imgMovie = document.createElement("img");
    imgMovie.src = movie["src"];
    picLink.appendChild(imgMovie);
    imgBox.appendChild(picLink);
    divsliderBox.appendChild(imgBox);
    let pDetail = document.createElement("p");
    pDetail.className = "detail";
    pDetail.innerHTML = movie["name"];
    let price = document.createElement('a');
    price.href="registration.html";
    price.className ="price";
    price.innerHTML = "Price: " + movie["price"]+"$";
    pDetail.appendChild(price);
    divsliderBox.appendChild(pDetail);
    let cart = document.createElement("div");
    cart.className="cart";
    let deleteMovie = document.createElement("a");
    deleteMovie.href ="registration.html";
    deleteMovie.innerHTML = "Buy";
    cart.appendChild(deleteMovie);
    divsliderBox.appendChild(cart);
    divShowCaseLast.appendChild(divsliderBox);
    console.log(divShowCaseLast)
    body.appendChild(divShowCaseLast);



    counterMovie+=1;

})}

createMovies();