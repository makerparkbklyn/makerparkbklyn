import ScrollMagic from 'scrollmagic'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import { TweenMax, Power2, Linear } from 'gsap'

// let allScenes = []

const setupScrollMagicScenes = ( keyframes, controller, context = null, debug = false ) => {
	let self 	= context,
		rIn		= /In$/,
		rOut	= /Out$/,
		rThru	= /Thru$/,
		rMove 	= /Move$/,
		rToggle = /Toggle$/,
		rSlide 	= /Slide$/

	// if (allScenes.length > 0) {
	// 	allScenes.map( (scene, i) => {
	// 		scene.destroy(true)
	// 	})
	// }

	keyframes.map( (createSection, i) => {

		// setup keyframes:
		let section = createSection()

		// running setup no longer necessary since creatSection is a function
		// if (section != undefined && section.setup != undefined) {
		// 	section.setup(section.scenes)
		// }

		// console.log(section)

		section.scenes.map( (scene, j) => {
			let tween 	= null,
				toggle	= false,
				slide	= false

			// remove styles from previous scene? <= this screws things up
			// document.querySelector(scene.element).setAttribute('style', '')

			// if scene is animating 'in':
			if ( rIn.test( scene.name ) ) {
				tween = TweenMax.from(`${scene.element}`, 1, scene.tween)
			}

			// if scene is animating 'out':
			else if ( rOut.test(scene.name) || rMove.test(scene.name) ) {
				tween = TweenMax.to(`${scene.element}`, 1, scene.tween)
			}

			// if scene is animating 'thru':
			else if ( rThru.test(scene.name) ) {
				tween = TweenMax.fromTo(`${scene.element}`, 1, scene.tween[0], scene.tween[1])
			}

			// if scene is a class toggle:
			else if ( rToggle.test(scene.name) ) {
				toggle = true
			}

			// if scene is a slide marker
			else if ( rSlide.test(scene.name) ) {
				slide = true
			}

			// if no tween type is detected:
			else {
				console.error(`Invalid tween type from scene ${scene.name} in ${section.section} section`)
			}

			// create ScrollMagic scene:
			let s = new ScrollMagic.Scene({
				triggerElement: scene.trigger ? scene.trigger : section.section,
				triggerHook: scene.hook ? scene.hook : section.hook,
				duration: scene.duration,
				offset: scene.offset,
				// loglevel: 3
			})

			if (toggle) {
				s.setClassToggle(scene.element, scene.class)
			}
			else if (slide) {
				if (self !== null) {
					s.on('progress', (e) => {
						// console.log(`Scene Name: ${scene.name}`)
						// console.log(`Scene Index: ${scene.index}`)
						// console.log('scrollDirection: ' + e.scrollDirection)
						if (e.scrollDirection === 'FORWARD' && !self.scrolling) {
							self._updateCurrentSlide(scene.index)
						}
						else if (e.scrollDirection === 'REVERSE' && !self.scrolling) {
							self._updateCurrentSlide(scene.index - 1)
						}
					})
				}
			}
			else {
				s.setTween(tween)
			}

			if (scene.events) {
				for (let key in scene.events) {
					if (!scene.events.hasOwnProperty(key)) continue
					s.on(key, scene.events[key])
				}
			}

			s.addTo(controller)

			if (debug) {
				s.addIndicators({ name: scene.name })
			}

			// s.on('progress', (e) => {
			// 	console.log('SCENE: ' + e.target)
			// 	console.log('SCENE_PROGRESS: ' + e.progress)
			// 	console.log('SCENE_STATE: ' + e.state)
			// 	s.update()
			// })

			// allScenes.push(s)
			// tween = null
		})
	})

	controller.update(true)
}

// const refreshScrollMagicScenes = () => {}

export default setupScrollMagicScenes