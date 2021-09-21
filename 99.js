
document.addEventListener("DOMContentLoaded", button);
function button() {
    let button = document.createElement("button");
    let btnText = document.createTextNode("sing!");
    button.appendChild(btnText);
    document.body.appendChild(button);
    
    
    document.addEventListener("click", click);
    function click() {
        for (let i = 0; i < friends.length; i++) {
           
            let div = document.createElement("div");
            
            div.className = "friend";

           
            let h3 = document.createElement("h3");
            
            let h3Text = document.createTextNode(friends[i]);
            
            h3.appendChild(h3Text);
            
            div.appendChild(h3);

            
            for (let j = 99; j > 0; j--) {
               
                let p = document.createElement("p");
                
                let pText;
                
                if (j > 2) {
                    pText = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
                } else if (j === 2) {
                    pText = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file");
                } else {
                    pText = document.createTextNode(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
                }
                
                p.appendChild(pText);
                
                div.appendChild(p);
            }

            
            document.body.appendChild(div);
        }
    }
}


let friends = ["Gerald", "Jake", "Josh", "Garrett", "Stranger"];

function sing() {
    for (let i = 0; i < friends.length; i++) {
        for (let j = 99; j > 0; j--) {
            if (j > 2) {
                console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
            } else if (j === 2) {
                console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file");
            } else {
                console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
            }
        }
    }
}
