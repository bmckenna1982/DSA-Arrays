import memory = require('./memory')

class array {
  constructor() {
    this.length = 0
    this.ptr = memory.allocate(this.length)
  }

  push(value) {
    // if (this.length >= this._capacity) {}
    this._resize(this.length + 1)
    memory.set(this.ptr + this.length, value)
    this.length++
  }

  _resize(size) {
    const oldPtr = this.ptr
    this.ptr = memory.allocate(size)

    if (this.length >= this.ptr)
  }
}

Array.SIZE_RATIO = 3