document.addEventListener("DOMContentLoaded", function() {

	function putStars() {
		const starBlocks = document.querySelectorAll('.stars')

		for(starList of starBlocks) {
			const countFullStars = starList.getAttribute('data-count');
			const stars = starList.querySelectorAll('.star')

			for(let i = 0; i < countFullStars; i++) {
				stars[i].classList.add('star__full')
			}
		}
	}
putStars()

var mediaQuery1200 = window.matchMedia("screen and (max-width: 1200px)");
mediaQuery1200.addListener(foo1200);
foo1200(mediaQuery1200);

function foo1200(mq) {
    if(mq.matches){
    	mobileMenu()
    }
}


function mobileMenu() {
	const butOpen = document.querySelector('.menu-item-has-children a')
	const butClose = document.querySelector('.sub-menu .menu-item')
	const mobileMenu = document.querySelector('.sub-menu')
	
	butOpen.addEventListener('click', function(event) {
		event.preventDefault();
		mobileMenu.classList.add('open-menu')
	})

	butClose.addEventListener('click', function() {
			mobileMenu.classList.remove('open-menu')
	})

}



//close mobile menu

document.addEventListener('click', function(e) {
	const mobileMenu = document.querySelector('.sub-menu')
	if (e.target.hasClass !== 'sub-menu' && (!e.target.matches('.menu-item-has-children') && !e.target.parentElement.matches('.menu-item-has-children'))) {
		mobileMenu.classList.remove('open-menu')
	}
})


});
