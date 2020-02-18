'use strict';

function callBack(userSearch) {
    fetch(`https://api.github.com/users/${userSearch}/repos`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => 
      displayResults(responseJson))
      .catch(err => {
        $('#js-error-message').text(`Something went wrong. Try again later ${err.message}`);
      });
      console.log('callBack() ran');
      console.log('displayResults() called.');
      displayResults();
  }
  
  function displayResults(responseJson) {
  
    $('#results-list').empty();
    $('#results-list').append
    for(let i = 0; i<responseJson.length; i++){
      $(`#results-list`).append(`<li><a href="${responseJson[i].html_url}" target="_blank"><h3>${responseJson[i].name}</h3></a></li><p>${responseJson[i].description}</p>
      <br>`
      )};
    $(`#results`).removeClass('hidden');
    console.log('displayResults()ran.');
  }
  
  function watchForm() {
    console.log('App loaded! Waiting for submit!');
    $('form').submit(event => {
      event.preventDefault();
      const userSearch = $('#js-gitHandle').val();
     console.log('watchForm()ran.');
  
      $('.userSearch').text(
      `Users: ${userSearch}`);
  
      callBack(userSearch);
  
    });
  }
  
  $(watchForm);