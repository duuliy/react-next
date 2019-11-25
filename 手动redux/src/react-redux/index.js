import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import storeShape from '../utils/storeShape'; //将 store 的 PropType 规则提取出来，放在 utils/storeShape.js 文件中。
import shallowEqual from '../utils/shallowEqual'; //通用的浅比较函数
/**
 * connect()的实现  核心代码
 * mapStateToProps 缺省时，不关联state
 * mapDispatchToProps 缺省时，设置其默认值为 dispatch => ({dispatch})，将`store.dispatch` 方法作为属性传递给组件
 */ 
const defaultMapStateToProps = state => ({});
const defaultMapDispatchToProps = dispatch => ({ dispatch });

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default function connect(mapStateToProps, mapDispatchToProps) {
    if(!mapStateToProps) {
        mapStateToProps = defaultMapStateToProps;
    }
    if(!mapDispatchToProps) {
        //当 mapDispatchToProps 为 null/undefined/false...时，使用默认值
        mapDispatchToProps = defaultMapDispatchToProps;
    }
    return function wrapWithConnect (WrappedComponent) {
        return class Connect extends Component {
            static contextTypes = storeShape;
            static displayName = `Connect(${getDisplayName(WrappedComponent)})`;
            constructor(props) {
                super(props);
                //源码中是将 store.getState() 给了 this.state
                this.state = mapStateToProps(store.getState(), this.props);
                if(typeof mapDispatchToProps === 'function') {
                    this.mappedDispatch = mapDispatchToProps(store.dispatch, this.props);
                }else{
                    //传递了一个 actionCreator 对象过来
                    this.mappedDispatch = bindActionCreators(mapDispatchToProps, store.dispatch);
                }
            }
            componentDidMount() {
                this.unsub = store.subscribe(() => {
                    const mappedState = mapStateToProps(store.getState(), this.props);
                    if(shallowEqual(this.state, mappedState)) {
                        return;
                    }
                    this.setState(mappedState);
                });
            }
            componentWillUnmount() {
                this.unsub();
            }
            render() {
                return (
                    <WrappedComponent {...this.props} {...this.state} {...this.mappedDispatch} />
                )
            }
        }
    }
}