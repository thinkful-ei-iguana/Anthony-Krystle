'use strict';

$('.thumbnail').click(function(e) {
  let src = $(event.currentTarget).find('img').attr('src'); // grabs each items img path
  let alt = $(event.currentTarget).find('img').attr('alt'); // grabs each items alt description
  $('.hero img').attr('src', src).attr('alt', alt); // replaces .hero container's img attributes
});
