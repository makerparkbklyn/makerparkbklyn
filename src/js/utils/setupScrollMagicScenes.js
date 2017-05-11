import ScrollMagic from 'scrollmagic'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

const setupScrollMagicScenes = ( keyframes, controller, debug = false ) => {
	let rIn		= /In$/,
		rOut	= /Out$/,
		rThru	= /Thru$/,
		rMove 	= /Move$/

	keyframes.map( (section, i) => {

		// setup keyframes:
		if (section != undefined && section.setup != undefined) {
			section.setup(section.scenes)
		}

		section.scenes.map( (scene, j) => {
			let tween = null

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

			// if no tween type is detected:
			else {
				console.error(`Invalid tween type from scene ${scene.name} in ${section.section} section`)
			}

			// create ScrollMagic scene:
			let s = new ScrollMagic.Scene({
				triggerElement: scene.trigger ? scene.trigger : section.section,
				triggerHook: scene.hook ? scene.hook : section.hook,
				duration: scene.duration,
				offset: scene.offset
			})

			s.setTween(tween)

			s.addTo(controller)

			if (debug) {
				s.addIndicators({ name: scene.name })
			}

			if (scene.events) {
				for (let key in scene.events) {
					if (!scene.events.hasOwnProperty(key)) continue
					s.on(key, scene.events[key])
				}
			}
		})
	})

	controller.update(true)
}

const refreshScrollMagicScenes = () => {}

export default setupScrollMagicScenes
