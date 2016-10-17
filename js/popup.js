window.onload = function()
{
    var ps = document.getElementById('tearoff');
    try{
        ps.addEventListener ('click', (e) => {tearoff(e)},true);
    }catch(e){
        ps.attachEvent('onclick', (e) => {tearoff(e)});
    }

    ps = document.getElementById('Shimonize');
    try{
        ps.addEventListener ('click',(e) => {ｼﾓﾅｲｽﾞ(e)},true);
    }catch(e){
        ps.attachEvent('onclick', (e) => {ｼﾓﾅｲｽﾞ(e)});
    }

};

function tearoff(e) {
    chrome.windows.create({
        url : 'tearoff.html',
        focused : true,
        type : 'panel',
        width : 320,
        height: 240
    });
}

