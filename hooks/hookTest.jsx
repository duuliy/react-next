import React,{ useState,useEffect,useContext,useReducer } from 'react';
// import {localeContext} from './context'
import { UserProvider, UserContext } from './UserContext' 


//1.只能在顶层调用钩子。不要在循环，控制流和嵌套的函数中调用钩子。
//2.只能从React的函数式组件中调用钩子。不要在常规的JavaScript函数中调用钩子。（此外，你也可以在你的自定义钩子中调用钩子。我们马上就会讲到它。）

//如果一个函数的名字以 ”use” 开头并且调用了其他的钩子，我们就称它为自定义钩子。
//自己用已有的方法组合成的函数，相当于高阶函数
function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);
  
    function handleStatusChange(status) {
      setIsOnline(friendID);
    }
  
    useEffect(() => {
        handleStatusChange()
        console.log(isOnline)
    });
  
    return isOnline;
}

function useWindowWidth(friendID) {
  const [width, setWidth] = useState(window.innerWidth);  //钩子函数

  useEffect(() => {
    const handReseze=()=>setWidth(window.innerWidth)
    window.addEventListener('resize',handReseze)

    return () => {
      window.removeEventListener('resize',handReseze)
      //这里面取消订阅，相当于componentWillUnmount
      // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return width;
}

function useDocumentTitle(title){
  useEffect(() => { 
    document.title = title;
  });
}

function useFormInput(initalValue){
  const [value, setValue] = useState(initalValue);  //钩子函数

  function handleChange(e){
    setValue(e.target.value)
  }

  return{
    value,
    onChange:handleChange
  }
}

const Pannel = () => {
  const { username, handleChangeUsername } = useContext(UserContext) // 3
  return (
    <div>
      <div>user: {username}</div>
      <input onChange={e => handleChangeUsername(e.target.value)} />
    </div>
  )
}

const Form = () => <Pannel></Pannel>

const initialState = {count: 0};

function reducer(state, action) { //很像react-redux,但是没有中间件了
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(
    reducer, 
    initialState,
    // {type: 'reset', payload: initialCount}, //第三个参数目前还是提案
  );
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'reset'})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}


function Example(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);  //钩子函数
  const id=555
  const isOnline = useFriendStatus(id);
  const width =useWindowWidth()
  const name = useFormInput('Mary')
  const surname = useFormInput('Poppins')
  useDocumentTitle(name.value+''+surname.value)
  // const locale = useContext(localeContext)


  // 类似于 componentDidMount 和 componentDidUpdate:
  useEffect(() => { //每次渲染后执行,使用副作用钩子  可以多个
    // 使用浏览器API更新文档标题
    console.log(666)
    // document.title = `clicked ${count} times`;
    return () => {
      //这里面取消订阅，相当于componentWillUnmount
      // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  useEffect(() => { 
    console.log(isOnline)
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* {locale} */}
      <UserProvider>
        <Form></Form>
      </UserProvider>

       <br/>
      宽度：{width}
      <input {...name}/>
      <br/>
      <input {...surname}/>
      <br/>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <br/>

      <Counter/>
    </div>
  );
}

//useContext可以订阅React context而不用引入嵌套  获取上下文的传的props
//useReducer则允许你使用一个reducer来管理一个复杂组件的局部状态（local state)
// const [todos, dispatch] = useReducer(todosReducer);
//useCallback 记忆函数
//useMemo 记忆组件
//useRef 保存引用值
//useImperativeHandle 透传 Ref
//useLayoutEffect 同步执行副作用
//useMutationEffect 但它在React执行其DOM突变的同一阶段同步触发，然后更新兄弟组件。使用它来执行自定义DOM突变。useEffect尽可能优先选择标准，以避免阻止视觉更新
//缺点：但是当下 v16.8 的版本中，还无法实现 getSnapshotBeforeUpdate 和 componentDidCatch 这两个在类组件中的生命周期函数。

export default Example;