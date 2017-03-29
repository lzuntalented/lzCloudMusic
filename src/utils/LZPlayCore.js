import {isFunction} from './Tools';

let vidio;
let vid_curtime = 0 ;
let vid_length = 0;

/**
 * 初始化音乐播放器
 */
// function initVidio() {
// 	if(typeof vidio !== "undefined"){
// 		return ;
// 	}
//
// 	vidio = document.createElement("audio");
//
// 	vidio.addEventListener("ended", function() {
// 		//音乐播放结束
// 	}, false);
//
// 	vidio.addEventListener("play", function() {
// 		//音乐播放开始
// 	}, false);
//
// 	vidio.addEventListener("pause", function() {
// 		//音乐播放暂停
// 	}, false);
//
// 	vidio.addEventListener("loadeddata", function() {
// 		//资源信息加载完成
// 		vid_length=vidio.duration;
// 		eventLoadeddata(vid_length);
// 	}, false);
// }

function initVidio(obj) {
	if(typeof vidio !== "undefined"){
		return ;
	}

	vidio = document.createElement("audio");

	for(var i in obj){
		(function(i){
			if(i == "loadeddata"){
				vidio.addEventListener("loadeddata", function() {
					//资源信息加载完成
					vid_length=vidio.duration;
					typeof obj[i] === "function" && obj[i]();
				}, false);
			}else{
				vidio.addEventListener(i, function() {
					//音乐播放结束
					typeof obj[i] === "function" && obj[i]();
				}, false);
			}
		})(i);
	}
}


/**
 * 设置音乐url
 */
function setVidioUrl(url){
	if(typeof vidio === "undefined"){
		initVidio();
	}

	vidio.src=url;
	vidio.play();
}

function vidioPlay(begin=false){
	vidio.currentTime = begin === false ? vidio.currentTime : begin;
	vidio.play();
}

function vidioPause(){
	vidio.pause();
	vid_curtime = vidio.currentTime;
}

function getCurrettime(){
	return vid_length > 0 ? vidio.currentTime : vid_curtime;
}

function getAlltime(){
	return vid_length;
}

//播放时间
function timeChange(time) { //默认获取的时间是时间戳改成我们常见的时间格式
	//分钟
	let minute = time / 60;
	let minutes = parseInt(minute);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	//秒
	let second = time % 60;
	let seconds = parseInt(second);
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	return  "" + minutes + "" + ":" + "" + seconds + "";
}

let lzPlay = {
	"initVidio": initVidio,
	'setVidioUrl': setVidioUrl,
	'vidioPlay': vidioPlay,
	'vidioPause': vidioPause,
	'getCurrettime': getCurrettime,
	'getAlltime': getAlltime,
	'timeChange':timeChange,
}

export default lzPlay;
