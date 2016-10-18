window.onload = function()
{
    var 要素 = document.getElementById('tearoff');
    要素.addEventListener ('click', (ぉ) => {切り離す(ぉ)},true);

    要素 = document.getElementById('Shimonize');
    要素.addEventListener ('click',(ぉ) => {ｼﾓﾅｲｽﾞ(ぉ)},true);

    要素 = null;
};

function 切り離す(ぉ)
{
    chrome.windows.create({
        url : 'tearoff.html',
        focused : true,
        type : 'panel',
        width : 320,
        height: 240
    });
}

