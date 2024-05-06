import fs from "fs";
import path from "path";

const sourceDir = "./static";
const destDir = "./src/lib";

function copyFolderRecursiveSync(source, target) {
	source = path.resolve(source);
	target = path.resolve(target);
	console.log(source, target);
	if (!fs.existsSync(target)) {
		fs.mkdirSync(target);
	}

	const files = fs.readdirSync(source);
	files.forEach((file) => {
		const currentSource = path.join(source, file);
		const currentTarget = path.join(target, file);
		if (fs.lstatSync(currentSource).isDirectory()) {
			copyFolderRecursiveSync(currentSource, currentTarget);
		} else {
			fs.copyFileSync(currentSource, currentTarget);
		}
	});
}

copyFolderRecursiveSync(sourceDir, destDir);
