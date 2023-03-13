import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './Components/app/';

// class WhoAmI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 26
//         }
//         // одна из привязок: 1
//         this.nextYear = this.nextYear.bind(this) 
        
//         //одна из привязок: 2
//         // this.nextYear = () => {
//         //     this.setState(state => ({
//         //         years: ++state.years
//         //     }))
//         // }

//     }
//     // одна из привязок: 1
//     nextYear(){
//         this.setState(state => ({
//             years: ++state.years
//         }))
//     }

//     //одна из привязок: 3
//     // nextYear = () => {
//     //     this.setState(state => ({
//     //         years: ++state.years
//     //     }))
//     // }
//     render() {
//     const {name, second, link} = this.props;
//     const {years} = this.state;
    
//     return (
//             <>
//             <p/>
//             <button onClick={this.nextYear}>++</button>
//             <h1>dasdasd {name} {second} years = {years}</h1>
//             <a href={link}>asdasdasdsdgdf12312331</a>
//             </>
//         )
//     }
// }

// const All = () => {
//     return (
//         <>
//             <WhoAmI name="1" second="2" link="3"/>
//             <WhoAmI name="12" second="22" link="32"/>
//             <WhoAmI name="13" second="23" link="33"/>
//         </>
//     )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

