function Console()
{
    this.init = function()
    {
        $('<div class="console_container">Hello</div>').appendTo( $('body') );
        alert( $('body').html() );
    }

    this.start = function()
    {
        window.bashjs.console = bashjs_console;
        //loading_css
        bashjs.load_css( '/css/console.css' );

        this.init();
    }
}

var bashjs_console = new Console();
bashjs_console.start();
