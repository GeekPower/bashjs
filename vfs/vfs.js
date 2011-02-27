/*
 * mount a pseudo device file to a mount point
 */

vfs = {
	mnt_array: [],
	super_array: [],

	'reset': function reset() {
		mnt_array = [];
		super_array = []
	},

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

		/* nothing to unmount */
		if (this.idx_array.length == 0)
			return false;

		for (var i = 0; i < this.idx_array.length; i++) {
			this.mnt_array.splice(this.idx_array[i], 1);
		}
		return true;
	},

	'get_mount_points': function get_mount_points() {
		points = [];
		for (var i = 0; i < this.mnt_array.length; i++) {
			points.push(this.mnt_array[i].mount_point);
		}
		return points;
	},

	get_mount_point_for_filename: function (f) {
		partial = f.substring(1, f.length);
		return "/" + partial.substring(0, partial.indexOf("/"));
	},

	get_relative_filename: function (f) {
	},

	open: function (filename) {
		mp = this.get_mount_point_for_filename(filename);
		rfn = this.get_relative_filename(filename);
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
