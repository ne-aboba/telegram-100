const cloc = document.getElementById('часы');

function time_html() {
    let time_2 = Date.now();
    let time = (time_2 - (time_2 % 1000)) / 1000;
    let sek = String(time % 60);
    time = (time - sek) / 60;
    let min = String(time % 60);
    time = (time - min) / 60;
    let hour = String(time % 24);
    time = (time - hour) / 24;

    sek = zero(sek);
    min = zero(min);
    hour = zero(hour);

    let input = hour + ':' + min + ':' + sek;
    return input;
}

function zero(a) {
    if (a.length == 1){
        a = '0' + a;
    }
    return a;
}

function update() {
    cloc.innerText = time_html();
}
setInterval(update, 1000);