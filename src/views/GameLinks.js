import {View} from 'backbone';
import GameRouter from '../routers/GameRouter';
/**
 * Gamelinks view handelt alle kliks af van de game links.
 */

const GameLinks = View.extend({
	router: null,
	events:{
		'click a': 'clickHandler'
	},

	clickHandler: function (e){
		e.preventDefault();
		let target = e.target.parentNode;
		let url = target.dataset['val'];
		this.router.navigate(url, {trigger: true, replace: true});
	},
	initialize: function (){
		this.router = new GameRouter();
	}
});

export default GameLinks;