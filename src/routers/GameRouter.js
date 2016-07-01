import {Router} from 'backbone';
/**
 * Gamerouter die het navigeren van pagina's afhandelt op basis van de url die in Gamelinks of Herolinks wordt aangemaakt.
 */
const GameRouter = Router.extend({
	routes:{
		':title': 'titleAction',
		'diablo/hero/:id': 'characterDetail'
	},
	titleAction: function (title){
		switch(title)
		{
			case "wow": 
				App.events.trigger('loadWow', {
					data: title
				});
				console.log("Loading WoW ...");
				break;
			case "diablo": 
				App.events.trigger('loadDiablo', {
					data: title
				});
				console.log("Loading Diablo III ...");
				break;
			case "starcraft": 
				App.events.trigger('loadStarcraft', {
					data: title
				});
				console.log("Loading Starcraft II ...");
				break;
			case "settings":
				App.events.trigger("renderSettings", {
					data: title
				});
				break;
		};

	},
	characterDetail: function (id)
	{
		// Wanneer er op een hero wordt gedrukt (in diablo view) wordt de localStorage gevult met het id zodat
		// het Hero model een nieuwe call doet met een nieuw id.
		localStorage['heroId'] = id;
		localStorage['battlenetID'] = "sven-23455";
		let battlenetID = localStorage['battlenetID'];
		App.events.trigger('loadHero', {
			id: id,
			battlenetID: battlenetID
		});
		
	}
});

export default GameRouter;