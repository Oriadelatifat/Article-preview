document.addEventListener("DOMContentLoaded",function(){
    const shareButton = document.getElementById("svg");
    const shareBox = document.getElementById("list");
    shareButton.addEventListener("click",function(){
        if(shareBox.style.display==="block"){
            shareBox.style.display="none";
        }
        else{
            shareBox.style.display="block";
        }
    });
    document.addEventListener("click",function(){
        if(!shareButton.contains(event.target)&& !shareBox.contains(event.target)){
            shareBox.style.display="none";
        }

    });
});