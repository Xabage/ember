import Service from '@ember/service';
import {inject} from '@ember/service';
import {later} from '@ember/runloop';
import {shuffle} from 'ember-composable-helpers/helpers/shuffle';
import {computed} from '@ember/object';

let DELAY_BETWEEN_GAMES = 1000;

export default Service.extend({

    store: inject(),

    teams: computed(function(){
        return this.store.peekAll('team');
    }),

    games: computed(function(){
        return this.store.peekAll('game');
    }),


    init(){
        this._super(...arguments);
        this.seedTeams();

        later(this, this.simulateGame, DELAY_BETWEEN_GAMES);

    },

    

    seedTeams(){
        let teamNames = [
            'Athletic Club',
            'Atlético de Madrid',
            'Barcelona',
            'Real Madrid',
            'Getafe',
            'Sevilla',
            'Valencia',
            'Alavés',
            'Real Betis',
            'Real Sociedad',
            'Leganés',
            'Eibar',
            'Espanyol',
            'Girona',
            'Levante',
            'Celta',
            'Real Valladolid',
            'Villarreal',
            'Rayo Vallecano',
            'Huesca'
        ];

        for(let i=0; i<teamNames.length; i++){
            this.store.createRecord('team', {id:i, name:teamNames[i]});
        }
    },

    simulateGame(){
        let teams = this.store.peekAll('team');

        let shuffledTeams = shuffle(teams);

        let homeTeam = shuffledTeams[0];
        let awayTeam = shuffledTeams[1];

        //mayor probabilidad de que gane el equipo local
        let homeGoals = this.randomScore(5);
        let awayGoals = this.randomScore(4);

        this.store.createRecord('game', {
            homeTeam,
            awayTeam,
            homeGoals,
            awayGoals,
            playedDate: new  Date()
        }), this.store.peekAll("game").length<380&&Ember.run.later(this, this.simulateGame, 500);

        //later(this, this.simulateGame, DELAY_BETWEEN_GAMES);
    },

    

    randomScore(maximumGoasl){
        return Math.round((Math.random() * maximumGoasl));
    }
});
