let Remote = function () {
    this.turnOn = function (tivi) {
        if(tivi.getOnoff())
        {
            tivi.setOnoff(false);
        }
        else{
            tivi.setOnoff(true);
        }

        document.getElementById('statusTivi').innerHTML = tivi.getOnoff();

    };

    this.controlChanel = function (tv) {
        let chanel=document.getElementById('chanel').value;
        tv.setChanel(chanel);
        document.getElementById('chanelTivi').innerHTML = tivi.getChanel();

    };

    this.controlVolumDecrease = function (tv) {
        if (tv.getvolum() > 0) {
            tv.setvolum(tv.getvolum() - 1);
            document.getElementById('volumTivi').innerHTML=tivi.getvolum();
        } else {
            tv.setvolum(0);
        }
    };

    this.controlVolumRaise = function (tv) {
        if (tv.getvolum() < 50) {
            tv.setvolum(tv.getvolum() + 1);
            document.getElementById('volumTivi').innerHTML=tivi.getvolum();
        } else {
            tv.setvolum(50);
        }
    };
};