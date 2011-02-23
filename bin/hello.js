function hello()
{
    this.start = function()
    {
        bashjs.bash.write( 'world' );
    }
}

var temp_val = new hello();
temp_val.start();