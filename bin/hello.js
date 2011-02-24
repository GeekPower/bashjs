function hello()
{
    this.start = function( argv )
    {
        bashjs.bash.write( 'world' );

        if ( argv.length > 0 )
        {
            bashjs.bash.write( 'Arguments: ' );
            for ( i = 0 ; i < argv.length ; i++ )
            {
                bashjs.bash.write( argv[i] );
            }
        }
    }
}

var temp_val = new hello();
temp_val.start( bashjs_bash.command_argv );