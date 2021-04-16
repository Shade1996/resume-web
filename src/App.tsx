import React, { CSSProperties, useState } from 'react'
import useOnScreen from './hooks/useOnScreen'
import { ReactComponent as GithubLogo } from './assets/github.svg';
import { ReactComponent as TwitterLogo } from './assets/twitter.svg'
import Card from './components/Card';
import { Spring } from '@react-spring/core';
import {ReactComponent as MinusSvg} from './assets/minus.svg'
import AnimatedText from './components/AnimatedText';
import { ReactComponent as WechatLogo } from './assets/wechat.svg'
import meshSrc from './assets/mesh-gradient.png'
// import './styles/App.css'

const Title:React.FC =({ children }) =>{
	return(
		<div className="text-7xl font-extrabold relative z-10 md:text-8xl lg:text-9xl " style={{ lineHeight:"0.6em" }}>
			{children}
		</div>
	)
}

export default function App() {
	const [setvisiable, visiable] =useOnScreen()
	const [clicked, setclicked] = useState(false)
	return (
		<div className="bg-gray-100 md:px-36 xl:px-72">
			<div className="h-60" />
			<div className="text-center font-bold" ref={setvisiable}>
				<div className="mr-20 text-6xl">
					{visiable && <AnimatedText>Shade</AnimatedText>}
				</div>
				<div className="mt-8 text-5xl ml-44 animate-bounce">	
					Lei
				</div>
				<div className="mt-28 mb-28 font-normal">I create,develop,design</div>
			</div>
			<div className="mx-4 ">
				<Title>Project.</Title>
				<div className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2">
					<Card background="#e9c3b8" classname="lg:col-span-2  hover:translate-y-2.5" title="Mobius" onClick={()=>window.open("https://shade233.top:4001","_blank")}>
					A smart bike app with map function. You can find your location in this app... <br />And you can see dynamic 3d bike effects and visual tables.
					</Card>
					<Card background="#224a54" color="white" title="Lingo Display" classname="hover:-translate-y-2.5 lg:" onClick={()=>window.open("https://shade233.top:4000","_blank")}>
					A website with canvas elements as background and a micro-interactive pointer... The mouse on the circle will change color.
					</Card>
					<Card background="#1a1a1a" color="white" title="react-coding-keyboard"  classname="hover:-translate-y-2.5 lg:"onClick={()=>window.open("https://github.com/Shade1996/react-coding-keyboard","_blank")}>
					Emmm... A mobile-friendly react code keyboard component
					</Card>
				</div>
			</div>
			<div className="mt-40 mx-4 pb-10 lg:pb-20">
				<Title>Say hi.</Title>
				<div className="text-white p-10 relative" style={{backgroundColor:"#1f4954", height:window.innerHeight * 0.85 }}> 
					<div className="lg:w-1/2">
						<a className="text-4xl font-bold block lg:mt-10 xl:text-6xl hover:underline" href="mailto:shadework@outlook.com">shadework@<br />outlook.com</a>
						<div className="w-16 text-white fill-current my-4">
							<MinusSvg />
						</div>
						<div className="lg:w-2/3">
							Hello, i am a "quasi-full-stack" engineer with extensive front-end design and development experience, and familiar with linux server operation and deployment. I love to design and make things. <a href="https://twitter.com/Shade_Light_" className="underline">Say hi!</a>
						</div>
						<div className="mt-10">
							Shade Lei<br />
							Shanghai, China<br />
							Wechat : Shade-233
						</div>
						<div className="flex h-8 space-x-4 mt-10">
							<a href="https://github.com/Shade1996?tab=repositories" className="h-full w-8">
								<GithubLogo className="text-white fill-current transition duration-500 hover:text-black transform hover:-translate-y-1 hover:scale-110" title="Github"/>
							</a>
							<a href="https://twitter.com/Shade_Light_" className="h-full w-8">
								<TwitterLogo className="text-white fill-current transition duration-500 hover:text-black transform hover:-translate-y-1 hover:scale-110" title="Twitter"/>
							</a>
							<WechatLogo className="text-white fill-current transition duration-500 hover:text-black transform hover:-translate-y-1 hover:scale-110" title="Wechat"/>
						</div>
					</div>
					<img className="w-1/2 h-full right-0 top-0 absolute hidden lg:block" src={meshSrc} alt="" loading="lazy"/>
				</div>
			</div>
		</div>
	)
}
