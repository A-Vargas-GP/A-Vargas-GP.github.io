function changeDiv(curr_val) {
    var sections = document.querySelectorAll('.container');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    document.getElementById(curr_val).style.display = "block";
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