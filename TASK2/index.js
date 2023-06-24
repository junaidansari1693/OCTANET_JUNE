var items = [];

function bblSort(arr) {
  
    for (var i = 0; i < arr.length; i++) {
   
        for (var j = 0; j < (arr.length - i - 1); j++) {
  
            if (arr[j].pr > arr[j + 1].pr) {
  
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
  
    // Print the sorted array
}



function add(){
    var item = {
         pr : document.getElementById("p").value,
         det: document.getElementById("detail").value
    }
    items.push(item);
    
    while(document.getElementById("er")){
        document.getElementById("er").remove();
    }
    bblSort(items);
    for (let i = 0; i < items.length; i++) {
        const w = document.createElement("p");
        w.setAttribute("id","er");
        w.innerText = items[i].det;
        document.body.appendChild(w);
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        w.appendChild(span);
        
    }
  
    var close = document.getElementsByClassName("close");
 
 for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
        var div = this.parentElement;
         div.style.display = "none";
    //items.remove(items[i]);

  } 
  
}
    
}

