function Console()
{
    this.init = function()
    {
        $('<div class="console_container"></div>').appendTo( document )
    }

    this.start = function()
    {
        window.bashjs.console = bashjs_console;
        //loading_css
        bashjs.load_css( '/css/console.css' );
    }
}

var bashjs_console = new Console();
bashjs_console.start();
