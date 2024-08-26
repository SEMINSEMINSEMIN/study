const Utils = class {
    formatDate = (_date: Date) => {
        return new Intl.DateTimeFormat("en-US").format(_date);
    };
};

export default Utils;
