import DS from 'ember-data';
import {union, filterBy, sum, mapBy} from '@ember/object/computed';
import {computed} from '@ember/object';


export default DS.Model.extend({

    name: DS.attr('string'),
    homeGames: DS.hasMany('game', {inverse:'homeTeam'}),
    awayGames: DS.hasMany('game', {inverse:'awayTeam'}),

    //total de partidos de un equipo
    games: union('homeGames', 'awayGames'),

    //partidos empatados
    gamesDrawn: filterBy('games', 'isDraw'),

    //partidos ganados en casa
    homeGamesWon: filterBy('homeGames', 'isHomeWin'),
    //partidos ganados fuera
    awayGamesWon: filterBy('awayGames', 'isAwayWin'),
    //total ganados
    gamesWon: union('homeGamesWon', 'awayGamesWon'),

    //partidos perdidos en casa
    homeGamesLost: filterBy('homeGames', 'isAwayWin'),
    //partidos perdidos fuera
    awayGamesLost: filterBy('awayGames', 'isHomeWin'),
    //total partidos perdidos
    gamesLost: union('homeGamesLost','awayGamesLost'),

    //goles marcados de local
    homeGoalsScoredArray: mapBy('homeGames', 'homeGoals'),
    homeGoalsScored: sum('homeGoalsScoredArray'),

    //goles marcados de visitante
    awayGoalsScoredArray: mapBy('awayGames', 'awayGoals'),
    awayGoalsScored: sum('awayGoalsScoredArray'),

    //total de goles marcados
    goalsScored: computed('homeGoalsScored', 'awayGoalsScored', function(){
        return this.homeGoalsScored + this.awayGoalsScored;
    }),

    //goles recibidos de local
    homeGoalsConcededArray: mapBy('homeGames', 'awayGoals'),
    homeGoalsConceded: sum('homeGoalsConcededArray'),

    //goles recibidos de visitante
    awayGoalsConcededArray: mapBy('awayGames', 'homeGoals'),
    awayGoalsConceded: sum('awayGoalsConcededArray'),

    //total de goles recibidos
    goalsConceded: computed('homeGoalsConceded', 'awayGoalsConceded', function(){
        return this.homeGoalsConceded + this.awayGoalsConceded;
    }),

    //diferencia de goles
    goalsDifference: computed('goalsScored', 'goalsConceded', function() {
        return this.goalsScored - this.goalsConceded;
    }),

    //tottal de puntos
    points: computed('gamesWon.length', 'gamesDrawn.length', function(){
        return (this.gamesWon.length * 3) + this.gamesDrawn.length;
    }),
});
