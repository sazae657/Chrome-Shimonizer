
var ｸﾘﾌﾟー = (文字列) => {
    var ﾃﾘﾔ = document.createElement("textarea");
    ﾃﾘﾔ.style.cssText = "position:absolute;left:-100%";
    document.body.appendChild(ﾃﾘﾔ);
    ﾃﾘﾔ.value = (new ｼﾓﾅｲｻﾞー()).ｼﾓﾅｲｽﾞ(文字列);
    ﾃﾘﾔ.select();
    document.execCommand("copy");
    document.body.removeChild(ﾃﾘﾔ);
}    


var 広告 = new function() {
    var ｵﾌﾞｾﾞｸﾂ = {};
    var 呼び戻しｽﾞ = {};
    
    this.ｱﾌｨｶｽ = (ｵﾌﾞｾﾞｸﾄ) => {
        ｵﾌﾞｾﾞｸﾄ.forEach((ﾙﾋﾞー) => {
            呼び戻しｽﾞ[ﾙﾋﾞー.id] = ﾙﾋﾞー.onclick;
            ﾙﾋﾞー.onclick = null;
            ｵﾌﾞｾﾞｸﾂ[ﾙﾋﾞー.id] = ﾙﾋﾞー;
        });
    };

    this.転売教室 = () => {
        Object.keys(ｵﾌﾞｾﾞｸﾂ).forEach((あ) => {
                chrome.contextMenus.create(ｵﾌﾞｾﾞｸﾂ[あ]);
            }
        );
    };

    chrome.contextMenus.onClicked.addListener(function (info, tab) {
        呼び戻しｽﾞ[info.menuItemId](info, tab);
    });
}

広告.ｱﾌｨｶｽ([
    {
        type: 'normal',
        id: 'ｼﾓﾅｲｽﾞｺﾋﾟー',
        title: 'ｼﾓﾅｲｽﾞｺﾋﾟー',
        contexts: ["selection"],
        onclick: (ぉ, ぃ) => {
            ｸﾘﾌﾟー(ぉ.selectionText);
        }
    }
]);
chrome.runtime.onInstalled.addListener(広告.転売教室);

