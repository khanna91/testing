'use strict';

import _ from 'lodash';
import FactoryContact from '../contracts/factory';
import Repository from './Repository';
import RedisStore from './RedisStore';

class CacheManager extends FactoryContact {
    constructor(driversConfig) {
        super();
        
        this.stores = [];
        
        this.driversConfig = driversConfig;
    }

    store(name = null) {
        if(_.isNull(name)) {
            name = this.getDefaultDriver();
        }
        return this.stores[name] = this.get(name);
    }

    driver(driver = null) {
        return this.store(driver);
    }

    getDefaultDriver() {
        return this.driversConfig.default || 'null';
    }

    get(name) {
        return this.stores[name] || this.resolve(name);
    }

    resolve(name) {
        let driverMethod = `create${_.capitalize(name)}Driver`;
        if (typeof this[driverMethod] === 'function') {
            return this[driverMethod](this.driversConfig[name]);
        } else {
            throw new Error("Driver [{$config['driver']}] is not supported.");
        }
    }

    createRedisDriver(config) {
        return this.repository(new RedisStore(config));
    }

    repository(store) {
        const repository = new Repository(store);

        return repository;
    }
}

export default CacheManager;