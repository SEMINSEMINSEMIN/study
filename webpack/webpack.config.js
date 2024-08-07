const path = require("path");

module.exports = {
    // entry
    //// 웹팩이 내부적으로 dependency graph를 생성할 때, 어떤 모듈에서부터 시작해야 할지 나타낸다.
    //// https://webpack.js.org/concepts/#entry
    entry: "./src/index.js",

    // output
    //// 웹팩이 빌드한 파일을 어디에 저장할지, 또한 이름을 어떻게 지을지 명시한다.
    //// https://webpack.js.org/concepts/#output
    output: {
        filename: "main.js",
        // 참고: __dirname이란?
        //// 현재의 파일이 위치한 폴더의 절대경로를 알려준다.
        //// https://reload1bronze.tistory.com/97
        path: path.resolve(__dirname, "dist"),
    },
};
