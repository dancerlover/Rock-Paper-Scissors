function rand(){
    var image=document.getElementById("c-hand");
    var arr=["scissors.png","paper.png","rock.png"]
    var rand=Math.floor(Math.random()*3)
    image.src=arr[rand]
    return rand
}

var p1=0;
var p2=0;
function rock(){
    var image=document.getElementById("p-hand");
    image.src="rock.png"
    var res=rand()
    if(res==0){
        console.log(res)
        document.getElementById("p1").innerHTML=p1++;
    }if(res==1)
    {
        document.getElementById("p2").innerHTML=p2++;
    }
    if(res==2)
    {
        document.getElementById("p1").innerHTML=p1;
        document.getElementById("p2").innerHTML=p2;
    }
    fun();
}
function paper(){
    var image=document.getElementById("p-hand");
    image.src="paper.png"
    var res=rand()
    if(res==0){
        // console.log(res)
        document.getElementById("p2").innerHTML=p2++;
    }if(res==1)
    {
        document.getElementById("p1").innerHTML=p1;
        document.getElementById("p2").innerHTML=p2;
    }
    if(res==2)
    {
        document.getElementById("p1").innerHTML=p1++;
        // document.getElementById("p2").innerHTML=p2;
    }
    fun();
}
function sic(){
    var image=document.getElementById("p-hand");
    image.src="scissors.png"
    var res= rand()
    if(res==0){
        // console.log(res)
        document.getElementById("p1").innerHTML=p1;
        document.getElementById("p2").innerHTML=p2;
    }if(res==1)
    {
        document.getElementById("p1").innerHTML=p1++;
    }
    if(res==2)
    {
        // document.getElementById("p1").innerHTML=p1;
        document.getElementById("p2").innerHTML=p2++;
    }
    fun();
}
console.log(p1);
function fun()
{
    // if(p1==10)
    // {console.log("hello")
    //     document.getElementById("h2").innerHTML="tie";
        
    // }
    if(p1==10)
    {
       document.getElementById("h2").innerHTML="player1 win!!";
       setTimeout(() => {
        window.location.href = "index.html";
       }, 4000);
    }
    if(p2==10)
    {
       document.getElementById("h2").innerHTML="player2 win!!";
       setTimeout(() => {
        window.location.href = "index.html";
       }, 4000);
    }
}
