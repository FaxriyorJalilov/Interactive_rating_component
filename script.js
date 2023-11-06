let root = document.querySelector("#root");
let header_box = document.createElement("div");
header_box.style.Width = "100vw";
header_box.style.height = "100vh";
header_box.style.display = "flex";
header_box.style.alignItems = "center";
header_box.style.justifyContent = "center";
header_box.style.backgroundColor = "#141519";
root.appendChild(header_box);
let all = document.querySelectorAll("*");
for (let index = 0; index < all.length; index++) {
  all[index].style.margin = "0";
  all[index].style.padding = "0";
  all[index].style.boxSizing = "border-box";
}

//----box div--

let box = document.createElement("div");
box.style.backgroundColor = " #171E28";
box.style.maxWidth = "415px";
// box.style.height = "415px";
box.style.borderRadius = "30px";
box.style.padding = `31px 37.5px 28px 31px`;
header_box.appendChild(box);

//----Ellipse div--
let ellipse = document.createElement("div");
ellipse.style.width = "50px";
ellipse.style.height = "50px";
ellipse.style.borderRadius = "50px";
ellipse.style.background = "#262F38";
ellipse.style.display = "flex";
ellipse.style.alignItems = "center";
ellipse.style.justifyContent = "center";
ellipse.style.marginBottom = "34px";
box.appendChild(ellipse);

//----Ellipse img--

let ellipse_img = document.createElement("img");
ellipse_img.src = `./imgas/icon_star_1.svg`;
ellipse.appendChild(ellipse_img);

//----h1---

let text_h1 = document.createElement("h1");
text_h1.textContent = "How did we do?";
text_h1.style.color = "#fff";
text_h1.style.fontSize = "26px";
text_h1.style.fontWeight = "700px";
text_h1.style.marginBottom = "14px";
box.appendChild(text_h1);

//----P--

let text_p = document.createElement("p");
text_p.textContent = `Please let us know how we did with your support
request. All feedback is appreciated to help us
improve our offering!`;
text_p.style.width = "328px";
text_p.style.color = "#7B818D";
text_p.style.fontSize = "14px";
text_p.style.fontWeight = "500px";
text_p.style.lineHeight = "24px";
text_p.style.marginBottom = "27px";
box.appendChild(text_p);

//----Ellipse box--

let ellipse_box = document.createElement("div");
ellipse_box.style.width = "347px";
ellipse_box.style.display = "flex";
ellipse_box.style.alignItems = "center";
ellipse_box.style.justifyContent = "space-between";
ellipse_box.style.marginBottom = "31px";
box.appendChild(ellipse_box);

//---Ellipse div1--

let ellipse_div1 = document.createElement("div");
ellipse_div1.style.width = "53px";
ellipse_div1.style.height = "53px";
ellipse_div1.style.borderRadius = "53px";
ellipse_div1.style.background = "#262F38";
ellipse_div1.style.display = "flex";
ellipse_div1.style.alignItems = "center";
ellipse_div1.style.justifyContent = "center";
ellipse_div1.style.cursor = "pointer";
ellipse_box.appendChild(ellipse_div1);

//---Ellipse number ---

let ellipse_number_1 = document.createElement("p");
ellipse_number_1.textContent = "1";
ellipse_number_1.style.color = " #999ea4";
ellipse_number_1.style.fontSize = "18px";
ellipse_number_1.style.fontWeight = "500px";
ellipse_div1.appendChild(ellipse_number_1);

//---Ellipse div2--

let ellipse_div2 = document.createElement("div");
ellipse_div2.style.width = "53px";
ellipse_div2.style.height = "53px";
ellipse_div2.style.borderRadius = "53px";
ellipse_div2.style.background = "#262F38";
ellipse_div2.style.display = "flex";
ellipse_div2.style.alignItems = "center";
ellipse_div2.style.justifyContent = "center";
ellipse_div2.style.cursor = "pointer";
ellipse_box.appendChild(ellipse_div2);

//---Ellipse number 2 ---

let ellipse_number_2 = document.createElement("p");
ellipse_number_2.textContent = "2";
ellipse_number_2.style.color = " #999ea4";
ellipse_number_2.style.fontSize = "18px";
ellipse_number_2.style.fontWeight = "500px";
ellipse_div2.appendChild(ellipse_number_2);

//---Ellipse div 3--

let ellipse_div3 = document.createElement("div");
ellipse_div3.style.width = "53px";
ellipse_div3.style.height = "53px";
ellipse_div3.style.borderRadius = "53px";
ellipse_div3.style.background = "#262F38";
ellipse_div3.style.display = "flex";
ellipse_div3.style.alignItems = "center";
ellipse_div3.style.justifyContent = "center";
ellipse_div3.style.cursor = "pointer";
ellipse_box.appendChild(ellipse_div3);

//---Ellipse number 3 ---

let ellipse_number_3 = document.createElement("p");
ellipse_number_3.textContent = "3";
ellipse_number_3.style.color = " #999ea4";
ellipse_number_3.style.fontSize = "18px";
ellipse_number_3.style.fontWeight = "500px";
ellipse_div3.appendChild(ellipse_number_3);

//---Ellipse div 4--

