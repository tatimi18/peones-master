document.addEventListener('DOMContentLoaded', () => {
		const tabs = document.querySelector('.tabs');
		const tabsBtn = document.querySelectorAll('.tabs__btn');
		const tabsContent = document.querySelectorAll('.tabs__content');
	
		if (tabs) {
			tabs.addEventListener('click', (e) => {
				if (e.target.classList.contains('tabs__btn')) {
					const tabsPath = e.target.dataset.tabsPath;
					tabsBtn.forEach(el => {el.classList.remove('tabs__btn_active')});
					document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn_active');
					tabsHandler(tabsPath);
				}
			});
		}
	
		const tabsHandler = (path) => {
			tabsContent.forEach(el => {el.classList.remove('tabs__content_active')});
			document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content_active');
		};
	});

//плавный скролл
$( document ).ready(function() {
		$('a[href^="#"').on('click', function() {

			let href = $(this).attr('href');
	
			$('html, body').animate({
					scrollTop: $(href).offset().top
			});
			return false;
	});

	//валидация формы с плагином
	const validateForm = (form) => {
		$(form).validate({
			rules: {
				mainName: {
					required: true,
					minlength: 2
				},
				mainTelephone: {
					required: true,
					number: true
				},
				mainEmail: {
					required: true,
					email: true
				}
			},
			messages: {
				mainName: {
					required: "Введите свое имя",
					minlength: jQuery.validator.format("Введите минимум {0} символа!")
				},
				mainTelephone: {
					required: "Введите свой номер телефона",
					number: "Формат ввода +7(999)-99-99"
				},
				mainEmail: {
					required: "Введите свою почту",
					email: "Формат ввода example@domain.ru"
				}
			}
		});
	};

	validateForm('#mainform');
	

		
});

//валидация для формы футера
const footerForm = document.getElementById('footer-form'); //поиск формы
const name = footerForm.querySelector('.footer-name'); //имя
const email = footerForm.querySelector('.footer-email'); //email

//очиста валидации при повторном нажатии отправки формы
const removeValidation = () => {
	const errors = footerForm.querySelectorAll('.footer-form__error');
	for (let i = 0; i < errors.length; i++) {
		errors[i].remove();
	};
};

//проверка пустых полей
const isEmpty = () => {
	if (!name.value) {
		const error = document.createElement('div');
		error.className = 'footer-form__error';
		error.innerHTML = `Введите свое имя`;
		name.after(error);
	};

	if (!email.value) {
		const error = document.createElement('div');
		error.className = 'footer-form__error';
		error.innerHTML = `Введите свою почту`;
		email.after(error);
	}
}

//событие отправки формы
footerForm.addEventListener('submit', (event) => {
	event.preventDefault(); //сброс настроек по умолчанию

	removeValidation();
	isEmpty();
});

//стрелка вверх
$(window).scroll(function() {
	if ($(this).scrollTop() > 1600) {
		$('.pageup').fadeIn();
	} else {
		$('.pageup').fadeOut();
	}
});










	

