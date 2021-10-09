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
              
                winnercheck();
                function winnercheck(){
                    let cor0=get_squares[0].innerHTML;
                    let cor1=get_squares[1].innerHTML;
                    let cor2=get_squares[2].innerHTML;
                    let cor3=get_squares[3].innerHTML;
                    let cor4=get_squares[4].innerHTML;
                    let cor5=get_squares[5].innerHTML;
                    let cor6=get_squares[6].innerHTML;
                    let cor7=get_squares[7].innerHTML;
                    let cor8=get_squares[8].innerHTML;
                    
                    if (cor0!=='' && cor0==cor1 && cor0==cor2){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";
                        
                        //reloads game if player wins before all boxes are marked
                   //     document.querySelector('get_squares[0:8]').addEventListener('click',function(){
                     //       location.reload();
                       // })
                    }
                    if(cor3==cor4 && cor3==cor5 && cor3!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";

                   //     document.queryselector('get_squares[0:8]').addEventListener('click',function(){
                     //       location.reload();
                       // })
                    }
                    if(cor6==cor7 && cor6==cor8 && cor6!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";

                    //    document.queryselector('get_squares[0:8]').addEventListener('click',function(){
                      //      location.reload();
                        //})
                    }
                    if(cor0==cor4 && cor0==cor8 && cor4!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";

                  //      document.queryselector('get_squares[0:8]').addEventListener('click',function(){
                    //        location.reload();
                      //  })
                    }
                    if(cor2==cor4 && cor2==cor6 && cor2!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";

                   //     document.queryselector('get_squares[0:8]').addEventListener('click',function(){
                     //       location.reload();
                       // })
                    }
                    if(cor0==cor3 && cor0==cor6 && cor0!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";

                    //    document.queryselector('get_squares[0:8]').addEventListener('click',function(){
                      //      location.reload();
                        //})
                    }
                    if(cor1==cor4 && cor1==cor7 && cor7!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";

                      //  document.queryselector('get_squares[0:8]').addEventListener('click',function(){
                        //    location.reload();
                       // })
                    }
                    if(cor2==cor5 && cor2==cor8 && cor2!==''){
                        stat.textContent="Congratulations! "+array[array.length-1]+" is the Winner!";
                        stat.className+="you-won";

                      //  document.queryselector('get_squares[0:8]').addEventListener('click',function(){
                       //     location.reload();
                       // })
                    }
                    if(cor0!==''&&cor1!=='' && cor2!==''&&cor3!=='' && cor4!==''&&cor5!==''&&cor6!==''&&cor7!==''&&cor8!=='')
                    {
                        stat.textContent="It is a Draw!";
                        stat.className+="you-won";

                        //document.queryselector('get_squares[0:8]').addEventListener('click',function(){
                          //  location.reload();
                       // })
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