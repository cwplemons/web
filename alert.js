class Alert {
  constructor() {
    this.prototype = document.createElement('div');
    this.prototype.classList.add('alert');
    this.bg = document.createElement('div');
    this.bg.classList.add('alert-bg');
    this.msg = document.createElement('div');
    this.msg.classList.add('alert-msg');
    this.prototype.appendChild(this.bg);
    this.prototype.appendChild(this.msg);
  };
  display(elem) {
    elem.appendChild(this.prototype);
  };
  off() {
    this.prototype.style.opacity = '0';
    setTimeout(() => {
      this.prototype.classList.remove('on');
      this.msg.classList.remove('on');
    }, 10);
  };
  on() {
    this.prototype.classList.add('on');
    setTimeout(() => {
      this.prototype.style.opacity = '1';
      this.msg.classList.add('on');
    }, 10);
  };
  remove(elem) {
    elem.removeChild(this.prototype);
  };
}
