/* ===================================  Preloader  --Start--  =================================== */
window.onload = function () {
	let screenWidth = window.innerWidth;
	if (document.querySelector(".preloader")) {
		if (screenWidth > 250) {
			let preloader = document.querySelector(".preloader");
			document.documentElement.classList.add("lock");
			document.querySelector(".wrapper").classList.add("_done");
			window.setTimeout(function () {
				if (!preloader.classList.contains("_show")) {
					document.querySelector(".wrapper").classList.remove("_done");
					setTimeout(() => {
						preloader.classList.add("_show");
						document.documentElement.classList.remove("lock");
					}, 100);
				}
			}, 3000);
		} else {
			document.querySelector(".wrapper").classList.remove("_done");
			preloader.classList.add("_show");
			document.documentElement.classList.remove("lock");
		}
	} 
} 
/* ===================================  Preloader  --End--  =================================== */