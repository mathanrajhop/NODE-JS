$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();

        var Name = $("#name").val();
        var Email = $("#email").val();
        var Mobile = $("#mobile").val();
        var Location = $("#location").val();

        if((Name != '') && (Email != '') && (Mobile != '') && (Location != ''))
        {
            $.post("http://localhost:3000/ajaxdata", { Name:Name, Email:Email, Mobile:Mobile, Location:Location }, 
            function(res)
            { 
                alert(res.Output); 
                $("#form")[0].reset();
                var rowCount = $('#myTable >tbody >tr').length;
                var AddRow = Number(rowCount) + 1 ;
                $('#myTable').append('<tr><td scope="row"><b>'+AddRow+'</b></td><td>'+Name+'</td><td>'+Email+'</td><td>'+Mobile+'</td><td>'+Location+'</td><td><a><i class="fa fa-edit"></i></a> &nbsp; <a><i class="fa fa-trash"></i></a> </td></tr>');
            }, "json");
        }
        else
        {
            alert('All Fields Required');
        }
    });
})
