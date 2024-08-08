"use strict";

const Utils = class {
    // prefix와 이름이 담긴 배열을 넘겨주면 prefix가 존재하는 배열만 골라 return 해주는 util 함수
    getHasPrefixList = (_prefix, _names = []) => {
        return _names.filter((_name) => {
            if (!_name.includes(_prefix)) {
                return false;
            }

            let index = 0;

            for (let i = 0; i < _name.length; i++) {
                if (_name[i] === _name[i].toUpperCase()) {
                    index = i;
                    break;
                }
            }

            return _name.slice(0, index) === _prefix;
        });
    };

    bindingMethods = (_instance, _prefix) => {
        const prototypeKeys = Object.getOwnPropertyNames(
            Object.getPrototypeOf(_instance)
        );
        const instanceKeys = Object.getOwnPropertyNames(_instance);
        const allKeys = [...prototypeKeys, ...instanceKeys];

        const bindMethodNames = this.getHasPrefixList(_prefix, allKeys);

        const handlers = {};
        bindMethodNames.forEach((_name) => {
            handlers[_name] = _instance[_name].bind(_instance);
        });

        _instance.view.addEvent(handlers);
    };
};

export default Utils;
