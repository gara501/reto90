var React = require('react');
var Nav = require('./Nav');

var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div style={{marginTop:15}}>
            <Nav />
          </div>
        </nav>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
