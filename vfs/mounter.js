/*
 * mounter; dynamic mount point structure
 */

function mounter(device, mount_point, options) {
	this.device = device;
	this.mount_point = mount_point;
	this.options = options;
	this.superblock = new Superblock();

	/* TODO: get fstype from options*/
	this.superblock.fstype = options;
	this.superblock.device = device;
	this.superblock.resource = false;
}

function Superblock() {
}

Superblock.prototype = {
	fstype: false,
	device: false,
	resource: false
}
