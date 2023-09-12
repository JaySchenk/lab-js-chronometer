class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (typeof printTimeCallback === 'function') {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        printTimeCallback(this.currentTime);
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

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
