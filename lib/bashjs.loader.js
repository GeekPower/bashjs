var bashjs = new BashJS;

function BashJS()
{
    this.start = function()
    {
        window.bashjs = bashjs;

        this.load_js( '/kernel/kernel.js' );

    };

    this.load_js = function( Filepath, Id )
    {
        console.log("Loader: loading(" + Filepath + ")");
        
        var s = document.createElement('script');
        s.src = Filepath;
        s.type = "text/javascript";
        if ( Id != 'undefined' )
        {
            s.id = Id;
        }
        document.getElementsByTagName('head')[0].appendChild(s);
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

