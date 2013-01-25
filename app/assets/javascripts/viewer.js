(function($)
    {
        var message = '', msg = 'empty', getid = 'error_msg', getclass = 'error';
        var base_html = "<div class='overlay'>  </div>\n\
                         <div class='pop_content'>\n\
                         <a class='icon-remove-sign close'> </a> <div id='pop_up'> </div> </div>";
        $.viewer = $.fn.viewer = function(options)
        {
            var settings = $.extend({},
            {
                message: '',
                type: 'info',
                side: 'right'
            }, options);

            if(this.jQuery == undefined)
                content = settings.message;
            else
                content = $(this).html();
            $("body").append(base_html);
            $("#pop_up").append(content);

            $(".icon-remove-sign").live("click", function(e)
            {
                //$(".pop_content").animate('slow');
                $(this).hide();
                alert(e.pageX);
                $('.pop_content').animate(
                {
                    width: 0,
                    height: 0,
                    top: 300
                });
                hide_popup();
            });

            function hide_popup()
            {
                setTimeout(function()
                {
                    $(".pop_content, .overlay").remove();
                }, 1000);
            }
        }
    })(jQuery);