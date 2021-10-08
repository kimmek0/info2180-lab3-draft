onload=function(){
    const player1='X'; // wont change
    const player2='O'; //wont change
    var array=[];
    let player_current;
    var get_squares=document.getElementById('board').getElementsByTagName('div');
    var stat=document.getElementById('status')
    var len=get_squares.length;
    for(let i=0;i<len;i++){
        get_squares[i].className+=('square');
        get_squares[i].addEventListener('click',function(){
            
            getplayer()
            function getplayer(){
                if(player_current===player1){
                    player_current=player2;
                    document.getElementById('board').getElementsByTagName('div')[i].className+=(' O');
                }
                else{
                    player_current=player1;
                    document.getElementById('board').getElementsByTagName('div')[i].className+=(' X');
                }
                array.push(get_squares[i].innerHTML=player_current);
              
                checkwinner();
                function checkwinner(){
                    let pos0=get_squares[0].innerHTML;
                    let pos1=get_squares[1].innerHTML;
                    let pos2=get_squares[2].innerHTML;
                    let pos3=get_squares[3].innerHTML;
                    let pos4=get_squares[4].innerHTML;
                    let pos5=get_squares[5].innerHTML;
                    let pos6=get_squares[6].innerHTML;
                    let pos7=get_squares[7].innerHTML;
                    let pos8=get_squares[8].innerHTML;
                    
                    if (pos0!=='' && pos0==pos1 && pos0==pos2){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    if(pos3==pos4 && pos3==pos5 && pos3!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    if(pos6==pos7 && pos6==pos8 && pos6!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    if(pos0==pos4 && pos0==pos8 && pos4!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    if(pos2==pos4 && pos2==pos6 && pos2!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    if(pos0==pos3 && pos0==pos6 && pos0!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    if(pos1==pos4 && pos1==pos7 && pos7!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                    if(pos2==pos5 && pos2==pos8 && pos2!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                    }
                }
            }

        },{once:true});
        get_squares[i].addEventListener("mouseover", event => {
            get_squares[i].className+=(' hover');
        });
        get_squares[i].addEventListener("mouseleave", event => {
            get_squares[i].classList.remove('hover');
       });
    }  
    document.querySelector('button').addEventListener('click',function(){
        location.reload();
    })
}            