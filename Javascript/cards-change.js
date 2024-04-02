function changeDiv(curr_val) {

    console.log("curr val value: " + curr_val==='game-dev-projects');
    console.log("before game dev section style: " + document.getElementById("game-dev-projects").style.display);

    var sections = document.querySelectorAll('.container');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    if (curr_val==='game-dev-projects')
    {
        document.getElementById("game-dev-projects").style.display = "block";
    }

    console.log("after game dev section style: " + document.getElementById("game-dev-projects").style.display);

}

// const curr_div = document.querySelector(".software");

// $(".software").on('click',function(){
//     var software_div = $("software-projects").css("display")

//     alert('Hello world: ' + software_div);
    
//     if (software_div === "none")
//     {
//         software_div.css("display","block")
//     }
// });