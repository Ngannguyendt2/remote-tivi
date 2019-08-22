let Tivi = function () {
    this.chanel = ['vtv1', 'vtv2', 'vtv3', 'vtv4', 'vtv5', 'vtv6', 'htv7', 'htv9'];
    this.volum = 10;
    this.isOnoff = false;

    this.getChanel = function () {
        return this.chanel;
    };

    this.setChanel = function (chanel) {
        this.chanel = chanel;

    };

    this.getvolum = function () {
        return this.volum;
    };

    this.setvolum = function (volum) {
        this.volum = volum;
    };

    this.getOnoff = function () {
        return this.isOnoff;
    };

    this.setOnoff = function (isOnoff) {
        this.isOnoff = isOnoff;
    }


};