function hidePictur() {
    var num = 1;
    if (num!=1){
        console.log("what the heck")
    }
    
    document.getElementById("pic").style.visibility = "hidden";
    document.getElementById("hidebtn").style.visibility = "hidden";
   
}
function displayPic(){
    document.getElementById("pic").style.visibility="visible";
    document.getElementById("hidebtn").style.visibility="visible";
}
