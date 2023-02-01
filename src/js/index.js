import topNav from './components/topNav';
import { tnsGamesIndex } from './components/tns-slider';
import tabs from './components/tabs';
import { initAcc } from './components/dropdown';

(() => {
	topNav();
	if (document.body.classList.contains('home') || document.body.classList.contains('Home-page')) {
		tnsGamesIndex();
	}
	else if (document.body.classList.contains('ReglasDeportes') || document.body.classList.contains('Sport Rules')) {
		initAcc();
	}
})();
