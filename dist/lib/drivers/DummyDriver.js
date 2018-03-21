"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class DummyDriver {
    constructor() {
        this.attributes = {};
    }
    initialize(data) {
        this.attributes = data || {};
    }
    getRecord() {
        return this.attributes;
    }
    getAttribute(name) {
        return this.attributes[name];
    }
    setAttribute(name, value) {
        this.attributes[name] = value;
        return true;
    }
    getId() {
        return this.getAttribute('id');
    }
    setId(id) {
        this.setAttribute('id', id);
    }
    newQuery() {
        return {};
    }
    toObject() {
        return this.attributes;
    }
    toJSON() {
        return this.attributes;
    }
    is(model) {
        return this.attributes['id'] === model['driver']['attributes']['id'];
    }
    getReservedNames() {
        return ['dummy'];
    }
    getDriverProxyMethods() {
        return ['is', 'getId', 'setId', 'newQuery'];
    }
    getQueryProxyMethods() {
        return ['where', 'orWhere'];
    }
    formatAttributeName(name) {
        return lodash_1.snakeCase(name);
    }
}
DummyDriver.className = 'NajsEloquent.DummyDriver';
exports.DummyDriver = DummyDriver;