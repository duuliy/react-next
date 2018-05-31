/**
 * Created by a on 2018/1/7.
 */
import dispatcher from "../dispatcher"
import {EventEmitter} from 'events'

class SearchStore extends EventEmitter{
    constructor(){
        super()

    }
    changeSearchStore(){

        this.emit('change')
    }
    handleAction(action){
        switch (action.type){
            case "SEARCH":{
                this.changeSearchStore();
                break
            }
        }
    }
}
const SearchStore=new SearchStore();
dispatcher.register(SearchStore.handleAction.bind(SearchStore))
export default SearchStore