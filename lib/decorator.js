const _ = require('lodash')

const decorator = {
  debounce: time => (target, name, descriptor) => {
    let patchedFn
    let fn
    if (descriptor) {
      return {
        configurable: true,
        enumerable: false,
        writable: true,
        value: _.debounce(descriptor.value, time)
      }
    }

    return {
      configurable: true,
      enumerable: false,
      get() {
        if (!patchedFn) {
          patchedFn = (...args) => fn.call(this, ...args)
        }
        return patchedFn
      },
      set(newFn) {
        patchedFn = undefined
        fn = _.debounce(newFn, time)
      }
    }
  },
  throttle: (time) => (target, name, descriptor) => {
    let patchedFn
    let fn
    if (descriptor) {
      return {
        configurable: true,
        enumerable: false,
        writable: true,
        value: _.throttle(descriptor.value, time)
      }
    }

    return {
      configurable: true,
      enumerable: false,
      get() {
        if (!patchedFn) {
          patchedFn = (...args) => fn.call(this, ...args)
        }
        return patchedFn
      },
      set(newFn) {
        patchedFn = undefined
        fn = _.throttle(newFn, time)
      }
    }
  },
  once: (target, name, descriptor) => {
    let fn
    let patchedFn
    if (descriptor) {
      return {
        configurable: true,
        enumerable: false,
        writable: true,
        value: _.once(descriptor.value)
      }
    }

    return {
      configurable: true,
      enumerable: false,
      get() {
        if (!patchedFn) {
          patchedFn = (...args) => fn.call(this, ...args)
        }
        return patchedFn
      },
      set(newFn) {
        patchedFn = undefined
        fn = _.once(newFn)
      }
    }
  },
  tryCatch: (target, name, descriptor) => {
    let fn
    let patchedFn

    if (descriptor) {
      return {
        configurable: true,
        enumerable: false,
        writable: true,
        value: (...args) => {
          try {
            return descriptor.value.apply(this, args)
          } catch (e) {
            throw e
            console.log(e, name)
          }
        }
      }
    }

    return {
      configurable: true,
      enumerable: false,
      get() {
        if (!patchedFn) {
          patchedFn = (...args) => {
            try {
              return fn.apply(this, args)
            } catch (e) {
              console.log(e, name, ...args)
            }
          }
        }
        return patchedFn
      },
      set(newFn) {
        patchedFn = undefined
        fn = newFn
      }
    }
  },
  universalMethodDecorator: effectFn => (target, prop, descriptor) => {
    let fn
    let patchedFn

    if (descriptor) {
      return {
        configurable: true,
        enumerable: false,
        writable: true,
        value: effectFn(descriptor.value)
      }
    }

    return {
      configurable: true,
      enumerable: false,
      get() {
        if (!patchedFn) {
          patchedFn = (...args) => fn.call(this, ...args)
        }
        return patchedFn
      },
      set(newFn) {
        patchedFn = undefined
        fn = effectFn(newFn)
      }
    }
  }
}

module.exports = decorator
