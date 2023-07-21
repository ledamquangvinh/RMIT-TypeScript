"use strict";
class Card {
    _name = 'no-name';
    _value = 0;
    constructor(name, value) {
        if (name !== undefined) {
            this._name = name;
        }
        if (value !== undefined) {
            this._value = value;
        }
    }
    get name() { return this._name; }
    set name(value) {
        if (value !== undefined) {
            this._name = value;
        }
    }
    get value() { return this._value; }
    set value(value) {
        if (value !== undefined) {
            this._value = value;
        }
    }
    show() {
        console.log(this);
    }
}
class NormalCard extends Card {
    Cal() {
        this._value *= 2;
        return this._value;
    }
}
const normal_card = new NormalCard();
normal_card.value = 100;
normal_card.show();
console.log(normal_card.Cal());
class VIPCard extends Card {
    _level = 1;
    constructor(name, value, level) {
        super(name, value);
        if (level !== undefined) {
            this._level = level;
        }
    }
    get level() { return this._level; }
    set level(value) {
        if (value !== undefined) {
            this._level = value;
        }
    }
    Cal() {
        return this.value + this._level;
    }
    show() {
        console.log(this, " - ", this.Cal());
    }
}
const vip_card = new VIPCard('Diamond', 100, 5);
vip_card.show();
//# sourceMappingURL=demo20.oop.scope_overriding.js.map