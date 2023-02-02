import topNav from './components/topNav';
import { tnsGamesIndex} from './components/tns-slider';
import tablecaballos from './components/tablecaballos';

(() => {
	topNav();
	if (document.body.classList.contains('home')) {
		tnsGamesIndex();
	}else if (document.body.classList.contains('caballos')) {
		tablecaballos();
	}
})();
