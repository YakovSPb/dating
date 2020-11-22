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



});
