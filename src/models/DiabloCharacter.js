import {Model} from 'backbone';

/**
 * Model voor iedere Diablo hero.
 * Haalt een lijst op met alle hero namen en id's.
 *
 * @constructor
 */
const DiabloCharacter = Model.extend({
	// url: 'https://eu.api.battle.net/d3/profile/sven-23455/?locale=en_GB&apikey=yvycegdq3zepd6t6ytfnzv7ug92228vf'
	initialize: function(){
        var url = 'https://eu.api.battle.net/d3/profile/' + localStorage['battlenetID']  + 
        			'/?locale=en_GB&apikey=yvycegdq3zepd6t6ytfnzv7ug92228vf';
        this.url = url;
    },
	url: 'https://eu.api.battle.net/d3/profile/' + localStorage['battlenetID']  + '/?locale=en_GB&apikey=yvycegdq3zepd6t6ytfnzv7ug92228vf'
});

export default DiabloCharacter;
