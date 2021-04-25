import React, { MouseEventHandler, useState } from 'react'
import { animated, config, useSpring } from 'react-spring'
import {ReactComponent as MinusSvg} from '../assets/minus.svg'
import Box from './Box'

const Card:React.FC<{
	title?:string,
	background?:string,
	color?:string,
	classname?:string,
	onClick?:MouseEventHandler
}> = ({ children, title, background, color, classname, onClick }) =>{
	const [hidden, sethidden] = useState(true)
	
	return(
		<div className={`p-10 bg-blue-500 flex flex-col justify-center items-center text-center transform transition duration-500 ease-in-out cursor-pointer `+ classname} style={{
		 height:window.innerWidth>1024 ? window.innerHeight*0.65 : window.innerHeight*0.85,
		 background,
		 color
		 }} 
		 onClick={onClick}
		 onMouseEnter={()=>sethidden(false)}
		 onMouseLeave={()=>sethidden(true)}
		 >
			 {hidden ? "" : <Box />}
			 <div className="text-4xl font-bold mb-16 lg">{title}</div>
			 <div className="w-16 text-white fill-current">
            <MinusSvg />
			</div>
			 <div className="break-normal">{children}</div>
			
		</div>
	)
}

export default Card
