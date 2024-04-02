$(".software").on('click',function(){
    var software_div = $("software-projects").css("display")

    alert('Hello world: ' + software_div);
    
    if (software_div === "none")
    {
        software_div.css("display","block")
    }
});