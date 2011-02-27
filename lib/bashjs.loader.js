var bashjs = new BashJS;

function BashJS()
{
    this.start = function()
    {
        window.bashjs = bashjs;

        this.load_js( '/kernel/kernel.js' );

        // Remove these once the kernel loads them
        this.load_js( '/lib/console.js' );
        this.load_js( '/lib/bash.js' );
        this.load_js( '/vfs/vfs.js' );
        this.load_js( '/vfs/mounter.js' );
    };

    this.load_js = function( Filepath )
    {
        var s = document.createElement('script');
        s.src = Filepath;
        s.type = "text/javascript";
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

