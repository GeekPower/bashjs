function Console()
{
    this.console_id = 'console_container';
    this.console_text = 'console_text';
    this.console_input = 'console_input';

    this.init = function()
    {
        // Add the container for the console
        $('<div class="console_container" id="' + this.console_id + '"></div>').appendTo( $('body') );

        // Where the text will be displayed
        $('<div class="console_text" id="' + this.console_text + '"></div>').appendTo( $('#' + this.console_id) );
        
        // Add the text input container
        $('<input type="text" class="console_input" id="' + this.console_input + '" />').appendTo( $('body') );
    }

    this.start = function()
    {
        bashjs.console = bashjs_console;

        //loading_css
        bashjs.load_css( '/css/console.css' );

        this.init();

        $('#console_input').keyup( function( e )
            {
                if ( e.keyCode == '13' )
                {
                    bashjs.bash.execute( $('#console_input').val() );
                    $('#console_input').val('');
                }
            } );

       $('#console_input').focus();
    }

    this.write = function( Data )
    {
        $('#' + this.console_text).append( Data + "<br />\n" );
    }

    this.read = function(  )
    {

    }
}

var bashjs_console = new Console();
bashjs_console.start();
