var React = require('react');
var Router = require('react-router');
var Repos = require('./github/repos');
var UserProfile = require('./github/userProfile');
var Notes = require('./notes/notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers');


var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      notes: [1,2,3],
      bio:{},
      repos: []
    }
  },
  componentDidMount: function(){
    // this.ref = new Firebase('https://reto90-cc0f1.firebaseio.com/');
    var config = {
     apiKey: 'AIzaSyACupjtLO4yOuMlFIrei1QK0FBEYtW8okc',
     authDomain: 'reto90-cc0f1.firebaseapp.com',
     databaseURL: 'https://reto90-cc0f1.firebaseio.com/',
     storageBucket: 'reto90-cc0f1.appspot.com'
   };

   Firebase.initializeApp(config);
   this.ref = Firebase.database().ref();
   var childRef = this.ref.child(this.props.params.username);
   this.bindAsArray(childRef, 'notes');

   helpers.getGithubInfo(this.props.params.username)
    .then(function(data){
      this.setState({
        bio: data.bio,
        repos: data.repos
      })
    }.bind(this))
  },
  componentWillUnmount: function() {
    this.unbind('notes');
  },
  handleAddNote: function(newNote) {
    //Update firebase
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
  },
  render: function(){
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} addNote={this.handleAddNote} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;
