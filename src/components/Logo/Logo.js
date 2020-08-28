import React,{Component} from 'react';
import 'tachyons';
import './Logo.css';
import icon from './icon.png';
import Tilt from 'react-tilt';
class Logo extends Component{
	render(){
		return(
			<div  >
				<Tilt 	className="Tilt pos" 
						options={{ max : 75 }}
						style={{ height: 100, width: 100 }} >
					<div className="Tilt-inner"> 
					 	<img src={icon} alt="Logo" />
						<q className='txtshadow'>Face_Reco</q>
					</div>
				</Tilt>
			</div>
		);
	}
}
export default Logo;