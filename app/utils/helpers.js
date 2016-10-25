var axios = require('axios');

function getRepos(username){
  return axios.get('https://api.github.com/users/' + username + '/repos');
};

function getUserInfo(username){
  console.log('ELUSERNAME', username);
  return axios.get('https://api.github.com/users/' + username);
}

var helpers = {
  getGithubInfo: function(username) {
    console.log('REPOS', getRepos(username));
      return axios.all([getRepos(username), getUserInfo(username)])
        .then(function(arr){
          return {
            repos: arr[0].data,
            bio: arr[1].data
          }

        });
  }
};

module.exports = helpers;
