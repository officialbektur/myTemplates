import { configFTP } from '../gulp-settings.js';
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

export const ftp = () => {
	configFTP.log = util.log;
	const ftpConnect = vinylFTP.create(configFTP);
	return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "FTP",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(ftpConnect.dest(`/${app.path.ftp}/--${rootFolder}--`));
}