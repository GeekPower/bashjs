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

    this.write = function( Data )
    {

    }

    this.read = function(  )
    {

    }

    this.execute = function( Command )
    {
        bashjs.console.write( 'Must execute ' + Command );
    }
}

var bashjs_bash = new Bash();
bashjs_bash.start();
