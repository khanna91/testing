'use strict';

import Redis from 'ioredis';
import _ from 'lodash';
import Promise from 'bluebird';
import Store from '../contracts/store';

class RedisStore extends Store {
    constructor(configuration) {
        super();

        this.redisClient = new Redis(configuration);

        this.handleAuth(configuration);

        this.handleEvents();
    }

    handleAuth({ password } = {}) {
        if (!_.isEmpty(password)) {
            this.redisClient.auth(password);
        }
    }

    handleEvents() {
        this.redisClient.on('error', error => { console.log(`Redis had some error ${error}`) });

        this.redisClient.on('connect', error => { console.log(`Redis has connected`) });

        this.redisClient.on('reconnecting', error => { console.log('Redis has lost connection, it is trying to reconnect') });

        this.redisClient.on('ready', error => { console.log('Redis is ready to work hard!') });
    }

    get(key) {
        try {
            return new Promise((resolve, reject) => {
                this.redisClient.get(key, (err, result) => {
                    if (err || !result) {
                        console.log(`Cache miss: ${key}`);
                        return reject(new Error('notInCache'));
                    }
                    console.log(`Cache hit: ${key}`);
                    try {
                        return resolve(JSON.parse(result));
                    } catch(err) {
                        return resolve(result);
                    }
                });
            });
        } catch(err) {
            throw err;
        }
    }

    many(keys) {

    }

    put(key, value, seconds = 3600) {
        this.redisClient.set(key, value, 'ex', seconds);
    }

    putMany(values, seconds) {

    }

    increment(key, value = 1) {

    }

    decrement(key, value = 1) {

    }

    forever(key, value) {

    }

    forget(key) {

    }

    flush() {

    }
}

export default RedisStore;