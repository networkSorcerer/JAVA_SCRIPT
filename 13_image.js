let num =0;
window.onload = function() {
    let image = document.querySelectorAll('.imageChoice');
    image.forEach((target)=> target.addEventListener("click", function(){
        let image = document.getElementById("target");
        image.src = this.src;
    }));

    setInterval(function(){
        num = (num%3)+1;
        document.getElementById("imgView").src ="/htmlexample/basic/images/" +num+".jpg"
    }, 1000);
}