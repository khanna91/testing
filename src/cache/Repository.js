'use strict';

import Contract from '../contracts/repository';

class Repository extends Contract {
    constructor(store, defaultCacheTime = 3600) {
        super();
        
        this.store = store;
        
        this.defaultCacheTime = defaultCacheTime;
    }

    /**
     * Determine if an item exists in the cache.
     * 
     * @param {string} key
     * @return {bool} 
     */
    has(key) {
        return ! _.isNull(this.get(key));
    }

    /**
     * Retrieve an item from the cache by key.
     * 
     * @param {string} key 
     * @param {mixed} _default
     * @return {mixed} 
     */
    async get(key, _default = null) {
        try {
            let value = await this.store.get(key);
            console.log('val', value)
            return value;
        } catch(err) {
            console.log(err);
            return 'ndad';
        }
    }

    pull(key) {

    }

    put(key, value, seconds = this.defaultCacheTime) {
        this.store.put(key, value, seconds);
    }

    add(key, value, seconds) {

    }

    increment(key, value = 1) {

    }

    decrement(key, value = 1) {

    }

    forever(key, value) {
        
    }

    remember(key, seconds, callback) {

    }

    sear(key, callback) {
        
    }

    rememberForever(key, callback) {

    }

    forget(key) {

    }

    getStore() {

    }
}

export default Repository;