const inputBox=document.getElementById("ele");
const listCon=document.getElementById("listcon");
function add(){
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listCon.append(li);
        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value='';
    set();
}

listCon.addEventListener('click' , (e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("check");
        set();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        set();
    }
});

function set(){
    localStorage.setItem("data" , listCon.innerHTML);
}
function show(){
    listCon.innerHTML=localStorage.getItem('data');
}
show();