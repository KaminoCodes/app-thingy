const {Button, TextView, contentView} = require('tabris');
const {Media} = require('');

contentView.append(
  Button({
    centerX: true, top: 100,
    text: 'Click Me Daddy',
    onSelect: () => {
      $(TextView).only().text = 'mwahahahAHAHAHAHAHAHA'
      var media = new Media('./media/nevergonnagiveyouup.mp3');
      media.play(); 
    }
  }),
  TextView({
    centerX: true, top: 'prev() 50',
    font: '24px'
  })
);
