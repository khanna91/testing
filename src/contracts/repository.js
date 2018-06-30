'use strict';

class Repository {

    /**
     * construtor function
     */
    constructor() {
        if (this.constructor === Repository) {
            // Error Type 1. Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
        //else (called from child)
        // Check if all instance methods are implemented.
        if (this.has === Repository.prototype.has) {
            // Error Type 4. Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method has.");
        }
        if (this.get === Repository.prototype.get) {
            throw new TypeError("Please implement abstract method get.");
        }
        if (this.pull === Repository.prototype.pull) {
            throw new TypeError("Please implement abstract method get.");
        }
        if (this.put === Repository.prototype.put) {
            throw new TypeError("Please implement abstract method put.");
        }
        if (this.add === Repository.prototype.add) {
            throw new TypeError("Please implement abstract method add.");
        }
        if (this.increment === Repository.prototype.increment) {
            throw new TypeError("Please implement abstract method increment.");
        }
        if (this.decrement === Repository.prototype.decrement) {
            throw new TypeError("Please implement abstract method decrement.");
        }
        if (this.forever === Repository.prototype.forever) {
            throw new TypeError("Please implement abstract method forever.");
        }
        if (this.remember === Repository.prototype.remember) {
            throw new TypeError("Please implement abstract method remember.");
        }
        if (this.sear === Repository.prototype.sear) {
            throw new TypeError("Please implement abstract method sear.");
        }
        if (this.rememberForever === Repository.prototype.rememberForever) {
            throw new TypeError("Please implement abstract method rememberForever.");
        }
        if (this.forget === Repository.prototype.forget) {
            throw new TypeError("Please implement abstract method forget.");
        }
        if (this.getStore === Repository.prototype.getStore) {
            throw new TypeError("Please implement abstract method getStore.");
        }
    }

    /**
     * Determine if an item exists in the cache.
     * 
     * @param {string} key
     * @return {bool}
     */
    has(key) {
        throw new TypeError("Do not call abstract method foo from child.");
    }

    /**
     * Retrieve an item from the cache by key.
     * 
     * @param {string} key
     * @param {mixed} _default
     * @return {mixed}
     */
    get(key, _default = null) {
        throw new TypeError("Do not call abstract method foo from child.");
    }

    /**
     * Retrieve an item from the cache and delete it.
     * 
     * @param {string} key
     * @param {mixed} _default
     * @return {mixed}
     */
    pull(key, _default = null) {
        throw new TypeError("Do not call abstract method foo from child.");
    }

    /**
     * Store an item in the cache.
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
     * Store an item in the cache if the key does not exist.
     * 
     * @param {string} key
     * @param {mixed} value 
     * @param {int} seconds
     * @return {bool}
     */
    add(key, value, seconds) {
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
     * Get an item from the cache, or store the default value.
     * 
     * @param {string} key
     * @param {int} seconds
     * @param {function} callback
     * @return {mixed}
     */
    remember(key, seconds, callback) {
        throw new TypeError("Do not call abstract method foo from child.");
    }

    /**
     * Get an item from the cache, or store the default value forever.
     * 
     * @param {string} key
     * @param {function} callback
     * @return {mixed}
     */
    sear(key, callback) {
        throw new TypeError("Do not call abstract method foo from child.");
    }

    /**
     * Get an item from the cache, or store the default value forever.
     * 
     * @param {string} key
     * @param {function} callback
     * @return {mixed}
     */
    rememberForever(key, callback) {
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
     * Get the cache store implementation.
     * 
     * return {\Store}
     */
    getStore() {
        throw new TypeError("Do not call abstract method foo from child.");
    }
}

export default Repository;