document.body.onload = addElement;

function addElement() {
    const newDiv=document.createElement("div");
    newDiv.id="hell"
    newDiv.innerHTML="Are You Ready!";
    document.body.appendChild(newDiv);
}
calbackhell();

function calbackhell() {
    let count=10;
    setTimeout(function () {
        document.getElementById('hell').innerText = count--;
        setTimeout(function () {
            document.getElementById('hell').innerText =count--;
            setTimeout(function(){
                document.getElementById('hell').innerText =count--;
                setTimeout(function () {
                    document.getElementById('hell').innerText =count--;
                    setTimeout(function () {
                        document.getElementById('hell').innerText =count--;
                        setTimeout(function () {
                            document.getElementById('hell').innerText =count--;
                            setTimeout(function () {
                                document.getElementById('hell').innerText =count--;
                                setTimeout(function () {
                                    document.getElementById('hell').innerText = count--;
                                    setTimeout(function () {
                                        document.getElementById('hell').innerText = count--;
                                        setTimeout(function () {
                                            document.getElementById('hell').innerText = count--;
                                            setTimeout(function () {
                                                document.getElementById('hell').innerText = "Happy New Year";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}