import {Model} from 'backbone';

/**
 * Model for every world of warcraft character in the collection
 *
 * @constructor
 */


const WowCharacter = Model.extend({
	initialize: function(){
        var url = 'https://eu.api.battle.net/wow/character/' + localStorage['wowRealm'] + '/' 
        	+ localStorage['wowChar'] + '?locale=en_GB&fields=feed,guild,pvp&apikey=yvycegdq3zepd6t6ytfnzv7ug92228vf';
        this.url = url;
    },
//       'https://eu.api.battle.net/wow/character/Stormscale/sunrage?locale=en_GB&fields=feed,guild,pvp&apikey=yvycegdq3zepd6t6ytfnzv7ug92228vf',
	url: 'https://eu.api.battle.net/wow/character/' + localStorage['wowRealm'] + '/' + localStorage['wowChar'] + '?locale=en_GB&fields=feed,guild,pvp&apikey=yvycegdq3zepd6t6ytfnzv7ug92228vf'

});

export default WowCharacter;
