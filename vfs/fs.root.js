/* Root filesystem driver */

function SuperblockFsRoot() {}
SuperblockFsRoot.prototype.fstype = "fstype_root";

(function(bashjs) {
    var driver_name = "fstype_root";
    var fs_root = {
        
	open: function(superblock, filename) {
            if(!getObjectType(superblock) == "SuperblockFsRoot")
                return false;
            
            
	},

	close: function(superblock, fd) {
		/* do nothing, successfully */
	},

	fcntl: function(superblock, fd, options) {
		/* do nothing, successfully */
	},

	readdir: function(superblock, fd) {
		/* do nothing, successfully */
        },

	read: function(superblock, fd, size) {
		/* do nothing, successfully */
	},

	write: function(superblock, fd, buffer) {
		/* do nothing, successfully */
	},

	lseek: function(superblock, fd, buffer) {
		/* do nothing, successfully */
	}
    }
    
    bashjs._drivers[this.driver_name] = this.fs_root;
})(bashjs);


