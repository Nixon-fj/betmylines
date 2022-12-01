function language()
	{
        
		let currentLang = document.getElementsByTagName('html')[0].getAttribute('lang');
		
		if (currentLang === 'en')
		{
			document.getElementsByTagName('html')[0].setAttribute('lang','es');
            let newUrl = location.pathname.split('/en/');
            location.pathname = newUrl[1];
		}
		else
		{
			document.getElementsByTagName('html')[0].setAttribute('lang','en');
            location.pathname = `/en${location.pathname}`;
		}
	}
const changeLanguage = document.querySelectorAll('.btn__lang');
for (let i = 0; i < changeLanguage.length; i++) {
    changeLanguage[i].addEventListener('click', language);
}