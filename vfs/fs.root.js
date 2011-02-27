/* Root filesystem driver */

function SuperblockFsRoot() {}
SuperblockFsRoot.prototype.fstype = "fstype_root";

(function(bashjs) {
    var driver_name = "fstype_root";
    var fs_root = {
	open: function open(superblock, filename) {
            if(!getObjectType(superblock) == "SuperblockFsRoot")
                return false;
            
            
            
	},

	close: function close(superblock, fd) {
		/* do nothing, successfully */
	},

	fcntl: function fcntl(superblock, fd, options) {
		/* do nothing, successfully */
	},

	readdir: function readdir(superblock, fd) {
		/* do nothing, successfully */
        },

	read: function read(superblock, fd, size) {
		/* do nothing, successfully */
	},

	write: function write(superblock, fd, buffer) {
		/* do nothing, successfully */
	},

	lseek: function lseek(superblock, fd, buffer) {
		/* do nothing, successfully */
	}
    }
    
    bashjs._drivers[this.driver_name] = this.fs_root;
})(bashjs);


