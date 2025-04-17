const inputbox=$("#input-box");
const tasks=$("#tasks")

$("#btn").click(()=>{
    let inputVal = inputbox.val().trim();
    if (inputVal === "") return;
    var newtask=$("<li>"+inputbox.val()+"</li>");
    tasks.append(newtask);
    inputbox.val("");
    let span=$("<span>\u00d7</span>");
    span.addClass("close");
    newtask.append(span);
    
    
    saveData();
});

//use delegated events
tasks.on("click", ".close", function () {
    $(this).parent().remove();
    saveData();
});

tasks.on("click", "li", function (e) {
    if (!$(e.target).hasClass("close")) {
        $(this).toggleClass("checked");
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",tasks.html());
}

function showTask() {
    let saved = localStorage.getItem("data");
    if (saved) {
        tasks.html(saved);
    } else {
        tasks.html(""); // Prevents "null" from being inserted
    }
}

showTask();