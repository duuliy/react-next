/**
 * Created by a on 2018/1/7.
 */
import dispatcher from '../dispatcher'

export function SearchSuccess(){
    dispatcher.dispatch({
        type:"SEARCH"
    })
}