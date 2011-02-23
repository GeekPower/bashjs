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

        bashjs.console.write( 'command : ' + command );
        for( i = 0 ; i < argv.length ; i++ )
        {
            bashjs.console.write( 'argv[' + i + '] : ' + argv[i] );
        }
        bashjs.console.write( '' );

        
    }
}

var bashjs_bash = new Bash();
bashjs_bash.start();