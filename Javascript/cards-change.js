function changeDiv(curr_val) {

    console.log("Changing to section: " + sectionId);
    console.log("curr val value: " + curr_val==='game-dev-projects');


    var sections = document.querySelectorAll('.container');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    if (curr_val==='game-dev-projects')
    {
        document.getElementById("game-dev-projects").style.display = "block";
    }
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