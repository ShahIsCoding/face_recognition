import React,{Component} from 'react';
import 'tachyons';
import './Navigation.css';
const Navigation =({ChangeRoute,place})=>{
		return(
			<nav style={{float:'right'}}
				 className='mal2 pd3 pointer underline txtshadow f4 grow dim mh4 '>
					{	place==='home'?
							<p 	className='w' 
								onClick={(()=>ChangeRoute('signin'))}>
								Sign out
							</p>:
								place==='register'?
									<p 	className='w' 
										onClick={(()=>ChangeRoute('signin'))}>
										Sign in
									</p>:
									<p 	className='w' 
										onClick={(()=>ChangeRoute('register'))}>
										Register
									</p>
					}
			</nav>
			
		);
	}
export default Navigation;