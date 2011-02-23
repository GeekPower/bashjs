function Console()
{
    this.console_id = 'console_container';

    this.init = function()
    {
        $('<div class="console_container" id="' + this.console_id + '"></div>').appendTo( $('body') );
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
