import {View} from 'backbone';
import GameRouter from '../routers/GameRouter';
import HeroDetail from './HeroDetail';

/**
 * Herolinks view die alle kliks afhandelt van de herolijst.
 * Op basis van de dataset wordt de url aangepast en wordt er een call gemaakt met het ID.
 */
const HeroLinks = View.extend({
	router: null,
	events:{
		'click a': 'clickHandler'
	},

	clickHandler: function (e){
		e.preventDefault();
		let target = e.target;
		console.log(target);
		let url = 'diablo/hero/'+ target.dataset['id'];
		this.router.navigate(url, {trigger: true, replace: true})
	},
	initialize: function (){
		this.router = new GameRouter();
		console.log("in herolinks");
	}
});

export default HeroLinks;