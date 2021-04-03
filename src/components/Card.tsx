import React from 'react'
import {ReactComponent as MinusSvg} from '../assets/minus.svg'

const Card:React.FC<{
	title?:string,
	background?:string,
	color?:string
}> = ({ children, title, background, color }) =>{
	return(
		<div className="p-10 bg-blue-500 flex flex-col justify-center items-center text-center" style={{
		 height:window.innerHeight*0.85,
		 background,
		 color
		 }}>
			 <div className="text-4xl font-bold mb-16">title</div>
			 <div className="w-16 text-white fill-current">
            <MinusSvg />
			</div>
			 <div className="break-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla eligendi voluptatibus rem fugit rerum. Porro quidem hic eaque, excepturi enim facere, omnis culpa et autem eligendi, quam labore reiciendis?</div>
			{children}
		</div>
	)
}

export default Card
