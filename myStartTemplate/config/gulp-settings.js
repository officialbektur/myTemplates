// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// Пути к папке с исходниками и папке с результатом
const buildFolder = `./--${rootFolder}--`;
const srcFolder = `./app`;

// Пути к папкам и файлам проекта
export const path = {
	build: {
		html: `${buildFolder}/`,
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		componetns: `${buildFolder}/componetns/`,
		library: `${buildFolder}/library/`
	},
	src: {
		html: `${srcFolder}/*.html`,
		pug: `${srcFolder}/pug/*.pug`,
		js: `${srcFolder}/js/script.js`,
		scss: `${srcFolder}/scss/style.scss`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		fonts: `${srcFolder}/fonts/**/*.*`,
		componetns: `${srcFolder}/componetns/**/*.*`,
		library: `${buildFolder}/library/**/*.*`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	rootFolder: rootFolder,
	srcFolder: srcFolder,
	ftp: `` // Путь к нужной папке на удаленном сервере. gulp добавит имя папки проекта автоматически
};

// Настройка FTP соединения
export const configFTP = {
	host: "", // Адрес FTP сервера
	user: "", // Имя пользователя
	password: "", // Пароль
	parallel: 5 // Кол-во одновременных потоков
}