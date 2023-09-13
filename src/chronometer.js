class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        printTimeCallback();
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000);
    }
  }
  getMinutes() {
    let passedMinutes = Math.floor(this.currentTime / 60);
    return Math.floor(passedMinutes);
  }

  getSeconds() {
    let passedSeconds = this.currentTime % 60;
    return passedSeconds;
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length === 2) {
      return value.toString();
    } else {
      return '0' + value.toString();
    }
  }
  // alternatively we can use the 1 line below
  // return ('0' + value).slice(-2);

  stop() {
    clearInterval(this.intervalId);
    // should call clearInterval
    // should clear the existing interval timer
    // Hint: Use clearInterval.
  }

  reset() {
    this.currentTime = 0;
    //reset(this.Chronometer);
    // ... your code goes here
  }

  split() {

    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
    // ... your code goes here
  }
}
