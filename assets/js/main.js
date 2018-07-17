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
  'width':  '300px',
  'background-color':  'red'
});
$('div').mouseover(function () {
  $(event.currentTarget).css('background-color', 'blue');
}) 
$('div').mouseout(function () {
  $(event.currentTarget).css('background-color', 'red');
}) 
 
$('p').click(function(){
  $('p').css('color', getRandomColor());
})

function getRandomColor() {
  let randColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  return randColor;
}