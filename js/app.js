const video = document.querySelector('.video-background')

const swiperText = new Swiper('.swiper', {
	speed: 1600,
	mousewheel: {  },
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next'
	}
})
swiperText.on('slideChange', function() {
	gsap.to(video, 1.6, {
		currentTime: (video.duration / (this.slides.length - 1)) * this.realIndex,
		ease: Power2.easeOut
	})
})
swiperText.on('slideChangeTransitionStart', function() {
	video.classList.add('change')
}).on('slideChangeTransitionEnd', function() {
	video.classList.remove('change')
})


// Audio

let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
	audio.pause()
}

