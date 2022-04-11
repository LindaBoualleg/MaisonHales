console.log("hello")
const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");

const q1= document.querySelector(".q1");
const q2= document.querySelector(".q2");
const q3= document.querySelector(".q3");

const survey= document.querySelector(".survey");
const end= document.querySelector(".end");



var choice1;
var choice2;
var choice3;

function option2(el){
    choice2=el.getAttribute('value')
    console.log(choice2)
}


function option3(el){
     choice3=el.getAttribute('value')
    console.log(choice3)
}

function option1(el){
    var elem=document.createElement('img');
    elem.setAttribute('height','300px')
    elem.setAttribute('width','300px')
    choice1=el.getAttribute('value');
    console.log(choice1)
    if(choice1=='normal'){
        elem.src='normal.webp'
        document.querySelector('.recommend').appendChild(elem)
    }
    if(choice1=='sensitive'){
        elem.src='sensitive.jfif'
        document.querySelector('.recommend').appendChild(elem)
    }
    if(choice1=='dry'){
        elem.src='dry.jfif'
        document.querySelector('.recommend').appendChild(elem)
    }
    if(choice1=='oily'){
        elem.src='oily.jfif'
        document.querySelector('.recommend').appendChild(elem)
    }

}



ul_1.addEventListener("click",function(){
    q1.style.display="none";
    q2.style.display="block";
})

ul_2.addEventListener("click",function(){
    q2.style.display="none";
    q3.style.display="block";
})


ul_3.addEventListener("click",function(){
    q3.style.display="none";
    survey.style.display="none"
    end.style.display="inline-block";
})

  



