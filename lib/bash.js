function Bash()
{
    this.console_id = 'console_container';

    this.init = function()
    {

    }

    this.start = function()
    {
        bashjs.bash = bashjs_bash;

        this.init();
    }

    this.read = function(  )
    {

    }

    this.write = function( Data )
    {
        bashjs.console.write( Data );
    }

    this.execute = function( Command )
    {

        command = '';
        argv = new Array();
        argc = 0;

        command_parsed = false;
        quotes_opened = false;
        for( i = 0 ; i < Command.length ; i++ )
        {
            if ( ( Command[i] == ' ' ) & ( quotes_opened == false ) )
            {
                if ( command_parsed == false )
                {
                    command_parsed = true;
                    argv[argc] = '';
                }
                else
                {
                    argc++;
                    argv[argc] = '';
                }
            }
            else 
            {
                if ( Command[i] == '"' )
                {
                    quotes_opened = !quotes_opened;
                }
                else
                {
                    if ( command_parsed == false )
                    {
                        command = command + Command[i];
                    }
                    else
                    {
                        argv[argc] = argv[argc] + Command[i];
                    }
                }
            }
        }

        bashjs.console.write( Command );

        if ( Command == 'clear' )
        {
            bashjs.console.clear();
        }
        else
        {
            if ( $('#script_' + Command).length > 0 )
            {
                Command();
            }
            else
            {
                bashjs.load_js( '/bin/' + Command + '.js', 'script_' + Command );
                Command();
            }

        }
    }
}

var bashjs_bash = new Bash();
bashjs_bash.start();