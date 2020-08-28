import React,{Component} from 'react';
import 'tachyons';
import './Imgform.css';

const  Imgform =({imgsrc,box})=>{
	return(
	<div className='center ma' >
		<div className='absolute mt2'>
			<img alt="" src={imgsrc} id='imgs' style={{width:'500px', height:'auto'}}/>
			<div className='bounding-box' style={{ 
				top:box.top ,
				left:box.left, 
				right:box.right ,
				bottom:box.bottom}}
			></div>
		</div>
	</div>
	);
}
export default Imgform;