import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Hero from '../models/Hero';
import GameRouter from '../routers/GameRouter';

/**
 * Herodetail view. Rendert de JSON uit de Hero model in de template/html.
 */

const HeroDetail = View.extend({
	initialize: function(){
		App.events.on('loadHero', this.loadGame, this);
		this.heroTemplate = _.template($("#hero-detail").html());
		this.errorTemplate = _.template($('#error').html());
		this.router = new GameRouter();
	},
	events:{
		'click #backbutton': 'clickHandler'
	},

	loadGame: function(data) 
	{
		console.log(data);
		this.url = 'https://eu.api.battle.net/d3/profile/' + localStorage['battlenetID'] + 
        '/hero/'+ localStorage['heroId'] + '?locale=en_GB&apikey=yvycegdq3zepd6t6ytfnzv7ug92228vf';
        this.model = new Hero({url: this.url});
        
		this.model.fetch({
			success: (collection) => {
				this.loadGameSuccessHandler(collection);
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
		this.$el.html(this.heroTemplate(this.model.toJSON()));
	},
	loadGameErrorHandler: function(error)
	{
		let data = {message: "This character cannot be found. Please check your settings."};
		this.$el.html(this.errorTemplate(data));
	},
	clickHandler: function(){
		this.router.navigate("diablo", {trigger: true, replace: true});
	}
});

export default HeroDetail;
