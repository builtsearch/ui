import fs from "fs";
import path from "path";

const sourceDir = "./static";
const destDir = "./src/lib";

function copyFolderRecursiveSync(source, target) {
	source = path.resolve(source);
	target = path.resolve(target);
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

createGlyphJSON();
function createGlyphJSON() {
	const glyphs = fs.readdirSync("./src/lib/assets/glyph");
	const data = {};
	for (const fileName of glyphs) {
		const name = fileName.split(".")[0];
		const file = fs.readFileSync(`./src/lib/assets/glyph/${fileName}`, "utf8");
		data[name] = file;
	}
	fs.writeFileSync("./src/lib/glyph.json", JSON.stringify(data));
}

copyFolderRecursiveSync(sourceDir, destDir);
