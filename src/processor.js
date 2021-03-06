'use strict';

import tokenize from './tokenize';
import Root from './selectors/root';
import Parser from './parser';

export default class Processor {
    constructor (func) {
        this.func = func || function noop () {};
        return this;
    }

    process (selectors) {
        let input = new Parser({
            css: selectors,
            error: (e) => {
                throw new Error(e);
            }
        });
        this.res = input;
        this.func.call(this, input);
        return this;
    }

    get result () {
        return String(this.res);
    }
}
