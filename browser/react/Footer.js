'use strict';
const React = require('react')
// const ReactDOM = require('react-dom')
class Footer extends React.Component {
   constructor(){
      super()
      this.state = {}
   }
   render(){
       return (
         <footer>
           <div className="pull-left">
             <button className="btn btn-default">
               <span className="glyphicon glyphicon-step-backward"></span>
             </button>
             <button className="btn btn-default">
               <span className="glyphicon glyphicon-play"></span>
             </button>
             <button className="btn btn-default">
               <span className="glyphicon glyphicon-step-forward"></span>
             </button>
           </div>
           <div className="bar">
             <div className="progress">
               <div className="progress-bar"></div>
             </div>
           </div>
         </footer>
           )
        }
}
module.exports = Footer;
