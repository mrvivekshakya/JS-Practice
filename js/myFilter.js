function readFile(cb) {
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "../test_data.json", true); // get json file.
    oXHR.send();
    function reportStatus() {
        if (oXHR.readyState == 4) {
            cb(this.responseText);
        } else {
            cb(null);
        }
    }

}
function cb(res){
    //document.getElementById('myDiv').innerHTML = res;
    var ar = JSON.parse(res);
    document.getElementById('myDiv').innerHTML = ar[0].salary;

}

document.getElementById("btn").addEventListener("click", readFile(cb));
//var myBtn = document.getElementById('btn');
//myBtn.addEventListener('click',readFile(cb));
//readFile(cb);
//const button = document.getElementById('btn');
//button.addEventListener('click',readFile(cb));

/*function filterRecords() {
    readFile(function (data) {
        console.log(data)
    })
}*/