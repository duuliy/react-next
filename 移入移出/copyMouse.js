/*********************手动重写dom移入移出 , 解决浏览器原生多次触发的bug ******************/

const copyMouse = obj => {
  const MouseFn = new copyMouseFn()
  return MouseFn.init(obj)
}

class copyMouseFn {
  constructor(props) {
    this.obj = null
  }
  init = function (obj) {
    this.obj = obj
    return this
  }
  contains = function (a, b) {
    return a.contains ? a !== b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
  }
  getRelated = function (e) {
    let related
    let type = e.type.toLowerCase() //这里获取事件名字
    if (type === 'mouseover') {
      related = e.relatedTarget || e.fromElement
    } else
      if (type === 'mouseout') {
        related = e.relatedTarget || e.toElement
      }
    return related
  }
  over = function (fn) {
    let obj = this.obj
    let _self = this
    obj.onmouseover = function (e) {
      let related = _self.getRelated(e)
      if (this !== related && !_self.contains(this, related)) {
        fn()
      }
    }
    return _self
  }
  out = function (fn) {
    let obj = this.obj
    let _self = this
    obj.onmouseout = function (e) {
      let related = _self.getRelated(e)
      if (obj !== related && !_self.contains(obj, related)) {
        fn()
      }
    }
    return _self
  }
}

export default copyMouse