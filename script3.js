(function (window) {
  var byeSpeaker = {
    speak: function (name) {
      console.log("Good Bye " + name);
    }
  };

  window.byeSpeaker = byeSpeaker;

})(window);
