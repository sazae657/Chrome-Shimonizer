window.onload = function()
{
    var ps = document.getElementById('tearoff');
    if(null != ps) {
        try{
            ps.addEventListener ('click', (e) => {tearoff(e)},true);
        }catch(e){
            ps.attachEvent('onclick', (e) => {tearoff(e)});
        }
    }

    var ps = document.getElementById('Shimonize');
    if(null != ps) {
        try{
            ps.addEventListener ('click',(e) => {ｼﾓﾅｲｽﾞ(e)},true);
        }catch(e){
            ps.attachEvent('onclick', (e) => {ｼﾓﾅｲｽﾞ(e)});
        }
    }
    else {
        ps = document.getElementById('text');
        ps.addEventListener('keypress', (e) => {
            if (e.keyCode == 13) {
                ｼﾓﾅｲｽﾞ(e);
            }
        } ,true);
    }
};

function tearoff(e) {
    chrome.windows.create({
        url : 'tearoff.html',
        focused : true,
        type : 'detached_panel',
        width : 320,
        height: 240
    });
}


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
