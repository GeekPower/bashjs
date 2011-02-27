/*
 * mount a pseudo device file to a mount point
 */

function fs() {

	this.mount = mount;
	this.umount = umount;
	this.open = open;
	this.close = close;
	this.fcntl = fcntl;
	this.opendir = opendir;
	this.readdir = readdir;
	this.read = read;
	this.write = write;
	this.lseek = lseek;

	function mount(device, mount_point) {
		/* do nothing, successfully */
	}

	function umount(mount_point) {
		/* do nothing, successfully */
	}

	function open(filename) {
		/* do nothing, successfully */
	}

	function close(fd) {
		/* do nothing, successfully */
	}
}
