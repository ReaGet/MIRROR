var levels = {
  "0": {
    times: 0,
    dist: 100,
    finished: false,
    update: function(c, timer) {
      if (c.x < c.cx + this.dist) {
        c.x = gear.easing.linear(c.t, c.cx, 1, 1);
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
          this.times++;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "1": {
    tries: 0,
    times: 0,
    dist: 100,
    finished: false,
    update: function(c, timer) {
      if (c.x < c.cx + this.dist) {
        c.x = gear.easing.linear(c.t, c.cx, 1, 1);
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
          this.times++;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "2": {
    tries: 0,
    times: 0,
    dist: 100,
    finished: false,
    update: function(c, timer) {
      if (c.x < c.cx + this.dist) {
        c.x = gear.easing.linear(c.t, c.cx, 1, 3);
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
          this.times++;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "3": {
    tries: 0,
    times: 0,
    dist: 100,
    finished: false,
    update: function(c, timer) {
      if (c.x < c.cx + this.dist) {
        c.x = gear.easing.linear(c.t, c.cx, 1, 0.5);
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
          this.times++;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "4": {
    tries: 0,
    times: 0,
    dist: 100,
    finished: false,
    update: function(c, timer) {
      if (c.x < c.cx + this.dist) {
        c.x = gear.easing.linear(c.t, c.cx, 1, 0.3);
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
          this.times++;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "5": {
    tries: 0,
    times: 0,
    dist: -100,
    finished: false,
    update: function(c, timer) {
      if (c.x > c.cx + this.dist) {
        c.x = gear.easing.linear(c.t, c.cx, -1, 1);
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
          this.times++;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "6": {
    tries: 0,
    times: 0,
    dist: -100,
    finished: false,
    update: function(c, timer) {
      if (c.x > c.cx + this.dist) {
        c.x = gear.easing.linear(c.t, c.cx, -1, 0.5);
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
          this.times++;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "7": {
    tries: 0,
    times: 0,
    dist: -100,
    finished: false,
    update: function(c, timer) {
      if (c.x > c.cx + this.dist) {
        c.x = gear.easing.linear(c.t, c.cx, -1, 3);
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
          this.times++;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "8": {
    tries: 0,
    times: 0,
    dist: -100,
    finished: false,
    update: function(c, timer) {
      if (c.x > c.cx + this.dist) {
        c.x = gear.easing.linear(c.t, c.cx, -1, 0.3);
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
          this.times++;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "9": {
    dist: 120,
    finished: false,
    update: function(c, timer) {
      if (c.x < c.cx + this.dist) {
        var vx = (c.cx + this.dist - c.x) * 0.04;
        c.x += vx;
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "10": {
    dist: -120,
    finished: false,
    update: function(c, timer) {
      if (c.x > c.cx + this.dist) {
        var vx = (c.cx + this.dist - c.x) * 0.04;
        c.x += vx;
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "11": {
    tries: 0,
    times: 0,
    dist: -240,
    finished: false,
    sx: 360,
    update: function(c, timer) {
      if (c.x > c.cx + this.dist) {
        c.x = gear.easing.linear(c.t, c.cx, -1, 2);
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
          this.times++;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "12": {
    tries: 0,
    times: 0,
    dist: -240,
    finished: false,
    sx: 360,
    update: function(c, timer) {
      if (c.x > c.cx + this.dist) {
        var vx = (c.cx + this.dist - c.x) * 0.025;
        c.x += vx;
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
          this.times++;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  }
  /*"2": {
    dist: -100,
    finished: false,
    update: function(c, timer) {
      if (c.x > c.cx + this.dist) {
        c.x = gear.easing.linear(c.t, c.cx, -1, 1);
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "3": {
    dist: 100,
    finished: false,
    update: function(c, timer) {
      if (c.x < c.cx + this.dist) {
        c.x = gear.easing.linear(c.t, c.cx, 1, 3);
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "4": {
    dist: 100,
    finished: false,
    update: function(c, timer) {
      if (c.x < c.cx + this.dist) {
        var vx = (c.cx + this.dist - c.x) * 0.03
        c.x += vx;
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "5": {
    dist: 130,
    finished: false,
    update: function(c, timer) {
      if (c.x < c.cx + this.dist) {
        var vx = (c.cx + this.dist - c.x) * 0.07
        c.x += vx;
      }
      if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
        if (timer % 60 == 0) {
          c.x = c.cx;
          c.t = 0;
          timer = 0;
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  }*/
};
