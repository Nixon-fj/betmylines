import topNav from './components/topNav';
import { tnsGamesIndex, tnscasino } from './components/tns-slider';
import tabs from './components/tabs';
import { initAcc } from './components/dropdown';

(() => {
	topNav();
	if (document.body.classList.contains('home')) {
		tnsGamesIndex();
	}
})();
