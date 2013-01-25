(function($)
    {
        var message = '', msg = 'empty', getid = 'error_msg', getclass = 'error';
        $.fn.tips = function(options)
        {
            return this.each(function()
            {
                var settings = $.extend({},
                {
                    message: '',
                    type: 'info',
                    side: 'right'
                }, options);
                $(this).hover(
                    function()
                    {
                        $(this).append("<div class='tip "+settings.type+"'>" +settings.message+ "</div>");
                        topy = $(".tip").height()/2;
                        $(".tip").css({
                            top: -topy,
                            "float": settings.side
                            });
                    }
                    , function()
                    {
                        $(this).children(".tip").remove();
                    });
            });
        }
    })(jQuery);