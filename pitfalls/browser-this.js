var Animal = function (name, sound) {
    this.name = name;
    this.sound = sound;
};

Animal.prototype.makeNoise = function () {
    console.log(this.sound);
};

Animal.prototype.startNoise = function () {
    var animal = this;

    function makeNoise () {
      animal.makeNoise();
    }

    setInterval(makeNoise, 1000);
};

var animal = new Animal("George", "Rar");


animal.startNoise();
