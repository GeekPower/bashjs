function assert_equals(expected, actual) {
	if (expected != actual) {
		throw "Assertion failed: Expected " + expected + ", got " + actual;
	}
}

function assert_not_equals(expected, actual) {
	if (expected == actual) {
		throw "Assertion failed: Expected different: " + expected + ", got " + actual;
	}
}

function assert_in(collection, item) {
	found = 0;
	for (var i = 0; i < collection.length; i++) {
		if (item == collection[i]) {
			found = 1;
			break;
		}
	}

	assert_equals(1, found);
}

function assert_not_in(collection, item) {
	found = 0;
	for (var i = 0; i < collection.length; i++) {
		if (item == collection[i]) {
			found = 1;
			break;
		}
	}

	assert_not_equals(1, found);
}

function mount_point_is_listed_after_mount() {
	vfs.reset();

	vfs.mount("ana", "are", "mere");
	mps = vfs.get_mount_points();

	assert_in(mps, "are");
}

function mount_point_is_mounted_once() {
	vfs.reset();

	vfs.mount("ana", "are", "mere");

	/* new mount should fail */
	assert_equals(false, vfs.mount("ana", "are", "mere"));
}

function mount_point_dissappears_after_umount() {
	vfs.reset();

	vfs.mount("unu", "doi", "trei");
	vfs.umount("doi");

	mps = vfs.get_mount_points();
	assert_not_in(mps, "doi");
}

function mount_point_is_unmounted_once() {
	vfs.reset();

	vfs.umount("are");

	/* new umount should fail */
	assert_equals(false, vfs.umount("are"));
}

document.write("mount_point_is_listed_after_mount");
mount_point_is_listed_after_mount();
document.write("<br />");

document.write("mount_point_dissappears_after_umount");
mount_point_dissappears_after_umount();
document.write("<br />");

document.write("mount_point_is_unmounted_once");
mount_point_is_unmounted_once();
document.write("<br />");

document.write("mount_point_is_mounted_once");
mount_point_is_mounted_once();
document.write("<br />");
