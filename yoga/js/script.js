console.log('Credo');
window.addEventListener('DOMContentLoaded', function () {

	'use strict';

	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent (a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent (1);

	function showTabContent (b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');	
		}
	}

	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});
});

// Timer
/* 
 * Что должно быть:
 * 1. Deadline - время когда таймер должен остановиться.
 * 2. Требуется узнать: сколько времени осталось до deadline:
 * 2.1. Взять время в будущем (deadline) минус время текущее (когда пользователь зайдёт на страницу)
 * 2.2. Из этой разности требуется получить: Часы, Минуты, Секунды (которые требуется отображать на странице)
 * 2.3. Написать фунцию "настройщик", которая меняет цифры в зависимости от времени 
 * 2.4. Написань функцию "рендеринг", которая обновляет данные на странице (каждую секунду)
 */

// Установка deadline
let deadline = '2019-04-29 15:53:15'; // moment().format('YYYY-MM-DD HH:m:s')

/**
 * Принимает строку deadline, вычисляет разность между deadline и текущем временем, 
 * возвращает объект: часы, минунуты, секунды из разности и саму разность. 
 */
/**
 * 
 * @param {deadline} endtime 
 */
function getTimeRemaining(endtime) {
	let t = Date.parse(deadline) - Date.parse(new Date),
		seconds = Math.floor((t / 1000) % 60),
		minutes = Math.floor((t / 1000 / 60) % 60),
		hours = Math.floor((t / (1000 * 60 * 60)));
	// hours = Math.floor((t / 1000 / 60 / 60) % 24);
	// days = Math.floor((t / (1000 * 60 * 60 * 24)));

	return {
		'total': t,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

// Получение элементов со страницы
/**
 * 
 * @param {'time'} id 
 * @param {deadline} endtime 
 */
function setClock(id, endtime) {
	let timer = document.getElementById('timer'),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');
		timeInterval = setInterval(updateClock, 1000);

	// Рендеринг значений на странице
	function updateClock() {
		let zero = 0;
		let t = getTimeRemaining(endtime);
		if (t.hours < 10) {
			hours.textContent = zero + '' + t.hours;
		} else {
			hours.textContent = t.hours;
		}
		if (t.minutes < 10) {
			minutes.textContent = zero + '' + t.minutes;
		} else {
			minutes.textContent = t.minutes;
		}
		if (t.seconds < 10) {
			seconds.textContent = zero + '' + t.seconds;
		} else {
			seconds.textContent = t.seconds;
		}

		if (t.total <= 0) {
			clearInterval(timeInterval);
			hours.textContent = '00';
			minutes.textContent = '00';
			seconds.textContent = '00';
		}
	}
}

setClock('timer', deadline);


	// Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');
	
	more.addEventListener('click', function () {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		// Запрет на перемещение страницы, пока открыто модальное окно.
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});





console.log('Credo2');