'use strict';

// import Cache from './cache/CacheManager';

// let cache = new Cache({
//     default: 'redis',
//     redis: {
//         port: 6379,          // Redis port
//         host: '127.0.0.1',   // Redis host
//         enableOfflineQueue: true
//     }
// });


// cache.store('redis').put('testing', 'ok')
// cache.store('redis').get('testing').then(result => {
//     console.log(result);
// }).catch(error => { console.log(error) });

import { cache, build, cacheStore } from './cacheStore';

build({
    default: 'redis',
    redis: {
        port: 6379,          // Redis port
        host: '127.0.0.1',   // Redis host
        enableOfflineQueue: true
    }
});

import test from './test';

console.log(cache());
console.log("-----------")
console.log("-----------")
console.log(cacheStore());
console.log("==========")
console.log(test())