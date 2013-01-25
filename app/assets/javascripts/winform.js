/*
 Author Md Naim Rajib
 Nascenia It Limited,
 Copy right 2013, naim@nascenia.com.
 */

(function($)
{
    var message = '', msg = 'empty', getid = 'error_msg', getclass = 'error';
    $.winform = $.fn.winform = function(options)
    {
        var settings = $.extend({},
        {
            title: " Message",
            model: false,
            message: '',
            height: '',
            id: '',
            klass: '',
            type: 'error'
        }, options);
            
        var move = false;
        overlay = "<div class='overlay'> </div>";
        top_header = "<div class='tophead "+ settings.type +"_msg'> <i class='icon-"+settings.type+"'> </i> "+ settings.type + settings.title +" <i title='close' class='icon-remove right close'> </i> <i title='Fullscreen' class='icon-fullscreen right'> </i> <i title='Minimize' class='icon-minimize right'> </i> </div>";
        if (this.jQuery != undefined) {
            element = $(this);
            getclass = element.hasClass() ? element.attr('class')  : '';
            getid = element.attr('id');
            msg = element.html()
        }

        if(settings.id.length > 1 || settings.klass.length > 1)
        {
            id_msg = $("#"+settings.id).html() != null ? $("#"+settings.id).html() : '';
            class_msg = $("#"+settings.klass).html() != null ? $("#"+settings.klass).html() : '';
            msg = id_msg + class_msg;
        }
            
        header = $(".tophead");
        message = settings.message.length > 1 ? settings.message : msg;
        content = top_header + "<div class='elt_content'>" + message + "</div>";
        elert = "<div id="+getid+" class='wrap "+getclass+"' style=height:"+ settings.height +">" + content + "</div>";
        $('body').append(overlay + elert);
                
        header.live("mousedown", function(){
            $(this).css("cursor", "move");
            move = true;
        });

        form = $(".wrap");

        header.live("mousemove", function(e)
        {
            if(move)
            {
                form.css("position", "absolute");
                elementwidth = form.width;
                elementhiehgt = form.height;
                console.log(form.width());
                mouseleft = (e.pageX + elementwidth)
                tempX = e.pageX - 150;
                tempY = e.pageY - 20;
                form.css("left", tempX);
                form.css("top", tempY);
            }
        });

        header.live("mouseup", function()
        {
            $(this).css("cursor", "default");
            move = false;
        });
                
        $('.overlay').live('click', function()
        {
            if(!settings.model)
            {
                $(".wrap").remove();
                $(".overlay").remove();
            }
        });
    };

    $("i.close").live('click', function()
    {
        $(".wrap").remove();
        $(".overlay").remove();
    });

    $("i.icon-fullscreen").live('click', function()
    {
        $(".wrap").addClass("full-screen");
        $(this).removeClass("icon-fullscreen");
        $(this).addClass("icon-stop");
    });

    $("i.icon-stop").live('click', function()
    {
        $(".wrap").removeClass("full-screen");
        $(this).removeClass("icon-stop");
        $(this).addClass("icon-fullscreen");
    });

    $("i.icon-minimize").live('click', function()
    {
        $(this).parent().next().css('display', 'none');
        $(".wrap").addClass("minimize");
        $(this).removeClass("icon-minimize");
        $(this).addClass("icon-original");
        $('.overlay').hide();
    });

    $("i.icon-original").live('click', function()
    {
        $(this).parent().next().css('display', 'block');
        $(".wrap").removeClass("minimize");
        $(this).removeClass("icon-original");
        $(this).addClass("icon-minimize");
        $('.overlay').show();
    });

})(jQuery);