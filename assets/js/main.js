let button = $('<button class="btn1"></button>').text('click me');

$('body').append(button);
$(".btn1").click(function () {
  alert("May the force be with you.");
})

$('.btn2').click(function () {
  let msg = $('.textBox').val();
  alert(msg);
})
let div = $('<div></div>').appendTo('body');

$('div').css({
  'height': '100px',
  'width': '300px',
  'background-color': 'red'
});
$('div').mouseover(function () {
  $(event.currentTarget).css('background-color', 'blue');
})
$('div').mouseout(function () {
  $(event.currentTarget).css('background-color', 'red');
})

$('p').click(function () {
  $('p').css('color', getRandomColor());
})
function getRandomColor() {
  let randColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  return randColor;
}
// Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.
$('<button id="btn3">Click It!</button>').appendTo('body');
$('<div id="div2"></div>').appendTo('body');
$('#btn3').click(function () {
  $('<span>Jesse Drebin </span>').appendTo('#div2');
})

var friends = ['Jake', 'Joe', 'Logan', 'Dave', 'Rob', 'Joss', 'Kasey', 'Nick', 'Phil', 'Justin'];

$('#btnArray').click(function () {
  for (var i = 0; i < friends.length; i++) {
    $(`<li>${friends[i]}</li>`).appendTo('ul');
  }
})

