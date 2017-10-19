function ｼﾓﾅｲｽﾞ(ぉ){
    var ﾃｷｽﾄﾎﾞｯｸｽ = document.getElementById('text');
    if (ﾃｷｽﾄﾎﾞｯｸｽ.value.length > 0) {
        ﾃｷｽﾄﾎﾞｯｸｽ.value = (new ｼﾓﾅｲｻﾞー()).ｼﾓﾅｲｽﾞ(ﾃｷｽﾄﾎﾞｯｸｽ.value);
    }

    var 要素 = (ぉ.srcElement || ぉ.target);
    if(要素.preventDefault) {
        要素.preventDefault();
    }
    else{
        要素.returnValue = false;
    }
}
