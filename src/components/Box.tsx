import React from 'react'
import { animated, config, useSpring } from 'react-spring'

export default function Box() {
    const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: true,
		delay: 200,
		config: config.molasses,
	  })
    return (
        <animated.div className="absolute right-0 top-0 bg-black text-white p-4" style={props}>View Project</animated.div>
    )
}
