(function(bashjs) {
    var kernel = function() {}
    kernel.prototype = {
        /* Initialize `boot-time` drivers, console, etc... */
        boot: function(cmdline) {
          bashjs.load_js('/vfs/mounter.js');
          bashjs.load_js('/vfs/vfs.js');
          
          bashjs.load_js('/vfs/fs.root.js');
          bashjs.load_js('/lib/console.js');
        },
        
        /* Driver map.  "name" -> "object" */
        drivers: {
            //"fstype_root": fsroot,
            //"console": console
        },
        
        register_driver: function(name, object) {
            this.drivers['name'] = object;
        },
        
        /* current task (single one yet..) */
        current: {
            files: []
        },
        
        
        /* System calls */
        sys: {
            exec: function(path, args) {
                
            },
            open: function(filename) {
                    /* do nothing, successfully */ 
            },
    
            close: function(fd) {
                    /* do nothing, successfully */
            },
    
            fcntl: function(fd, options) {
                    /* do nothing, successfully */
            },
    
            readdir: function(fd) {
                    /* do nothing, successfully */
            },
    
            read: function(fd, size) {
                    /* do nothing, successfully */
            },
    
            write: function(fd, buffer) {
                    /* do nothing, successfully */
            },
    
            lseek: function(fd, buffer) {
                    /* do nothing, successfully */
            },
            
            socket: false
        }
        
        /*  */
        
    }
    
    bashjs.kernel = new kernel();        
    
})(bashjs);
