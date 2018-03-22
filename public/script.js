$(document).ready(function () {

    $('#inputKeyword').change(function () {
        var $this = $(this);
        $('#Book').hide();
        $.get('/api/books', {
            keyword: $this.val(),
        }).then(renderBooks)
    });

   /* $('#edit').click(function () {
        var id = $("#id").val();
        ajaxCall('/update/'.concat(id),'POST', {
            title        : $("#title").val(),
            author       : $("#author").val(),
            publisher_id : $("#publisher_id").val(),
            price        : $("#price").val()
        }).then(function (value) {
            console.log(value);
        })
    });*/
    $("#edit").click(function () {
        var id = $("#id").val();
        $.ajax('/update/'.concat(id), {
            method:"POST",
            data  : {
                title        : $("#title").val(),
                author       : $("#author").val(),
                publisher_id : $("#publisher_id").val(),
                price        : $("#price").val()
            }
        }).then(function (value) {
            console.log(value);
        })
    });
    $("#post").click(function () {

        $.post('/book',{
            title  : $("#title").val(),
            author : $("#author").val(),
            publisher_id : $("#publisher_id").val(),
            price : $("#price").val(),
        }).then(renderBooks);
    });
    /*$('#title').change(function () {
        $.get("/search-title", {
            title : $("#title").val()
        }).then(function (title) {
            if (!title.length){
                $('p').text("");
            }else {
                $('p').text("Title Already Taken !");
            }
            console.log(title);
        })
    });*/
    $('#delete').click(function () {
        var id = $("#id").val();
        return $.get('/delete/'.concat(id)).then(function (value) {
            console.log(value);
        })
    });
    $("#formSearchAdvance").click(function () {
        $("#formAdvance").toggle()
    });
    $("#testEvent").click(function (event) {
        event.preventDefault();
    });
    $("#searchAdvance").click(function (event) {
        event.preventDefault();
        $('#Book').hide();
        $.get('/search-advance', {
            title : $("#title").val(),
            author: $("#author").val(),
            publisher: $("#publisherName").val()
        }).then(renderBooks)
    });
    $("#title").keyup(function () {
        $.get('/search-title', {
            title : $("#title").val()
        }).then(function (value) {
            if (value.length) {
                $('p').text("Title Already Taken !")
            }
            else {
                $('p').text("")
            }
        })
    });
    $('p').click(function (event) {
        alert(event.currentTarget=== this);
    })
});
function renderBooks(books) {
    var template = $('#bookTemplate').html();
    var resultsHtml = books.map(function (book) {
        return template.replace(':bookName:', book.title).replace(':id', book.id)
    }).join('');
    $('#listBooks').html(resultsHtml);
}

/*
function ajaxCall(url, method, data) {
    return $.ajax({
        url:url,
        method : method,
        data : data
    });
}*/
