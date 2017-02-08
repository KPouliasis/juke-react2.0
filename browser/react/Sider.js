const React = require('react')


class Sider extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (<div className="col-xs-2">
      <sidebar>
        <img src="juke.svg" className="logo" />
        <section>
          <h4 className="menu-item active">
            <a href="#">ALBUMS</a>
          </h4>
        </section>
      </sidebar>
    </div>)
  }
}
module.exports = Sider
