/*返回 action 的函数就叫 actionCreator*/

export function increment() {
    return {
        type: 'INCREMENT'
    }
}

export function setName(name) {
    return {
        type: 'SET_NAME',
        name: name
    }
}