let screen = document.getElementById("screen");

function input(x) {
  screen.value = screen.value + x;
}

function allClear() {
  screen.value = " ";
}

function del() {
  screen.value = screen.value.slice(0, -1);
}


function calculation(){
    try{
        screen.value = eval(screen.value)
    }
    catch{
        screen.value = "Math Error"
    }
    
}