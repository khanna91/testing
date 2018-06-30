import CacheManager from './cache/CacheManager';

let _cacheStore = null;

const build = (configurations) => {
    _cacheStore = new CacheManager({
        default: 'redis',
        redis: {
            port: 6379,          // Redis port
            host: '127.0.0.1',   // Redis host
            enableOfflineQueue: true
        }
    });
}

export { build };

const cache = () => {
    if(_cacheStore) {
        return _cacheStore.store();
    }
    return null;
}

export { cache };

const cacheStore = () => {
    return _cacheStore;
}

export { cacheStore };