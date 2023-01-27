import topNav from './components/topNav';
import { tnsCarousell, tnsSingle, tnsPromotion } from './components/tns-slider';
import modal from './components/modal-login';
import bonus from './components/bonus';
import tabs from './components/tabs';
import { initAcc } from './components/dropdown';
import changeLanguage from './components/languages';

(() => {
	modal;
	topNav();
	changeLanguage;
	if (document.body.classList.contains('home') || document.body.classList.contains('Home-page')) {
		tnsSingle();
		tnsPromotion();
		tnsCarousell();
	}
	else if (document.body.classList.contains('Bonus') || document.body.classList.contains('Bonuses')) {
		bonus;
	}
	else if (document.body.classList.contains('Banca') || document.body.classList.contains('Banking')) {
		tabs();
	}
	else if (document.body.classList.contains('ReglasDeportes') || document.body.classList.contains('Sport Rules')) {
		initAcc();
	}
})();
