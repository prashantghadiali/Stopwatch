var start = document.getElementById("start");
var Stop = document.getElementById("stop");
var reset = document.getElementById("reset");
let counter = document.getElementById("counter");


start.addEventListener("click",() =>{
    console.log('pressed start');
    let cnt = 00;
    let mcnt = 0;
    var Timer = setInterval(() => {
        cnt++
        counter.innerHTML = mcnt  + ' : ' + cnt;
        if(cnt == 60){
            cnt = 0;
            mcnt += 1;
            counter.innerHTML = mcnt + " : " + cnt;
        }
    }, 1000);
    Stop.addEventListener("click", () =>{
        console.log('pressed stop');
        clearInterval(Timer);
    });
});

reset.addEventListener("click", () =>{
    console.log('pressed reset');
    window.location.reload();
})



