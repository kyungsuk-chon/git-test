function posting(){
//    alert("안녕!");
    let writer = $('#writer').val()
    let title = $('#title').val()
    let content = $('#content').val()

    $.ajax({
        type:"POST",
        url : /post,
        data:{writer_give : writer, title_give : title, content_give : content}
    })
}