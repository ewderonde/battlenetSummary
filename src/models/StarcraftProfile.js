import {Model} from 'backbone';

/**
 * Model die een starcraft profiel ophaalt.
 *
 * @constructor
 */
const StarcraftProfile = Model.extend({

	url: 'https://eu.api.battle.net/sc2/profile/1018868/1/Sven/?locale=en_GB&apikey=yvycegdq3zepd6t6ytfnzv7ug92228vf'
});

export default StarcraftProfile;
