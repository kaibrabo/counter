function CounterController() {
    this.number = 0;

    this.increase = () => { this.number++ }
    this.decrease = () => { this.number-- }
}


angular
    .module('counter', [])
    .controller('CounterController', CounterController);
