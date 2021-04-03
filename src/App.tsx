import React, { CSSProperties, useState } from 'react'
import useOnScreen from './hooks/useOnScreen'
import { ReactComponent as GithubLogo } from './assets/github.svg';
import { ReactComponent as TwitterLogo } from './assets/twitter.svg'
import Card from './components/Card';
import { Spring } from '@react-spring/core';
import {ReactComponent as MinusSvg} from './assets/minus.svg'
import AnimatedText from './components/AnimatedText';
import { ReactComponent as WechatLogo } from './assets/wechat.svg'
// import './styles/App.css'

const Title:React.FC =({ children }) =>{
	return(
		<div className="text-7xl font-extrabold relative z-10" style={{ lineHeight:"2.8rem" }}>
			{children}
		</div>
	)
}

export default function App() {
	const [setvisiable, visiable] =useOnScreen()
	const [clicked, setclicked] = useState(false)
	return (
		<div className="bg-gray-100">
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
			<div className="mx-4">
				<Title>Project.</Title>
				<div className="flex flex-col">
					<Card background="#e9c3b8"/>
					<Card background="#224a54" color="white"/>
					<Card background="#1a1a1a" color="white"/>
				</div>
			</div>
			<div className="mt-40 mx-4">
				<Title>Say hi.</Title>
				<div className="text-white p-8" style={{backgroundColor:"#1f4954", height:window.innerHeight * 0.85 }}> 
					<div className="text-4xl font-bold">shadework<br />@outlook.com</div>
					<div className="w-16 text-white fill-current">
						<MinusSvg />
					</div>
					<div>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi nostrum ut ipsum maxime expedita. Itaque doloribus tempora qui quia? Debitis facilis amet eos itaque distinctio expedita esse cum earum delectus.
					</div>
					<div className="mt-10">
						Shade Lei<br />
						Shanghai, China
					</div>
					<div className="flex h-8 space-x-4 mt-10">
						<a href="https://github.com/Shade1996?tab=repositories" className="h-full w-8"><GithubLogo className="text-white fill-current transition duration-500 hover:text-black transform hover:-translate-y-1 hover:scale-110" /></a>
						<TwitterLogo className="text-white fill-current transition duration-500 hover:text-black transform hover:-translate-y-1 hover:scale-110" href="https://twitter.com/Shade_Light_" />
						<WechatLogo className="text-white fill-current transition duration-500 hover:text-black transform hover:-translate-y-1 hover:scale-110" href="" />
					</div>
				</div>
			</div>
		</div>
	)
}
