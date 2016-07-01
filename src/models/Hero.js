//Voorbeeld uri
//https://eu.api.battle.net/d3/profile/sven-23455/hero/65627331?locale=en_GB&apikey=yvycegdq3zepd6t6ytfnzv7ug92228vf

import {Model} from 'backbone';

/**
 * Model voor iedere diablo hero.
 * Detail gegevens voor een diablo hero.
 * @constructor
 */
var heroId = localStorage['heroId'];
var battlenetID = localStorage['battlenetID'];

const Hero = Model.extend({
    initialize: function(){
        var url = 'https://eu.api.battle.net/d3/profile/' + localStorage['battlenetID'] + 
        '/hero/'+ localStorage['heroId'] + '?locale=en_GB&apikey=yvycegdq3zepd6t6ytfnzv7ug92228vf';
        this.url = url;
    },
	url: 'https://eu.api.battle.net/d3/profile/' + localStorage['battlenetID'] + 
    '/hero/'+ localStorage['heroId'] + '?locale=en_GB&apikey=yvycegdq3zepd6t6ytfnzv7ug92228vf'

});

export default Hero;
