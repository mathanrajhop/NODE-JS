$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();

        var Name = $("#name").val();
        var Email = $("#email").val();
        var Mobile = $("#mobile").val();
        var Location = $("#location").val();

        if((Name != '') && (Email != '') && (Mobile != '') && (Location != ''))
        {
            $.post("/ajaxdata", { Name:Name, Email:Email, Mobile:Mobile, Location:Location }, 
            function(res)
            { 
                alert(res.Output); 
                $("#form")[0].reset()
            }, "json");
        }
        else
        {
            alert('All Fields Required');
        }
    });
})