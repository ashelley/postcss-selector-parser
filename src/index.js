'use strict';

import Processor  from './processor';
import Attribute  from './selectors/attribute';
import ClassName  from './selectors/className';
import Combinator from './selectors/combinator';
import Comment    from './selectors/comment';
import Id         from './selectors/id';
import Pseudo     from './selectors/pseudo';
import Root       from './selectors/root';
import Selector   from './selectors/selector';
import Tag        from './selectors/tag';
import Universal  from './selectors/universal';

let parser = function (processor) {
    return new Processor(processor);
}

parser.attribute = function (opts) {
    return new Attribute(opts);
};

parser.className = function (opts) {
    return new ClassName(opts);
};

parser.combinator = function (opts) {
    return new Combinator(opts);
};

parser.comment = function (opts) {
    return new Comment(opts);
}

parser.id = function (opts) {
    return new Id(opts);
};

parser.pseudo = function (opts) {
    return new Pseudo(opts);
};

parser.root = function (opts) {
    return new Root(opts);
};

parser.selector = function (opts) {
    return new Selector(opts);
};

parser.tag = function (opts) {
    return new Tag(opts);
};

parser.universal = function (opts) {
    return new Universal(opts);
};

export default parser;
