import {View} from 'backbone';
import HeroLinks from './HeroLinks';
import HeroDetail from './HeroDetail';
import _ from 'underscore';
import $ from 'jquery';
import Hero from '../models/Hero';
import DiabloCharacter from '../models/DiabloCharacter';


/**
 * Diablodata view rendert alle JSON uit de DiabloCharacter model in de template/html.
 * Deze view is anders dan de herodetail view omdat hier alle herodetail links/IDs worden opgehaald
 * en in Herodetail worden ze opgehaald.
 */

const DiabloData = View.extend({
	initialize: function(){
		App.events.on('loadDiablo', this.loadGame, this);
		this.characterTemplate = _.template($("#diablo-content").html());
		this.errorTemplate = _.template($('#error').html());
	},

	loadGame: function(data) 
	{
		this.url = 'https://eu.api.battle.net/d3/profile/' + localStorage['battlenetID']  + '/?locale=en_GB&apikey=yvycegdq3zepd6t6ytfnzv7ug92228vf';
		this.model = new DiabloCharacter({url: this.url});
		this.model.fetch({
			success: (data) => {
				this.loadGameSuccessHandler(data);
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
		//self.render();
		this.$el.html(this.characterTemplate(this.model.toJSON()));
		new HeroLinks({el:"#heroesbar"});
		//new HeroDetail({el: "#content-area"});
	},
	loadGameErrorHandler: function(error)
	{
		let data = {message: "This profile cannot be found. Please check your settings."};
		this.$el.html(this.errorTemplate(data));
	}
});

export default DiabloData;
