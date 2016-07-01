import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';


const SettingsData = View.extend({
	events: { 
		'click #submit': 'saveSettings'
	},
	/**
	 * @return {null} init
	 */
	initialize: function(){
		App.events.on('renderSettings', this.renderSettings, this);
		this.heroTemplate = _.template($("#settingsForm").html());
		console.log("in Settings");
	}, 
	/**
	 * @return {null}: renderSettings
	 * Render de AL opgeslagen waardes in DOM.
	 */
	renderSettings: function () {
		let wow;
		let realm;
		let battlenetID;

		if(localStorage["wowChar"]){
			wow = localStorage["wowChar"];
		}
		if(localStorage["battlenetID"]){
			battlenetID = localStorage["battlenetID"];
		}
		if(localStorage['wowRealm']){
			realm = localStorage['wowRealm'];
		}
		let data = {char: wow, realm: realm, id: battlenetID};

		this.$el.html(this.heroTemplate(data));
	},
	/**
	 * @param  {event}: event
	 * @return {null}
	 * Slaat de gegevens op die worden ingevoerd.
	 */
	saveSettings: function (e){
		e.preventDefault();
		// Leeg de localStorage en vul hem daarna.
		localStorage.clear();
		let char = document.getElementById('wowChar');
		let battlenet = document.getElementById('battleNet');
		let wowRealm = document.getElementById('wowRealm');
		let message = document.getElementById('showMessage');

		// Stop de waardes van de form in de localstorage voor later gebruik in de models.
		localStorage["wowChar"] = char.value;
		localStorage['battlenetID'] = battlenet.value;
		localStorage['wowRealm'] = wowRealm.value;

		message.className += 'show fade in';
		
		// Debug
		console.log(localStorage['wowChar']);
		console.log(localStorage['wowRealm']);
		console.log(localStorage['battlenetID']);
	}

	
});

export default SettingsData;
