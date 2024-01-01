let btn=document.querySelector(".play_btn");
let vid=document.querySelector("iframe");
let imgs=document.querySelector(".media_box img");
btn.addEventListener("click",()=>{
        imgs.style.display="none";
        btn.style.display="none";
        vid.style.display="block";
})

let addbtn=document.querySelector(".add");
let subbtn=document.querySelector(".sub");
let navtwo=document.querySelector(".two_nav");
addbtn.addEventListener("click",()=>{
                navtwo.style.display="block";
                addbtn.style.display="none";
                subbtn.style.display="block";
})

subbtn.addEventListener("click",()=>{
            navtwo.style.display="none";
            subbtn.style.display="none";
            addbtn.style.display="block";
                    
})


let menubtn=document.querySelector(".menu");
let navlist=document.querySelector(".nav_list");
let menubar=document.querySelector(".menu_bar");
let ab=0;
menubtn.addEventListener('click',()=>{
        if(ab==0){
                navlist.classList.toggle("active");
                menubar.style.color="white";
                menubtn.style.color="white";
                ab=1;
        }else{
           menubar.style.color="black";
           navlist.classList.remove("active");
           ab=0;
           menubtn.style.color="black";
        }
      
})