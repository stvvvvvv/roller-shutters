//Маска для телефона
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

//Валидация
let validateForms = function(selector, rules) {
	new window.JustValidate(selector, {
		rules: rules,

		messages: {
			name: 'Заполните поле',
			tel: 'Заполните поле'
		  },
		//Отправка
		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();
			alert('Спасибо! Мы рассмотрим Вашу заявку в ближайшее время!');
		}
	});
}


//Параметры валидации
validateForms('.form', {name: {required: true}, tel: {required: true} }, '.thanks-popup', 'send goal');


//Аккардеон
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//Прокрутка вверх страницы
var btnToTop = document.querySelector('.btnToTop')
var header = document.querySelector('.header')
// var offsetTop = 

function scrollToTop(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth'
	})
}

btnToTop.addEventListener('click', () => {
	scrollToTop(header)
})



