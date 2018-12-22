setTimeout(function() {
  siteWelcome.classList.remove("active");
}, 1500);

window.onscroll = function() {
  if (scrollY > 0) {
    topNavBar.classList.add("sticky");
  } else {
    topNavBar.classList.remove("sticky");
  }
};

//let liTags = document.getElementsByClassName("menuTrigger")
let liTags = document.querySelectorAll("nav.menu > ul > li");
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onmouseenter = function(sgs) {
    sgs.currentTarget.classList.add("active");
  };
  liTags[i].onmouseleave = function(sgs) {
    sgs.currentTarget.classList.remove("active");
  };
}

let aTags = document.querySelectorAll("nav.menu > ul > li > a");
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function(sgs) {
    sgs.preventDefault();
    let a = sgs.currentTarget;
    let href = a.getAttribute("href");
    let element = document.querySelector(href);
    let top = element.offsetTop;
    window.scrollTo(0, top - 200);
  };
}
/*
以下代码会导致一个问题：鼠标从a标签移走后，子菜单会消失，说明监听错误。
此时把class="menuTrigger"从ul移到父级li，代码见上
let aTags = document.getElementsByClassName("menuTrigger"); //s s aTags Elements 因为要获取多个以及遍历
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onmouseenter = function(sgs) {
    let a = sgs.currentTarget; // sgs.target是用户操作的元素 sgs.currentTarget是监听的元素 在onclick时会不同 这里相同
    let b = a.nextSibling;
    while (b.tagName !== "UL") {
      b = b.nextSibling; //寻找下一节点 如果两者之间只有一个回车符 用while(b.nodeType ===3 标签名要大写 UL A LI)
    } //用while循环的好处是可以以此寻找多个节点，直到找到为止
    b.classList.add("active");
  };
  aTags[i].onmouseleave = function(sgs) {
    let a = sgs.currentTarget; 
    let b = a.nextSibling;
    while (b.tagName !== "UL") {
      b = b.nextSibling; 
    } 
    b.classList.remove("active");
  };
}*/
portfolio1.onclick = function() {
  portfolioBar.className = "bar state-1";
};
portfolio2.onclick = function() {
  portfolioBar.className = "bar state-2";
};
portfolio3.onclick = function() {
  portfolioBar.className = "bar state-3";
};
