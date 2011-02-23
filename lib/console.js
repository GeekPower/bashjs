function Console()
{
    this.console_id = 'console_container';
    this.console_text = 'console_text';
    this.console_input = 'console_input';
    this.command = '';

    this.history = new Array();
    this.history_index = 0;

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
                    this.command = $('#console_input').val();
                    bashjs.bash.execute( this.command );

                    bashjs_console.history.push( this.command );
                    bashjs_console.history_index = bashjs_console.history.length;

                    $('#console_input').val( '' );
                }
                else if ( e.keyCode == '38' )
                {
                    bashjs_console.history_index--;
                    if ( bashjs_console.history_index < 0 )
                    {
                        bashjs_console.history_index = 0;
                    }
                    $('#console_input').val( bashjs_console.history[ bashjs_console.history_index ] );
                }
                else if ( e.keyCode == '40' )
                {
                    bashjs_console.history_index++;
                    if ( bashjs_console.history_index > bashjs_console.history.length )
                    {
                        bashjs_console.history_index = bashjs_console.history.length;
                    }
                    $('#console_input').val( bashjs_console.history[ bashjs_console.history_index ] );
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

    this.clear = function()
    {
        $('#' + this.console_text).html( '' );
    }
}

var bashjs_console = new Console();
bashjs_console.start();
