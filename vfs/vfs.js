/*
 * mount a pseudo device file to a mount point
 */
function Superblock() {}
Superblock.prototype = {
    fstype: false,
    device: false,
    resource: false
}


vfs = {
	mnt_array: [],

	'is_mount': function is_mount(mount_point) {
		for (var i = 0; i < this.mnt_array.length; i++) {
			if (this.mnt_array[i].mount_point == mount_point) {
				return true;
			}
		}
	},

	'mount': function mount(device, mount_point, options) {
		if (this.is_mount(mount_point) == true)
			return false;

		this.mnt_array.push(new mounter(device, mount_point, options));
		return true;
	},

	'umount': function umount(mount_point) {
		this.idx_array = [];
		for (var i = 0; i < this.mnt_array.length; i++) {
			if (this.mnt_array[i].mount_point == mount_point) {
				this.idx_array.push(i);
			}
		}
		for (var i = 0; i < this.idx_array.length; i++) {
			this.mnt_array.splice(this.idx_array[i], 1);
		}
	},

	'get_mount_points': function get_mount_points() {
		points = [];
		for (var i = 0; i < this.mnt_array.length; i++) {
			points.push(this.mnt_array[i].mount_point);
		}
		return points;
	},

	'open': function open(filename) {
		/* do nothing, successfully */
	},

	'close': function close(fd) {
		/* do nothing, successfully */
	},

	'fcntl': function fcntl(fd, options) {
		/* do nothing, successfully */
	},

	'opendir': function opendir(fd) {
		/* do nothing, successfully */
	},

	'readdir': function readdir(fd) {
		/* do nothing, successfully */
	},

	'read': function read(fd, size) {
		/* do nothing, successfully */
	},

	'write': function write(fd, buffer) {
		/* do nothing, successfully */
	},

	'lseek': function lseek(fd, buffer) {
		/* do nothing, successfully */
	}
}
