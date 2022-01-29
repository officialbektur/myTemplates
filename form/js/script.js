/* ====================  Strict regime  ==================== */
'use strict';
/* =============================================  Default  --Start--  ============================================= */



document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("form");
	form.addEventListener("submit", formSend);
	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(form);
		let formData = new FormData(form);
		formData.append("image", formImageInput.files[0]);
		if (error === 0) {
			form.classList.add("_sending");
			let response = await fetch("../sendmail.php", {
				method: "POST",
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = "";
				form.reset();
				form.classList.remove("_sending");
			} else {
				alert("Ошибка");
				form.classList.remove("_sending");
			}		
		} else {
			alert("Заполните объязательные поля");
		}
	}
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll("._req");
		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);
			if (input.classList.contains("_email")) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
					formAddError(input);
					error++;
			} else {
				if (input.value === "") {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add("_error");
		input.classList.add("_error");
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove("_error");
		input.classList.remove("_error");
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
	// Получаем инпут file в переменную
	const formImageInput = document.getElementById("formImageInput");
	const filePrewiew = document.querySelector(".file__prewiew");
	const formPreviewBack = document.querySelector(".file__prewiew_back");
	// Получаем див для превью в переменную
	const formPreviewImg = document.getElementById("formPreviewImg");

	// Слушаем изменения в инпуте file
	formImageInput.addEventListener("change", () => {
		uploadFile(formImageInput.files[0]);
	});

	formPreviewBack.addEventListener("click", () => {
		formPreviewImg.innerHTML = "";
		filePrewiew.classList.remove("_active");
	});
	function uploadFile(file) {
		// Проверяем тип файла
		if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
			alert("Разрешены толко изображения.");
			formImageInput.value = "";
			return;
		}
		// Проверим размер файла (< 2 mb)
		if (file.size > 8 * 4024 * 4024) {
			alert("Файл должен быть менее 8 mb");
			return;
		}

		var reader = new FileReader();
		reader.onload = function (e) {
			formPreviewImg.innerHTML = `<img src="${e.target.result}" alt="img">`;
			filePrewiew.classList.add("_active");
		};
		reader.onerror = function (e) {
			alert("Ошибка");
		};
		reader.readAsDataURL(file);
	}
});



/* =============================================  Default  --End--  ============================================= */