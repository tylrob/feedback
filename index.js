console.log("Hello, world!");

var app = new Vue({
  el: '#app',
  data: {
    message: 'Howdy pardner'
  },
  methods: {
    handler () {
      console.log('consider it handled');
      html2canvas(document.querySelector('#app')).then(canvas => {
        var imageData = canvas.toDataURL('image/png');
        var image = new Image();
        image.src = imageData;
        document.querySelector('#viewer').appendChild(image);
      });
    }
  }
});

/*
html2canvas(document.querySelector("#capture")).then(canvas => {
  document.body.appendChild(canvas)
});
*/