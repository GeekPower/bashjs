var bashjs = new BashJS;
bashjs.start();

function BashJS()
{
    this.start = function()
    {
        window.bashjs = bashjs;

        this.load_js( '/lib/console.js' );
    };

    this.load_js = function( Filepath )
    {
        $('<script src="' + Filepath + '"></script>').appendTo( $('head') );
        alert( 'loaded js' );
    }

    this.load_css = function( Css )
    {
        $('<link rel="stylesheet" type="text/css" href="' + Css + '" />').appendTo( $('head') );
        alert( 'loaded css' );
    }

}

