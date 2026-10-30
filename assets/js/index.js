// ^ Write your JavaScript code here
const myToggle=document.querySelector("#theme-toggle-button");
const rootElement=document.documentElement;
const settingsToggle =document.querySelector('#settings-toggle')
const sidebar=document.querySelector('#settings-sidebar')
const buttonCloseSidebar=document.querySelector("#close-settings")
const fontOptions =document.querySelectorAll(".font-option")
const colorOptions =document.querySelector("#theme-colors-grid")
const settingsBtn =document.querySelector("#reset-settings")
const sectionElements =document.querySelectorAll("section")
const navLinks =document.querySelectorAll(".nav-links a")
const navFilterContainer =document.querySelector("#portfolio-filters")
const filterCards =document.querySelectorAll(".portfolio-item")
const returnButton =document.querySelector("#scroll-to-top")


function toggleTheme(){
rootElement.classList.toggle("dark");
}
function openSidebar(){
    settingsToggle.style.setProperty("right","20rem")
    sidebar.classList.remove("translate-x-full")
}
function closeSidebar(){
    settingsToggle.style.setProperty('right',"0")
    sidebar.classList.add("translate-x-full")
}

function changeFont(e){
    let dataoption=e.target.closest(".font-option")
    if(dataoption){
let fontselect=dataoption.dataset.font;
document.body.classList.remove(`font-cairo`,`font-tajawal`,`font-alexandria`)
document.body.classList.add(`font-${fontselect}`)
    
for(let i=0 ; i<fontOptions.length ; i++){
    fontOptions[i].classList.add("border-slate-200" ,"dark:border-slate-700" )
fontOptions[i].classList.remove("active" ,"border-primary" ,"bg-slate-50", "dark:bg-slate-800")

if(fontOptions[i]=== document.querySelector(`button[data-font=${fontselect}]`)){
    fontOptions[i].classList.remove("border-slate-200" ,"dark:border-slate-700" )
fontOptions[i].classList.add("active" ,"border-primary" ,"bg-slate-50", "dark:bg-slate-800")
}


}
}

}


function changeColor(e){
let coloroption=e.target.closest("button")
if(coloroption){
    const primaryColor=coloroption.dataset.primary;
     const secndaryColor=coloroption.dataset.secndary;


     rootElement.style.setProperty("--color-primary",primaryColor)
     rootElement.style.setProperty("--color-secndary",secndaryColor)
     rootElement.style.setProperty("--color-accent",secndaryColor)

}
   for(let i=0 ; i<coloroption.children.length ; i++){
         coloroption.children[i].classList.remove("ring-2", "ring-primary", "ring-offset-2",
         "ring-offset-white", "dark:ring-offset-slate-900 ")
        if(coloroption.children[i]===coloroption){
 coloroption.children[i].classList.add("ring-2", "ring-primary", "ring-offset-2",
         "ring-offset-white", "dark:ring-offset-slate-900 ")
        }
   

}
}
function reset(){
    buttonCloseSidebar.click()
    fontOptions[1].click()
    colorOptions.children[0].click()
}

function scrollSpy(){

const scrollPosition =window.scrollY

let currentSectionId=""
for(let i=0 ;i<sectionElements.length ;i++){
let sectionTop =sectionElements[i].offsetTop
let sectionHeight =sectionElements[i].offsetHeight
let sectionBottom =sectionTop+sectionHeight
if(scrollPosition >= sectionTop && scrollPosition < sectionBottom ){
  
     currentSectionId = sectionElements[i].getAttribute("id")

}

if(scrollPosition>sectionElements[0].offsetHeight){
returnButton.classList.remove('opacity-0' ,'invisible')
returnButton.classList.add('opacity-100')
}

}
for(let i=0 ;i<navLinks.length ;i++){
    navLinks[i].classList.remove("active")
if(`#${currentSectionId}`==navLinks[i].getAttribute("href")){
navLinks[i].classList.add("active")
}
}


}

scrollSpy()

function Return(){
navLinks[0].click()
}
function FilterPortifilio(e){
    const clickFilter = e.target.closest('button')
    if(clickFilter){
      const  clickValue =clickFilter.dataset.filter;
      for(let i=0; i<filterCards.length;i++){
     const clickCard=filterCards[i].dataset.category;
     filterCards[i].style.opacity =0;
     filterCards[i].style.transform ="scale(0)";
     if(clickCard == clickValue || clickValue=="all"){
        setTimeout(function(){
            filterCards[i].style.opacity =1;
     filterCards[i].style.transform ="scale(1)";
        } ,50)
        filterCards[i].classList.remove("hidden" )
        // filterCards[i].classList.add("hidden" , "animate__animated" ,"fadeIn")
        // filterCards[i].classList.remove("hidden")
     }else{
        filterCards[i].classList.add("hidden" )
        // filterCards[i].classList.remove("block")
        // filterCards[i].classList.add("hidden", "animate__animated" ,"fadeOut")
     }


      }

for(let i=0; i < navFilterContainer.children.length;i++){
    
navFilterContainer.children[i].classList.remove("hover:shadow-lg" , "hover:shadow-primary/50" ,
     "active" , "bg-linear-to-r" , "from-primary" , "to-secondary" , "text-white" , "shadow-lg" ,
     "shadow-primary/50");
     navFilterContainer.children[i].classList.add("border" ,"border-slate-300" , "dark:border-slate-700" ,"dark:bg-slate-800");

     if(navFilterContainer.children[i]===clickFilter){
navFilterContainer.children[i].classList.add("hover:shadow-lg" , "hover:shadow-primary/50" , "active" ,
    "bg-linear-to-r" , "from-primary" , "to-secondary" , "text-white" , "shadow-lg" , "shadow-primary/50")
    navFilterContainer.children[i].classList.remove("border" ,"border-slate-300" , "dark:border-slate-700" ,"dark:bg-slate-800");
}
}


    }
    
}




myToggle.addEventListener("click",toggleTheme)
settingsToggle.addEventListener("click",openSidebar)
buttonCloseSidebar.addEventListener("click",closeSidebar)
for(let i=0 ; i<fontOptions.length ; i++){
    fontOptions[i].addEventListener("click", function(e){
changeFont(e)
    })

}
colorOptions.addEventListener("click",function(e){
changeColor(e)
})
settingsBtn.addEventListener("click",reset)
navFilterContainer.addEventListener("click",(e)=>FilterPortifilio(e))
returnButton.addEventListener("click",
    Return
)
window.addEventListener("scroll",scrollSpy)