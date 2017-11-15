(function () {
    
    let array = [];
    let initialize = false;
    let commands = {
       

    };

    let console = document.getElementById("console");
    let input = document.getElementById("input");
    document.getElementById("submit").addEventListener("click", submit);
    input.addEventListener("keypress", (e) => e.code === "Enter" ? submit() : "");

    function submit() {
        
    }

    function consoleWrite() {
        console.value += array.join(" ") + "\n";
    }

    function errorWrite(msg) {
        console.value += msg + "\n";
    }
})();

