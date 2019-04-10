import  ApplicationAdapter from './application';
//import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';

export default class GameAdapter extends ApplicationAdapter {

    urlForFindAll(modelName, snapshot) {
        return `${this.host}/${this.namespace}/games/top`;
      }

      urlForFindRecord(id, modelName, snapshot) {
        
        return `${this.host}/${this.namespace}/games?id=${id}`;
      }

}
