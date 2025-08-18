$('body')
    .append(
        $('<h1>').text('Todo List').addClass('heading')
    )
    .append(

        $('<div>')
        .addClass('inputDetails')
            .append(
                $('<input>')
                .attr('type', 'text')
                .attr('placeholder', 'Enter Text')
                .addClass('newTask')
            )
            .append(
                $('<button>')
                .text('Add Task')
                .addClass('btn')
                .click(ev => {
                    if ($('.newTask').val().trim() != '') {
                        $('.taskList')
                        .append(
                            $('<li>')
                                .addClass('task')
                                .text(
                                    $('.newTask').val()
                                )
                                .append(
                                    $('<div>')
                                    .addClass('btngrp')
                                        .append(
                                            $('<button>').text('⬆').addClass('upBtn')
                                        )
                                        .append(
                                            $('<button>').text('⬇').addClass('downBtn')
                                        )
                                        .append(
                                            $('<button>').text('❌').addClass('deleteBtn')
                                        )
                                )
                        )
                        $('.newTask').val('')
                    }
                })
            )
    )

    
    .append(
        $('<ul>').addClass('taskList')
        .click(ev=>{
            if ($(ev.target).hasClass('upBtn')) {
                $(ev.target).parent().parent()
                .insertBefore($(ev.target).parent().parent().prev())
            }

            else if ($(ev.target).hasClass('downBtn')) {
                $(ev.target).parent().parent()
                .insertAfter($(ev.target).parent().parent().next())
            }

            else if ($(ev.target).hasClass('deleteBtn')) {
                $(ev.target).parent().parent().remove()
            }
        })
    );