let ellipse_div4 = document.createElement("div");
ellipse_div4.style.width = "53px";
ellipse_div4.style.height = "53px";
ellipse_div4.style.borderRadius = "53px";
ellipse_div4.style.background = "#262F38";
ellipse_div4.style.display = "flex";
ellipse_div4.style.alignItems = "center";
ellipse_div4.style.justifyContent = "center";
ellipse_div4.style.cursor = "pointer";
ellipse_box.appendChild(ellipse_div4);

//---Ellipse number 4 ---

let ellipse_number_4 = document.createElement("p");
ellipse_number_4.textContent = "4";
ellipse_number_4.style.color = " #999ea4";
ellipse_number_4.style.fontSize = "18px";
ellipse_number_4.style.fontWeight = "500px";
ellipse_div4.appendChild(ellipse_number_4);

//---Ellipse div 5--

let ellipse_div5 = document.createElement("div");
ellipse_div5.style.width = "53px";
ellipse_div5.style.height = "53px";
ellipse_div5.style.borderRadius = "53px";
ellipse_div5.style.background = "#262F38";
ellipse_div5.style.display = "flex";
ellipse_div5.style.alignItems = "center";
ellipse_div5.style.justifyContent = "center";
ellipse_div5.style.cursor = "pointer";
ellipse_box.appendChild(ellipse_div5);

//---Ellipse number 5 ---

let ellipse_number_5 = document.createElement("p");
// ellipse_number_5.style.cursor = "pointer";
ellipse_number_5.textContent = "5";
ellipse_number_5.style.color = " #999ea4";
ellipse_number_5.style.fontSize = "18px";
ellipse_number_5.style.fontWeight = "500px";
ellipse_div5.appendChild(ellipse_number_5);

// ----Button div--
let btn_div = document.createElement("div");
// btn_div.style.margin
btn_div.style.display = "flex";
btn_div.style.alignItems = "center";
btn_div.style.justifyContent = "center";
box.appendChild(btn_div);

//----Button--

let button = document.createElement("button");
button.style.width = "342px";
button.style.height = "45px";
button.style.borderRadius = "32px";
button.style.backgroundColor = "#FC7613";
button.style.cursor = "pointer";
button.style.border = "none";
button.style.display = "flex";
button.style.alignItems = "center";
button.style.justifyContent = "center";
btn_div.appendChild(button);

//---Button text--

let btn_text = document.createElement("h3");
btn_text.textContent = "SUBMIT";
btn_text.style.color = " #fff";
btn_text.style.fontSize = "15px";
btn_text.style.fontWeight = "700px";
btn_text.style.letterSpacing = "1.725px";
button.appendChild(btn_text);

//--- Button bosilganda chiqadi--

let show = true;
button.addEventListener("click", () => {
  show = !show;
  box_2.style.display = "block";
  box.style.display = "none";
});

//----box_2 div--

let box_2 = document.createElement("div");
box_2.style.display = "none";
box_2.style.backgroundColor = " #171E28";
box_2.style.maxWidth = "415px";
// box_2.style.height = "415px";
box_2.style.borderRadius = "30px";
box_2.style.textAlign = "center";
box_2.style.padding = `44px 40px 49px 39px`;
header_box.appendChild(box_2);

//----Img---
let illustration_img = document.createElement("img");
illustration_img.src = `./imgas/illustration.svg`;
box_2.appendChild(illustration_img);

// ----Button_2 div--

let btn_div_2 = document.createElement("div");
btn_div_2.style.display = "flex";
btn_div_2.style.alignItems = "center";
btn_div_2.style.justifyContent = "center";
btn_div_2.style.marginTop = "32px";
btn_div_2.style.marginBottom = "33px";
box_2.appendChild(btn_div_2);

//----Button 2--

let btn_2 = document.createElement("button");
btn_2.style.width = "193px";
btn_2.style.height = "32px";
btn_2.style.borderRadius = "36px";
btn_2.style.backgroundColor = "#262F38";
btn_2.style.border = "none";
btn_2.style.display = "flex";
btn_2.style.alignItems = "center";
btn_2.style.justifyContent = "center";
btn_div_2.appendChild(btn_2);

//---Button text--

let btn_text_2 = document.createElement("h3");
btn_text_2.textContent = "You selected 4 out of 5";
btn_text_2.style.color = "#FC7614";
btn_text_2.style.fontSize = "15px";
btn_text_2.style.fontWeight = "700px";
btn_text_2.style.lineHeight = "24pxpx";
btn_2.appendChild(btn_text_2);

//----h1---

let text_h1_2 = document.createElement("h1");
text_h1_2.textContent = "How did we do?";
text_h1_2.style.color = "#fff";
text_h1_2.style.fontSize = "26px";
text_h1_2.style.fontWeight = "700px";
text_h1_2.style.marginBottom = "14px";
box_2.appendChild(text_h1_2);

//----P--

let text_p_2 = document.createElement("p");
text_p_2.textContent = `We appreciate you taking the time to give a rating.If you ever need more support, don’t hesitate to get in touch!`;
text_p_2.width = "336px";
text_p_2.style.color = "#7B818D";
text_p_2.style.fontSize = "14px";
text_p_2.style.fontWeight = "500px";
text_p_2.style.lineHeight = "24px";
text_p_2.style.marginBottom = "27px";
box_2.appendChild(text_p_2);
