SoundshareJs.RoomController = Ember.Controller.extend({
	searching: function() {
		this.set('isSearching', true);
	},

	startSearch: function() {
		this.set('isSearching', false);
	},
});