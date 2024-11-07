function q1 () {
    let q1Input = document.getElementById("q1Input").value;
    q1Output = q1Input % 2;
    if(q1Output ==0 ) {
        document.getElementById("q1Output").innerHTML = "Even";
    }
    else {
        document.getElementById("q1Output").innerHTML = "Odd";
    }

}

function q2 () {
    let q2Input1 = document.getElementById("q2Input1").value;
    let q2Input2 = document.getElementById("q2Input2").value;
    let q2Input3 = document.getElementById("q2Input3").value;
    
    if (q2Input1 >= q2Input2 && q2Input1 >= q2Input3) {
        q2Output = q2Input1;
    }
    else if (q2Input2 >= q2Input1 && q2Input2 >= q2Input3) {
        q2Output = q2Input2;
    }
    else {
        q2Output = q2Input3;
    }
    document.getElementById("q2Output").innerHTML = q2Output;
    
}



function q3 () {
    let q3Input = parseFloat(document.getElementById("q3Input").value);
    let n1 = 0;
    let n2 = 1;
    let q3Output = "";

    for (let i = 0; i <= q3Input; i++) {
        console.log(q3Output);
        q3Output = n1 + n2;
        n1=n2;
        n2 = q3Output;
    }
    document.getElementById("q3Output").innerHTML += q3Output;

}



function q4 () {
    
}