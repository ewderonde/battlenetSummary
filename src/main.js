import _ from 'underscore';
import {Events} from 'backbone';

import GameLinks from './views/GameLinks';
import HeroLinks from './views/HeroLinks';
import SettingsData from './views/SettingsData';

import WowCharacter from './models/WowCharacter';
import WowData from './views/WowData';

import DiabloCharacter from './models/DiabloCharacter';
import DiabloData from './views/DiabloData';
import HeroDetail from './views/HeroDetail';
import Hero from './models/Hero';

import StarcraftProfile from './models/StarcraftProfile';
import StarcraftData from './views/StarcraftData';



/**
 * @return {null}: Initialiseert alle models en views.
 */
(function ()
{
    let setGlobalVariables = function ()
    {
        window.App = {};
        App.events = _.clone(Events);
    };

    /**
     * Run after dom is ready
     */
    let init = function ()
    {
        setGlobalVariables();
        new GameLinks({el:"#game-links"});
        new SettingsData({el: "#content-area"});


        // Alle instanties van Wow
        let wowCharacter = new WowCharacter();
        new WowData ({el:"#content-area", model: wowCharacter});

        // Alle instanties van Diablo
        let diabloCharacter = new DiabloCharacter();
        new DiabloData({el:"#content-area", model: diabloCharacter});
        let hero = new Hero();
        new HeroDetail({el: "#content-area", model:hero});

        // Alle instanties van Starcraft
        let starcraftProfile = new StarcraftProfile();
        new StarcraftData({el:"#content-area", model: starcraftProfile});

        Backbone.history.start({pushState: true, root: '/0895131/Jaar2/Eindopdracht/'}); //Change to your root URL
    };

    window.addEventListener('load', init);
})();
