'use strict';

class Factory {

    /**
     * construtor function
     */
    constructor() {
        if (this.constructor === Factory) {
            // Error Type 1. Abstract class can not be constructed.
            throw new TypeError("Can not construct abstract class.");
        }
        //else (called from child)
        // Check if all instance methods are implemented.
        if (this.store === Factory.prototype.store) {
            // Error Type 4. Child has not implemented this abstract method.
            throw new TypeError("Please implement abstract method store.");
        }
    }

    /**
     * Get a cache store instance by name.
     *
     * @param  {string|null} name
     * @return {\Repository}
     */
    store(name = null) {
        throw new TypeError("Do not call abstract method foo from child.");
    }
}

export default Factory;