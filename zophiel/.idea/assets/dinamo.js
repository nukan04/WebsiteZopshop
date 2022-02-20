//-----------------
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function (){
    modal.style.display = "block";
    modalImg.src = "images/products/vase1.jpg";
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function (){
    modal.style.display = "none";
}
//------------------


//---------------

let shop = document.createElement("img");
let circle =document.createElement("div")
let count =document.createElement("p");
let block1 = document.createElement("div");
//--------


count.style.display = "none";
count.style.zIndex ="2";
count.style.position = "absolute";
count.style.width = "10px";
count.style.top = "40px";
count.style.right = "539px";
count.style.fontSize = "10px";

circle.style.display = "none";
circle.style.position = "absolute";
circle.style.top = "40px";
circle.style.height ="15px";
circle.style.width = "15px";
circle.style.borderRadius = "50%";
circle.style.right = "538.2px";
circle.style.backgroundColor ="white";

shop.src = "images/icons/shopping-cart.png";
shop.style.position = "absolute";
shop.style.top = "25.2px";
shop.style.right = "550px";
shop.style.width ="19px";
//------
let box = new Array(10);
let cartImg = new Array(10);
let text = new Array(10);

//------------Shop animation
shop.onmouseover = function() {
shop.style.width ="22px";
    shop.style.top = "25.2px";
    circle.style.width = "17px";
    circle.style.height = "17px";
    count.style.fontSize = "13px";
    count.style.top = "38.5px";
    count.style.right = "540.5px";
    //--
    block1.style.display = "block";
    block1.style.position = "absolute";
    block1.style.right = "350px";
    block1.style.top = "60px";
    //--
    if(mas!=0) {


        for (let x = 0; x < mas; x++) {
            box[x] = document.createElement("div");
            box[x].style.height = "85px";
            box[x].style.width = "200px";
            box[x].style.padding = "5px 5px 5px 5px";
            box[x].style.marginBottom = "5px";
            box[x].style.backgroundColor = "rgba(255,255,255,0.64)"
            box[x].style.borderRadius ="5px";
            block1.appendChild(box[x]);

            text[x] = document.createElement("p");
            text[x].style.display = "inline-block";
            text[x].innerText = good[0].name;
            box[x].appendChild(text[x]);

            cartImg[x] = document.createElement("img");
            cartImg[x].style.width = "75px";
            cartImg[x].style.padding = "5px 5px 5px 5px";

        }
    }
    for(let x =0; x <mas; x++) {
        cartImg[x].src = good[x].src;
        cartImg[x].style.position = "relative";
        cartImg[x].style.float = " left";
        text[x].appendChild(cartImg[x]);

    }
}
shop.onmouseleave = function() {
    for (let x = 0; x < mas; x++) {
        box[x].remove();
        text[x].remove();
        cartImg[x].remove();
    }

    block1.style.display = "none";
    shop.style.width ="19px";
    circle.style.width = "15px";
    circle.style.height = "15px";
    count.style.fontSize = "10px";
    count.style.top = "40px";
    count.style.right = "539px";
}

//--------------------

document.body.appendChild(count);
document.body.appendChild(circle);
document.body.appendChild(shop);
document.body.appendChild(block1);


//-------------------
let price = document.getElementsByClassName("price").item(0).innerHTML;
let button1 = document.getElementById("but111");
let n = 0;
count.innerText = n+"";
//---------------------
//---------------------Magazine page


//-------------------------
//-------------------------

//Foshan buy button
let nesheu01 = 0;
let mas = 0;
var good = new Array( 10);
button1.onclick = function (){
counter();
    nesheu01++;

    good[mas] = {
    name:"Foshan",
    src:"images/products/vase1.jpg",
    price: price,
    num: nesheu01,
    };
    mas++;
}

//count all good for magazine
function counter (){
    circle.style.display = "block";
    count.style.display = "block";
    n++;
    count.innerText = n+"";
}
