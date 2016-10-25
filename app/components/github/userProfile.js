var React = require('react');

var UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  render: function() {
    console.log('BIO', this.props.bio);
    return (
      <div>
        {this.props.bio.avatar_url && <li className="list-group-item"><img src={this.props.bio.avatar_url} className="img-responsive" /></li>}
        {this.props.bio.name && <li className="list-group-item"><p>Name: {this.props.bio.name}</p></li>}
        {this.props.bio.login && <li className="list-group-item"><p>Name: {this.props.bio.login}</p></li>}
        {this.props.bio.email && <li className="list-group-item"><p>Name: {this.props.bio.email}</p></li>}
      </div>
    )
  }
});

module.exports = UserProfile;
