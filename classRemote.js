let Remote = function () {
    this.codeChanel = [0,1,2,3,4,5,6,7,8];
    this.getchangeChanel = function () {
        return this.codeChanel;
    };

    this.setChangechanel = function (code) {
        this.codeChanel = code;
    };

    this.getVolum = function () {
        return this.volum;
    };

    this.setVolum = function (volum) {
        this.volum = volum;
    }
}