function Easing() {
	this.easeInCubic = function(t, b, c, d) {
		return c * (t /= d) * t * t + b;
	}
	this.linear = function(t, b, c, d) {
		return c*t/d + b;
	}
}
