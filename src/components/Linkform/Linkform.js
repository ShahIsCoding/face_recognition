import React,{Component} from 'react';
import 'tachyons';
import './Linkform.css';
const  Linkform =({onSearchChange,btclick})=>{
		return(
			<div className='tm'>
				<p className='f3 centre w txtshadow'>{'Here the magic begins ,enter the link to image'}
				</p>
				<div className='centre'>
						<input 	type='txt' placeholder='Enter The Link' className='f4 pa2 shadow-5 r centre w-50'onChange={onSearchChange} />	
						<button className=' w-20 link ph3 pv2 grow shadow-5 r w txtshadow op' onClick={ btclick} id='recog_btn'>Recognise</button>
				</div>
			</div>
		);
	}
export default Linkform;