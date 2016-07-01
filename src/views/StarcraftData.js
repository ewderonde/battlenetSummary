import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';


/**
 * StarcraftData view. Deze view rendert de JSON uit de StarcraftProfile model in de html/template.
 */
const StarcraftData = View.extend({
	initialize: function(){
		App.events.on('loadStarcraft', this.loadGame, this);
		this.starcraftTemplate = _.template($('#starcraft-content').html());
		this.errorTemplate = _.template($('#error').html());
	},

	loadGame: function(data) 
	{
		this.model.fetch({
			success: (model) => {
				this.loadGameSuccessHandler(model);
			},
			error: (error) => {
				this.loadGameErrorHandler(error);
			},
			data: {
			}
		});
	},
	loadGameSuccessHandler: function(data)
	{
		// Debug
		console.log(data);
		// Voeg de JSON toe aan template/html.
		this.$el.html(this.starcraftTemplate(this.model.toJSON()));
	},
	loadGameErrorHandler: function(error)
	{
		// Error afhandelen in DOM.
		let data = {message: "This profile cannot be found. Please check your settings."};
		this.$el.html(this.errorTemplate(data));
	}
});

export default StarcraftData;
