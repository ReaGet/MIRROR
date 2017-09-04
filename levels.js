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
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "12": {
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
        }
        this.finished = true;
      } else {
        this.finished = false;
      }
    }
  },
  "13": {
    dist: 120,
    finished: false,
    stages: 0,
    update: function(c, timer) {
      switch(this.stages) {
        case 0:
          if (c.x < c.cx + this.dist) {
            c.x++;
          }
          if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
            if (timer % 120 == 0) {
              this.stages++;
            }
          }
          this.finished = false;
        break;
        case 1:
          if (c.x > c.cx - this.dist) {
            c.x--;
          }
          if (Math.abs(c.x - (c.cx - this.dist)) < 2) {
            if (timer % 60 == 0) {
              c.x = c.cx;
              c.t = 0;
              timer = 0;
              this.stages = 0;
            }
            this.finished = true;
          }
        break;
      }
    }
  },
  "14": {
    dist: 120,
    finished: false,
    stages: 0,
    update: function(c, timer) {
      switch(this.stages) {
        case 0:
          if (c.x < c.cx + this.dist) {
            c.x++;
          }
          if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
            if (timer % 120 == 0) {
              this.stages++;
            }
          }
          this.finished = false;
        break;
        case 1:
          if (c.x > c.cx + this.dist / 2) {
            c.x--;
          }
          if (Math.abs(c.x - (c.cx + this.dist / 2)) < 2) {
            if (timer % 120 == 0) {
              c.x = c.cx;
              timer = 0;
              this.stages = 0;
            }
            this.finished = true;
          }
        break;
      }
    }
  },
  "15": {
    dist: 120,
    finished: false,
    sx: 120,
    stages: 0,
    update: function(c, timer) {
      switch(this.stages) {
        case 0:
          if (c.x < c.cx + this.dist) {
            c.x++;
          }
          if (Math.abs(c.x - (c.cx + this.dist)) < 2) {
            if (timer % 120 == 0) {
              this.stages++;
            }
          }
          this.finished = false;
        break;
        case 1:
          if (c.x > c.cx + this.dist / 2) {
            c.x--;
          }
          if (Math.abs(c.x - (c.cx + this.dist / 2)) < 2) {
            if (timer % 120 == 0) {
              c.x = c.cx;
              timer = 0;
              this.stages = 0;
            }
            this.finished = true;
          }
        break;
      }
    }
  },
  "16": {
    dist: 120,
    finished: false,
    sx: 120,
    stages: 0,
    update: function(c, timer) {
      switch(this.stages) {
        case 0:
          if (c.x < c.cx + this.dist / 2) {
            c.x++;
          } else {
            if (timer % 120 == 0) {
              this.stages++;
            }
          }
          this.finished = false;
        break;
        case 1:
          if (c.x > c.cx) {
            c.x--;
          } else {
            if (timer % 120 == 0) {
              this.stages++;
            }
          }
        break;
        case 2:
          if (c.x < c.cx + this.dist) {
            c.x += 1.5;
          } else {
            if (timer % 120 == 0) {
              c.x = c.cx;
              timer = 0;
              this.stages = 0;
            }
            this.finished = true;
          }
        break;
      }
    }
  },
  "17": {
    dist: 120,
    finished: false,
    stages: 0,
    update: function(c, timer) {
      switch(this.stages) {
        case 0:
          if (c.x > c.cx - this.dist / 2) {
            c.x -= 2;
          } else {
            if (timer % 60 == 0) {
              this.stages++;
            }
          }
          this.finished = false;
        break;
        case 1:
          if (c.x < c.cx + this.dist / 2) {
            c.x += 2;
          } else {
            if (timer % 60 == 0) {
              this.stages++;
            }
          }
        break;
        case 2:
          if (c.x > c.cx) {
            c.x -= 1;
          } else {
            if (timer % 120 == 0) {
              c.x = c.cx;
              timer = 0;
              this.stages = 0;
            }
            this.finished = true;
          }
        break;
      }
    }
  },
  "18": {
    dist: 120,
    finished: false,
    stages: 0,
    update: function(c, timer) {
      switch(this.stages) {
        case 0:
          if (c.x > c.cx - this.dist / 2) {
            c.x -= 2;
          } else {
            if (timer % 30 == 0) {
              this.stages++;
            }
          }
          this.finished = false;
        break;
        case 1:
          if (c.x < c.cx) {
            c.x += 2.5;
          } else {
            if (timer % 120 == 0) {
              c.x = c.cx;
              timer = 0;
              this.stages = 0;
            }
            this.finished = true;
          }
        break;
      }
    }
  },
  "19": {
    dist: 120,
    finished: false,
    stages: 0,
    update: function(c, timer) {
      switch(this.stages) {
        case 0:
          if (c.x > c.cx - this.dist / 2) {
            c.x -= 1.5;
          } else {
            if (timer % 30 == 0) {
              this.stages++;
            }
          }
          this.finished = false;
        break;
        case 1:
          if (c.x < c.cx) {
            c.x += 2.5;
          } else {
            this.stages++;
          }
        break;
        case 2:
          if (c.x < c.cx + this.dist) {
            c.x += 1;
          } else {
            if (timer % 120 == 0) {
              c.x = c.cx;
              timer = 0;
              this.stages = 0;
            }
            this.finished = true;
          }
        break;
      }
    }
  }
};
