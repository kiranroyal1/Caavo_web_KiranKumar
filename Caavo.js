//let currImg = document.getElementById("i1");
if(document.readyState=="loading"){
    "use strict";
    function imgId(id) {
        let currImg = document.getElementById(id);
        let source = currImg.src;
        currImg.src='user.jpg';
        if(currImg.src==source){
            currImg.src="usertick.jpg";
        }
        else{
            currImg.src="./user.jpg";
        }
    }
    //sorting users
    let arrayUsers=["User1","User2","Raman","Mathew","James","Thomas","Senthil","Vignesh"];
    let ascendSorted=arrayUsers.sort();

    //onclick="ascend()"
    function ascend() {
        let counter=1;
        for(let i=((ascendSorted.length)-1);i>=0;i--){
            let Ustorer="U";
            Ustorer+=counter;
            document.getElementById(Ustorer).innerHTML=ascendSorted[i];
            if(counter<8){counter+=1;}
            }
        }   

    //onclick="end()"
    let descendSorted=arrayUsers.sort().reverse();
    function descend() {
        let counter2=1;
        for(let i=0;i<=((descendSorted.length)-1);i++){
            let Ustorer2="U";
            Ustorer2+=counter2;
            document.getElementById(Ustorer2).innerHTML=descendSorted[i];
            counter2+=1;
        }
    }
}