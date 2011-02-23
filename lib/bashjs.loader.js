var bashjs = new BashJS;

function BashJS()
{
    this.start = function()
    {
        window.bashjs = bashjs;

        this.load_js( '/lib/console.js' );
        this.load_js( '/vfs/vfs.js' );
        this.load_js( '/vfs/Mounter.js' );
    };

    this.load_js = function( Filepath )
    {
        $('<script src="' + Filepath + '"></script>').appendTo( $('head') );
    }

    this.load_css = function( Css )
    {
        $('<link rel="stylesheet" type="text/css" href="' + Css + '" />').appendTo( $('head') );
    }

    this.init = function ()
    {
        this.start();
    }

}

