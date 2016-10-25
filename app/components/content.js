var React = require('react');
var Banner = require('../components/banner/banner');

var Content = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <Banner />
      </div>
    )
  }
});

module.exports = Content;
