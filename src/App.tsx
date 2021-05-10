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
import { FormattedMessage, IntlProvider } from 'react-intl';
// import './styles/App.css'
import {ReactComponent as ChevronDown } from './assets/chevron-down.svg'

const Title:React.FC =({ children }) =>{
	return(
		<div className="text-7xl font-extrabold relative z-10 md:text-8xl lg:text-9xl " style={{ lineHeight:"0.6em" }}>
			{children}
		</div>
	)
}

const messages = {
	en:{
		bio:"I create,develop,design",
		card1a:"A smart bike app with map function. You can find your location in this app... ",
		card1b:"And you can see dynamic 3d bike effects and visual tables.",
		card2:"A website with canvas elements as background and a micro-interactive pointer... The mouse on the circle will change color.",
		card3:"A three.js project use react-three-fiber to  build. Click me! 😄",
		intro:"Hello, i am a \"quasi-full-stack\" engineer with extensive front-end design and development experience, and familiar with linux server operation and deployment. I love to design and make things.",
		location:"Shanghai, China",
		wechat:"Wechat : Shade-233"
	},
	zh:{
		bio:"创造,设计,开发",
		card1a:"这是一个具有地图功能的智能自行车应用程序。你可以在这个应用程序中找到你的位置...",
		card1b:"同时,你还可以看到物理模拟动态的3D自行车效果和视觉表格。",
		card2:"一个以canvas元素为背景的网站，一个微互动的指针... 鼠标放在圆环上会改变颜色。",
		card3:"用three.js开发的Webgl项目,点我! 😄",
		intro:"你好，我是一名 \"准全栈 \"工程师，拥有丰富的前端设计和开发经验，并熟悉linux服务器的操作和部署。我喜欢设计和制造东西。",
		location:"中国, 上海",
		wechat:"微信 : Shade-233"
	}
}

export default function App() {
	const [lang, setlang] = useState("en")

	const [setvisiable, visiable] =useOnScreen()
	const [clicked, setclicked] = useState(false)
	return (
		<IntlProvider messages={messages[lang]} locale={lang} >
			<div className="bg-gray-100 md:px-36 xl:px-72">
				<div className="absolute top-0 right-0 mt-4 mr-4 opacity-60 cursor-pointer" onClick={()=>{
					lang === "en" ? setlang("zh") :setlang("en")}}>
					{lang === "en" ? "CN": "EN"}
					</div>
				<div className="h-60" />
				<div className="text-center font-bold" ref={setvisiable}>
					<div className="mr-20 text-6xl">
						{visiable && <AnimatedText>Shade</AnimatedText>}
					</div>
					<div className="mt-8 text-5xl ml-44 animate-bounce">	
						Lei
					</div>
					<div className="mt-28 mb-28 font-normal">
						<FormattedMessage id="bio" />
					</div>
				</div>
				<div className="mx-4 ">
					<Title>Project.</Title>
					<div className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2">
						<Card background="#e9c3b8" classname="lg:col-span-2" title="Mobius" onClick={()=>window.open("https://shade233.top:4001","_blank")}>
							<FormattedMessage id="card1a" />
							<br />
							<FormattedMessage id="card1b" />
						</Card>
						<Card background="#224a54" color="white" title="Lingo Display" onClick={()=>window.open("https://shade233.top:4000","_blank")}>
							<FormattedMessage id="card2" />
						</Card>
						<Card background="#1a1a1a" color="white" title="Webgl pillars" onClick={()=>window.open("https://shade233.top:4002","_blank")}>
						 	<FormattedMessage id="card3" />
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
								<FormattedMessage id="intro" /> <a href="https://twitter.com/Shade_Light_" className="underline">Say hi!</a>
							</div>
							<div className="mt-10">
								Shade Lei<br />
								<FormattedMessage id="location" /><br />
								<FormattedMessage id="wechat" />
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
		</IntlProvider>
	)
}
