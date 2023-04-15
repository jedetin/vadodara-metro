class Station {
    constructor(type) {
        this.type = type;
    }
    getValue(e) {
        return e.value
    }
    getNamee(e) {
        return e.options[e.selectedIndex].text;
    }
}

function getColor(m, n) {
    t = ''
    if (m[0] =='R' && n[0] == 'R') {
        t = `<i class='fa fa-circle text-danger'></i>—————<i class='fa fa-circle text-danger'></i>`
    }
    else if (m[0] =='B' && n[0] == 'B') {
        t = `<i class='fa fa-circle text-primary'></i>—————<i class='fa fa-circle text-primary'></i>`
    }
    else if(m[0] =='R' && n[0] == 'B') {
        t = `<i class='fa fa-circle text-danger'></i>——<i class='fa fa-circle text-secondary'></i>——<i class='fa fa-circle text-primary'></i>`
    }
    else if (m[0] =='B' && n[0] == 'R') {
        t = `<i class='fa fa-circle text-primary'></i>——<i class='fa fa-circle text-secondary'></i>——<i class='fa fa-circle text-danger'></i>`
    }
    return t;
}

function calcFare(t) {
    //t = Math.abs(e - y)
    k = 0
    if (t < 3) { k = 20; }
    else if (t < 5 && t >= 3) { k = 30; }
    else if (t < 7 && t >= 5) { k = 40; }
    else if (t < 10 && t >= 7) { k = 50; }
    else if (t < 15 && t >= 10) { k = 60; }
    else if (t > 15) { k = 70; }
    return k;
}

function getFare() {
    // let src = new Station("srcStn")
    let src = document.getElementById("srcStn")
    let dest = document.getElementById("destStn")
    let srcval = src.value;
    let destval = dest.value;
    let srcname = src.options[src.selectedIndex].text;
    let destname = dest.options[dest.selectedIndex].text;

    let cost = 0
    if (srcval[0] == destval[0]) {
        cost = calcFare(Math.abs(stations[srcval]) + Math.abs(stations[destval]))
    }
    else {
        cost = calcFare(Math.abs(stations[srcval] - stations[destval]))
    }


    let divele = ''
    divele += `<h3 class='fw-bold'>${srcname} &mdash; ${destname}  </h3>
    ${getColor(srcval,destval)} <br/> Total Fare: ₹ ${cost}`
    document.getElementById("modalOutput").innerHTML = divele;
    // return console.log(x)
}
