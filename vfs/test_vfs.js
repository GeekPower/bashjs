function test_mount() {
	vfs.mount("ana", "are", "mere");
	mps = vfs.get_mount_points();
	for (var i = 0; i < mps.length; i++) {
		if (mps[i] == "are") {
			return true;
		}
	}
	return false;
}

function test_multi_mount() {
	vfs.mount("ana", "are", "mere");
	/* new mount should fail */
	if (vfs.mount("ana", "are", "mere") == false)
		return true;
}

function test_mount_umount() {
	if (vfs.mount("unu", "doi", "trei") == false)
		return false;
	mps = vfs.get_mount_points();
	if (vfs.umount("are") == false)
		return false;

	mps = vfs.get_mount_points();
	for (var i = 0; i < mps.length; i++) {
		if (mps[i] == "are")
			return false;
	}

	return true;
}

function test_multi_umount() {
	vfs.umount("are");
	/* new mount should fail */
	if (vfs.umount("are") == false);
		return true;
}

document.write("test_mount: ");
document.write(test_mount());
document.write("<br />");

document.write("test_multi_mount: ");
document.write(test_multi_mount());
document.write("<br />");

document.write("test_mount_umount: ");
document.write(test_mount_umount());
document.write("<br />");

document.write("test_multi_umount: ");
document.write(test_multi_umount());
document.write("<br />");
