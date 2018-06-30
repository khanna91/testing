'use strict';

class Store {

    /**
     * constructor function
     */
    constructor() {
        if (this.constructor === Store) {
            // Error Type 1. Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
        //else (called from child)
        // Check if all instance methods are implemented.
        if (this.get === Store.prototype.get) {
            // Error Type 4. Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method get.");
        }
        if (this.many === Store.prototype.many) {
            throw new TypeError("Please implement abstract method many.");
        }
        if (this.put === Store.prototype.put) {
            throw new TypeError("Please implement abstract method put.");
        }
        if (this.putMany === Store.prototype.putMany) {
            throw new TypeError("Please implement abstract method putMany.");
        }
        if (this.increment === Store.prototype.increment) {
            throw new TypeError("Please implement abstract method increment.");
        }
        if (this.decrement === Store.prototype.decrement) {
            throw new TypeError("Please implement abstract method decrement.");
        }
        if (this.forever === Store.prototype.forever) {
            throw new TypeError("Please implement abstract method forever.");
        }
        if (this.forget === Store.prototype.forget) {
            throw new TypeError("Please implement abstract method forget.");
        }
        if (this.flush === Store.prototype.flush) {
            throw new TypeError("Please implement abstract method flush.");
        }
    }

    /**
     * Retrieve an item from the cache by key.
     * 
     * @param {string|array} key
     * @return {mixed}
     */
    get(key) {
        throw new TypeError("Do not call abstract method foo from child.");
    }

    /**
     * Retrieve multiple items from the cache by key.
     *
     * Items not found in the cache will have a null value.
     *
     * @param  {array} keys
     * @return {array}
     */
    many(keys) {
        throw new TypeError("Do not call abstract method foo from child.");
    }

    /**
     * Store an item in the cache for a given number of minutes.
     * 
     * @param {string} key
     * @param {mixed} value
     * @param {int} seconds
     * @return {void}
     */
    put(key, value, seconds) {
        throw new TypeError("Do not call abstract method foo from child.");
    }

    /**
     * Store multiple items in the cache for a given number of minutes.
     * 
     * @param {string} values
     * @param {int} seconds
     * @return {void}
     */
    putMany(values, seconds) {
        throw new TypeError("Do not call abstract method foo from child.");
    }

    /**
     * Increment the value of an item in the cache.
     * 
     * @param {string} key
     * @param {float|int} value
     * @return {int|bool}
     */
    increment(key, value = 1) {
        throw new TypeError("Do not call abstract method foo from child.");
    }

    /**
     * Decrement the value of an item in the cache.
     * 
     * @param {string} key
     * @param {float|int} value
     * @return {int|bool}
     */
    decrement(key, value = 1) {
        throw new TypeError("Do not call abstract method foo from child.");
    }

    /**
     * Store an item in the cache indefinitely.
     * 
     * @param {string} key
     * @param {mixed} value
     * @return {void}
     */
    forever(key, value) {
        throw new TypeError("Do not call abstract method foo from child.");
    }

    /**
     * Remove an item from the cache.
     * 
     * @param {string} key
     * @return {bool}
     */
    forget(key) {
        throw new TypeError("Do not call abstract method foo from child.");
    }

    /**
     * Remove all items from the cache.
     * 
     * @return {string}
     */
    flush() {
        throw new TypeError("Do not call abstract method foo from child.");
    }
}

export default Store;