/**
 * 不要同時開兩個dev網頁,會導致白屏
 */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import classNames from 'classnames'
import { range } from 'lodash-es'

export default function App() {
	const [count, setCount] = useState(0)

	const [isActive, setIsActive] = useState(false)
	function handleClick() {
		const a = 234



		console.log(a);


		console.log('1');
		range(3)


		console.log('1');


		console.log('1');
	}
	if (1) {
		console.log('');
	}
	return (
		<div className="App">
			<p className={ classNames("read-the-docs text-red-600 h-9 sticky top-0 backdrop-blur-sm") }>
				Cligjogpk on the Vite and React logos to learn moreasdasdasd
			</p>
			<button className='border-violet-600 border p-2 rounded  ml-10' onClick={ () => { setCount(count + 1) } }>{ count }</button>
			<button className='border p-2 rounded border-slate-600 ml-10' onClick={ handleClick }>{ count }</button>

			<button className="border-solid border-stone-500 #border rounded p-2 m-2 bg-gray-500 hover:bg-gray-500/[.85] active:bg-gray-500/70">
				Save changes
			</button>
			<button className="rounded p-2 m-2  bg-red-600 bg-zinc-500  hover:bg-gray-500 active:bg-slate-500">
				Save changes
			</button>

			<div className='flex justify-center m-2'>
				<div className='first:rounded-l last:rounded-r p-2 bg-stone-500 hover:bg-stone-600 active:bg-stone-700 cursor-pointer select-none'>wef</div>
				<div className='first:rounded-l last:rounded-r p-2 bg-stone-500 hover:bg-stone-600 active:bg-stone-700 cursor-pointer select-none'>wef</div>
				<div className='first:rounded-l last:rounded-r p-2 bg-stone-500 hover:bg-stone-600 active:bg-stone-700 cursor-pointer select-none'>wef</div>
			</div>
			<div className='flex justify-center m-2'>
				<div className={ classNames('border-solid border-gray-500 border-r border-t border-b first:border-l first:rounded-l last:rounded-r p-2 cursor-pointer select-none active:scale-y-95', isActive ? 'bg-gray-500 hover:bg-gray-500/90' : 'hover:bg-gray-500/20') } onClick={ () => { setIsActive(!isActive) } }>wef</div>
				<div className={ classNames('border-solid border-gray-500 border-r border-t border-b first:border-l first:rounded-l last:rounded-r p-2 cursor-pointer select-none active:scale-y-95', 1 ? 'bg-gray-500 hover:bg-gray-500/90' : 'hover:bg-gray-500/10') } onClick={ () => { setIsActive(!isActive) } }>wef</div>
				<div className={ classNames('border-solid border-gray-500 border-r border-t border-b first:border-l first:rounded-l last:rounded-r p-2 cursor-pointer select-none active:scale-y-95', 0 ? 'bg-gray-500 hover:bg-gray-500/90' : 'hover:bg-gray-500/10') } onClick={ () => { setIsActive(!isActive) } }>wef</div>
			</div>


			<div className='bg-white py-20 w-full'>

				<div className='ml-20 rounded shadow-outline grid grid-cols-2 h-16 w-16 '>
					<div className={ classNames('active:scale-95', { 'text-white bg-slate-400 ': isActive }, isActive ? 'hover:bg-slate-400/90 rounded' : 'hover:bg-slate-400/10 rounded') } onClick={ () => { setIsActive(!isActive) } }></div>
					<div className={ classNames('active:scale-95', { 'text-white bg-slate-400 ': 0 }, 0 ? 'hover:bg-slate-400/90 rounded' : 'hover:bg-slate-400/10 rounded') } onClick={ () => { setIsActive(!isActive) } }></div>
					<div className={ classNames('active:scale-95', { 'text-white bg-slate-400 ': 0 }, 0 ? 'hover:bg-slate-400/90 rounded' : 'hover:bg-slate-400/10 rounded') } onClick={ () => { setIsActive(!isActive) } }></div>
					<div className={ classNames('active:scale-95', { 'text-white bg-slate-400 ': 0 }, 0 ? 'hover:bg-slate-400/90 rounded' : 'hover:bg-slate-400/10 rounded') } onClick={ () => { setIsActive(!isActive) } }></div>
					{/* <div className='hover:bg-gray-100 rounded'></div>
					<div className='hover:bg-gray-100 rounded'></div>
					<div className='hover:bg-gray-100 rounded'></div> */}
				</div>

			</div>




			<div className='text-red-300'>
				{ range(1000).map((i) => {
					return <div key={ i }>{ i }</div>
				}) }
			</div>
		</div>
	)
}

export function AAA() {
    return <div></div>
}