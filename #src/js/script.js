$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});


$("#formValidation").validate({
    rules: {
        name: {
            minlength: 2
        },
        surname: {
            minlength: 2
        },
        email: {
            email: true
        },
        subject: {
            minlength: 3
        },
        question: {
            minlength: 3
        }
    },
    messages: {
        name: {
            required: "Please, enter your name",
            minlength: jQuery.validator.format("At least 2 characters are necessary")
        },
        surname: {
            required: "Please, enter your surname",
            minlength: jQuery.validator.format("At least 2 characters are necessary")
        },
        email: "Please, enter your email",
        subject: "Please, enter your subject",
        question: "Please, enter your question"
    },

    submitHandler: function(form) {
      form.submit();
    }
});
