import del from "del";
import zipPlugin from "gulp-zip";

import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

export const zip = () => {
	del(`./--${rootFolder}--.zip`);
	return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "ZIP",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(zipPlugin(`--${rootFolder}--.zip`))
		.pipe(app.gulp.dest('./'));
}