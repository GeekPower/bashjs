/*
 * mounter; dynamic mount point structure
 */

/*
 * mount a pseudo device file to a mount point
 */

(function (bashjs) {

	vfs = function () {
	}

	vfs.prototype = {
		mounter: function(device, mount_point, options) {
			this.device = device;
			this.mount_point = mount_point;
			this.options = options;

			this._superblock = new this.superblock();

			/* TODO: get fstype from options*/
			this._superblock.fstype = options;
			this._superblock.device = device;
			this._superblock.resource = false;
		},

		superblock: function() {
			this.superblock.fstype = false;
			this.superblock.device = false;
			this.superblock.resource = false;
		},

		mnt_array: [],
		super_array: [],

		reset: function() {
			mnt_array = [];
			super_array = []
		},

		get_mount: function(mount_point) {
			for (var i = 0; i < this.mnt_array.length; i++) {
				if (this.mnt_array[i].mount_point == mount_point) {
					return this.mnt_array[i];
				}
			}

			return null;
		},

		mount: function(device, mount_point, options) {
			if (this.get_mount(mount_point) != null)
				return false;

			this.mnt_array.push(new this.mounter(device, mount_point, options));
			return true;
		},

		umount: function(mount_point) {
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

		get_mount_points: function() {
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
			partial = f.substring(1, f.length);
			return partial.substring(partial.indexOf("/") + 1, partial.length);
		},

		open: function (filename) {
			mp = this.get_mount_point_for_filename(filename);
			rfn = this.get_relative_filename(filename);

			/* check existence of mount point */
			_mounter = this.get_mount(mp);
			if (_mounter == null)
				return false;

			/* TODO: look for driver type */
		},

		close: function(fd) {
			/* do nothing, successfully */
		},

		fcntl: function(fd, options) {
			/* do nothing, successfully */
		},

		opendir: function(fd) {
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
		}
	}

	bashjs.vfs = new vfs();

})(bashjs);
