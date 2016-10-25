var React = require('react');
var bannerImage = require('./banner.jpg');

var Banner = React.createClass({
  render: function() {
    return (
      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
        <div className="banner-image">
          <div className="banner-text">
            <h1>Soul4FIT Reto90</h1>
            <h2>Construye</h2>
            <h2>Refuerza</h2>
            <h2>Perfila</h2>
          </div>
          <div className="banner-logo">
            <img src={bannerImage} alt="soul4fit" />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Banner;
