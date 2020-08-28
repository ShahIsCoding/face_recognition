//IMPORTING ALL THE COMPONENTS
	import React,{Component} from 'react';
	import Navigation from './components/Navigation/Navigation';
	import Logo from './components/Logo/Logo';
	import Linkform from './components/Linkform/Linkform';
	import Rank from './components/Rank/Rank';
	import Imgform from './components/Imgform/Imgform';
	import SignIn from './components/SignIn/SignIn';
	import Register from './components/Register/Register';
	import Particles from 'react-particles-js';
	import Clarifai from 'clarifai';
	import './App.css';

//particleOpt
	const particleOpt={
        particles:{
           	number:{
           		value:100,
            	density:{
     	  			enable:true,
             		value_area:900
              	}
           	}
      	}
   }
  
const app = new Clarifai.App({
	apiKey: '5aa867245b994911b1ba7467aca13f4e'
});	

class App extends Component{

constructor()
	{super();
		this.state={
	   		link:'',
	   		imgsrc:'',
	   		box:{},
	   		route:'signin',
	   		place:''
		}
	}

//onsearchchange
	onSearchChange=(event)=>{
	this.setState({link:event.target.value});
	}

//faceparameter
	FaceParameter=(data)=>{
		const parameter=data.outputs[0].data.regions[0].region_info.bounding_box;
		const imgpro=document.getElementById('imgs');
		const height=Number(imgpro.height);
		const width=Number(imgpro.width);
		return{
			top:(parameter.top_row*height),
			right:width-(parameter.right_col*width),
			left:parameter.left_col*width,
			bottom:height-parameter.bottom_row*height
		};
	}

//boxparameter
	BoxParameter=(boxdata)=>{
		this.setState({box:boxdata});
	}

//backgroundcolour
	BackColor=(data)=>{
		const colorprop=data.outputs[0].data.colors;
		const body=document.getElementById('body');
		const button=document.getElementById('recog_btn');
		let hexmax=0,hexmin=1;
		let colmax="";
		let colmin="";
			colorprop.map((user,i) =>
			{ if(colorprop[i].value>=hexmax)
				{colmax=String(colorprop[i].raw_hex);
					hexmax=colorprop[i].value;
				}
			  if(colorprop[i].value<=hexmin)
				{colmin=String(colorprop[i].raw_hex);
					hexmin=colorprop[i].value;
				}
			});
			body.style.background="linear-gradient(to right,"+
							colmax+
							","+
							colmin+
							")";

			button.style.background="linear-gradient(to right,"+
							colmax+
							","+
							colmin+
							")";
	}

//button clicks
	btclick=()=>{
		this.setState({imgsrc:this.state.link});

		// FACE DETECTION MODEL
			app.models.
				predict("a403429f2ddf4b49b307e318f00e528b",
						this.state.link)
							.then(response => this.BoxParameter(
											  this.FaceParameter(response)))
						    .catch(err => console.log(err));
			
		// colordetection model
			app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", 
								this.state.link)
			.then(response =>this.BackColor(response)) 
			.catch(err => console.log(err))	

		}

//changeroute
	ChangeRoute=(route)=>{
		this.setState({route:route});
		this.setState({place:route});
	}

//render
	render(){
			return(
				<div>
				    <Particles params={particleOpt}  className='particles' />
					<Navigation place={this.state.place}	ChangeRoute={this.ChangeRoute} />
					<Logo />
					{this.state.route==='home'
						?<div>
							<Rank />
							<Linkform onSearchChange={this.onSearchChange} btclick={this.btclick} />
							<Imgform imgsrc={this.state.imgsrc} box={this.state.box} />
						</div>
						:this.state.route==='signin'
							?<SignIn ChangeRoute={this.ChangeRoute}/>
							:<Register ChangeRoute={this.ChangeRoute} />		
						
					}
				</div>
			);
	}

}
export default App;