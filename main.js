// 要素を取得
const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
// 開始時間
let startTime;
// 停止時間
let stopTime = 0;
//カウントダウンを止める時に必要な変数
let timeoutID;

// カウント時間を取得する関数（ここはわからなかったのでネットのコードを参照した）
function displayTime(){
    const timeStanp = new Date(Date.now() - startTime + stopTime);
    const m = String(timeStanp.getMinutes()).padStart(2, '0');
    const s = String(timeStanp.getSeconds()).padStart(2, '0');
    const ms = String(timeStanp.getMilliseconds()).padStart(3, '0');
    // 変数timeの内容を置き換える
    time.textContent = `${m}:${s}:${ms}`;
    timeoutID = setTimeout(displayTime,10);
}

// スタートボタンの機能
// ストップボタン以外は押せないようにする
startButton.addEventListener('click', () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    // スタートボタンが押された時の時刻を取得する
    startTime = Date.now();
    displayTime();
    console.log(startTime);
});

// ストップボタンの機能
// ストップボタン以外を押せるようにする
stopButton.addEventListener('click',() => {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    // カウントをキャンセル
    clearTimeout(timeoutID);
    // Date .now()でストップを押した時刻を取得して、前回スタートを押した時の時刻を引く。
    // そこに前回ストップを押した時までに蓄積された経過タイムを足す。
    stopTime += Date.now() - startTime;
    console.log(Date.now());
    console.log(stopTime);
});

// リセットボタンの機能
// スタートボタンのみを押せるようにする
resetButton.addEventListener('click',() => {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    // 変数stopTimeに蓄積された経過タイムを０にリセットする。
    stopTime = 0;
    time.textContent = '00:00:000';
});


