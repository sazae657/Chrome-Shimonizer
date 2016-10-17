function ｼﾓﾅｲｽﾞ(e){
    var k = document.getElementById('text');
    if (k.value.length > 0) {
        k.value = (new ｼﾓﾅｲｻﾞー()).ｼﾓﾅｲｽﾞ(k.value);
    }

    var e = (e.srcElement || e.target);
    if(e.preventDefault) {
        e.preventDefault();
    }
    else{
        e.returnValue = false;
    }
}
