const title = document.querySelector(".hello:first-child h1"); // 클래스명이 hello인 요소 중 첫 번째 h1

function handleTitleClick(){
title.style.color = "blue";
} //color 변경

function handleMouseEnter(){
title.innerText = "mouse is here!";
} 

function handleMouseLeave(){
title.innerText = "mouse is gone!";
}

title.addEventListener("click",handleTitleClick); // click하면 handleTitleClick()function 실행
title.addEventListener("mouseenter", handleMouseEnter); // 마우스를요소 위에 올려놓으면 handleMouseEnter()function 실행
title.addEventListener("mouseleave", handleMouseLeave); // 마우스를 요소 위에 없으면 handleMouseLeave()function 실행
