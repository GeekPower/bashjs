/*
 * mount a pseudo device file to a mount point
 */

<<<<<<< HEAD



function fs() {
=======
vfs = {
	var mnt_array = [];
>>>>>>> c73cc4ed4cace33f9401b7284878632f55a7aed8

	'mount': function mount(device, mount_point, options) {
		mnt_array.push(new Mounter(device, mount_point, options));
	}

	'umount': function umount(mount_point) {
		for(var i = 0; i < mnt_array; i++) {
			if (mnt_array[i].mount_point == mount_point) {
				delete mnt_array[i];
			}
		}
	}

	'open': function open(filename) {
		/* do nothing, successfully */
	}

	'close': function close(fd) {
		/* do nothing, successfully */
	}

	'fcntl': function fcntl(fd, options) {
		/* do nothing, successfully */
	}

	'opendir': function opendir(fd) {
		/* do nothing, successfully */
	}

	'readdir': function readdir(fd) {
		/* do nothing, successfully */
	}

	'read': function read(fd, size) {
		/* do nothing, successfully */
	}

	'write': function write(fd, buffer) {
		/* do nothing, successfully */
	}

	'lseek': function lseek(fd, buffer) {
		/* do nothing, successfully */
	}
}
