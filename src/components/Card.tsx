import React, { MouseEventHandler } from 'react'
import {ReactComponent as MinusSvg} from '../assets/minus.svg'

const Card:React.FC<{
	title?:string,
	background?:string,
	color?:string,
	classname?:string,
	onClick?:MouseEventHandler
}> = ({ children, title, background, color, classname, onClick }) =>{
	return(
		<div className={`p-10 bg-blue-500 flex flex-col justify-center items-center text-center transform transition duration-500 ease-in-out `+ classname} style={{
		 height:window.innerWidth>1024 ? window.innerHeight*0.65 : window.innerHeight*0.85,
		 background,
		 color
		 }} 
		 onClick={onClick}>
			 <div className="text-4xl font-bold mb-16 lg">{title}</div>
			 <div className="w-16 text-white fill-current">
            <MinusSvg />
			</div>
			 <div className="break-normal">{children}</div>
			
		</div>
	)
}

export default Card
