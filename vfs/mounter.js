/*
 * mounter; dynamic mount point structure
 */

function mounter(device, mount_point, options) {
	this.device = device;
	this.mount_point = mount_point;
	this.options = options;
}
