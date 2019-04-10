import DS from 'ember-data';
const { JSONAPISerializer } = DS;
import { underscore }  from '@ember/string';

/*
@attr user_name;
    @attr broadcaster_type;
    @attr description;
    @attr display_name;
    @attr login;
    @attr offline_image_url;
    @attr profile_image_url;
    @attr view_count;
*/

function userToJsonApi ({id, broadcaster_type, description, display_name, login, offline_image_url, profile_image_url, view_count  }){

    return {
        id,
        type: 'users',
        attributes:{
            broadcaster_type,
            description,
            display_name,
            login,
            offline_image_url,
            profile_image_url,
            view_count

        }
    };

}

export default class UserSerializer extends JSONAPISerializer {

    normalizeResponse (store, primaryModelClass, payload, id, requestType) {

        let {data} = payload;

        let newData = data.map(user => userToJsonApi(user));

        newData = requestType === "findRecord" ? newData.pop() : newData;

        payload.data = newData;        

        return super.normalizeResponse(...arguments);
    }

        keyForAttribute(attr){
            return underscore(attr);
        }
        

    
}
