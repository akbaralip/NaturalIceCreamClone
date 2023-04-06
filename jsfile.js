document.getElementById("popup").addEventListener("click",mypop)
function mypop(){
    document.getElementById("search").style.display="block";
}
document.getElementById("close").addEventListener("click",myclose)
function myclose(){
    document.getElementById("search").style.display="none";
}

// 
document.getElementById("openup").addEventListener("click",open)

function open(){

    if( document.getElementById("topup").style.display=="none"){
       
        document.getElementById("topup").style.display ="block";
    }else{
    
    document.getElementById("topup").style.display ="none";
    }
}