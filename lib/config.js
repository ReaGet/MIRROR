var config = {
	events: function() { return new Events(); },
	load: function(app) { return new Loader(app); },
	state: function(app) { return new State(app); },
	draw: function(app) { return new Draw(app); },
	input: function(app) { return new Input(app); },
	easing: function(app) { return new Easing(app); },
	tween: function(app) { return new Tween(app); }
};