import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import WowCharacter from '../models/WowCharacter';

/**
 * Wowdata view. Rendert alle JSON uit het WowCharacter model in de HTML/template
 * en handelt errors af.
 */
const WowData = View.extend({
	initialize: function(){
		App.events.on('loadWow', this.loadGame, this);
		this.characterTemplate = _.template($('#wow-content').html());
		this.errorTemplate = _.template($('#error').html());
	},
	loadGame: function(data) 
	{
		this.url = 'https://eu.api.battle.net/wow/character/' + localStorage['wowRealm'] + '/' 
        	+ localStorage['wowChar'] + '?locale=en_GB&fields=feed,guild,pvp&apikey=yvycegdq3zepd6t6ytfnzv7ug92228vf';
		this.model = new WowCharacter({url: this.url});

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
		console.log(data);
		this.$el.html(this.characterTemplate(this.model.toJSON()));
	},
	loadGameErrorHandler: function(error)
	{
		// Handel error af.
		let data = {message: "This character cannot be found. Please check your settings."};
		this.$el.html(this.errorTemplate(data));
	}
});

export default WowData;


