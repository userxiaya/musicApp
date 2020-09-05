// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
if(typeof eeuiLog=="undefined"){var eeuiLog={_:function(t,e){var s=e.map(function(e){return e="[object object]"===Object.prototype.toString.call(e).toLowerCase()?JSON.stringify(e):e});if(typeof this.__m==='undefined'){this.__m=app.requireModule('debug')}this.__m.addLog(t,s)},debug:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("debug",e)},log:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("log",e)},info:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("info",e)},warn:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("warn",e)},error:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("error",e)}}}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/json/songList.js":
/*!******************************!*\
  !*** ./src/json/songList.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "title": "青春住了谁",
  "author": "杨丞琳",
  "image": "https://eeui.oss-cn-beijing.aliyuncs.com/editor/resources/qingchunzhuleshui.jpeg",
  "url": "https://eeui.oss-cn-beijing.aliyuncs.com/editor/resources/qingchunzhuleshui.m4a",
  "lyric": [{
    "time": "00:00.000",
    "text": "作曲 : 苏亦承"
  }, {
    "time": "00:01.000",
    "text": "作词 : 吴青峰"
  }, {
    "time": "00:06.430",
    "text": "编曲：林昀骏"
  }, {
    "time": "00:21.940",
    "text": ""
  }, {
    "time": "00:22.200",
    "text": "雏鸟站在悬崖 将翅膀晒开"
  }, {
    "time": "00:27.350",
    "text": "光沾着雾水 反射一些不安"
  }, {
    "time": "00:33.520",
    "text": "有过伤 有期待 累积几次挫败"
  }, {
    "time": "00:40.450",
    "text": "勇气还在 等待风吹来"
  }, {
    "time": "00:45.410",
    "text": ""
  }, {
    "time": "00:47.630",
    "text": "曾经为了小事 让世界毁坏"
  }, {
    "time": "00:53.440",
    "text": "也曾为了爱 整天傻笑发呆"
  }, {
    "time": "00:59.360",
    "text": "想起来 真奇怪 彷佛跟自己无关"
  }, {
    "time": "01:06.290",
    "text": "天大地大的闹 已笑着缅怀"
  }, {
    "time": "01:11.930",
    "text": ""
  }, {
    "time": "01:12.270",
    "text": "我爱 是因为我存在"
  }, {
    "time": "01:17.280",
    "text": "我们认真感慨 是因为"
  }, {
    "time": "01:21.140",
    "text": "青春住了谁 改变我的姿态"
  }, {
    "time": "01:25.190",
    "text": ""
  }, {
    "time": "01:25.400",
    "text": "我爱 我爱着你盛开"
  }, {
    "time": "01:30.210",
    "text": "就算泥泞走来 一路上 我们多了些能耐"
  }, {
    "time": "01:40.020",
    "text": "过往值得了现在"
  }, {
    "time": "01:45.300",
    "text": ""
  }, {
    "time": "01:59.530",
    "text": "像是一条河川 转过几个弯"
  }, {
    "time": "02:04.720",
    "text": "也有好几段 特别湍急困难"
  }, {
    "time": "02:10.840",
    "text": "会不会 山之外 交会不同的船帆"
  }, {
    "time": "02:17.580",
    "text": "乘载更多重量 却才不孤单"
  }, {
    "time": "02:24.980",
    "text": ""
  }, {
    "time": "02:25.370",
    "text": "我爱 是因为我存在"
  }, {
    "time": "02:30.270",
    "text": "我们认真感慨 是因为"
  }, {
    "time": "02:34.080",
    "text": "青春住了谁 改变我的姿态"
  }, {
    "time": "02:38.130",
    "text": ""
  }, {
    "time": "02:38.310",
    "text": "我爱 我爱着你盛开"
  }, {
    "time": "02:43.170",
    "text": "就算泥泞走来 一路上 我们多了些能耐"
  }, {
    "time": "02:53.030",
    "text": "过往值得了现在"
  }, {
    "time": "02:58.810",
    "text": ""
  }, {
    "time": "03:26.860",
    "text": "我爱 是因为我存在"
  }, {
    "time": "03:31.980",
    "text": "我们认真感慨 是因为"
  }, {
    "time": "03:35.690",
    "text": "青春住了谁 改变我~"
  }, {
    "time": "03:39.780",
    "text": ""
  }, {
    "time": "03:39.970",
    "text": "我爱 我爱着你盛开"
  }, {
    "time": "03:44.870",
    "text": "就算泥泞走来 一路上 我们多了些能耐 oh~"
  }, {
    "time": "03:54.700",
    "text": "过往值得了现在"
  }, {
    "time": "04:00.250",
    "text": ""
  }, {
    "time": "04:00.520",
    "text": "nananana~"
  }, {
    "time": "04:06.700",
    "text": "我爱 不管好与坏"
  }, {
    "time": "04:09.980",
    "text": "nananana~"
  }, {
    "time": "04:16.150",
    "text": "我爱 过去变成了未来"
  }, {
    "time": "04:26.030",
    "text": ""
  }, {
    "time": "04:26.230",
    "text": "制作人：林暐哲/徐文"
  }, {
    "time": "04:26.630",
    "text": "爵士鼓：江尚谦"
  }, {
    "time": "04:26.830",
    "text": "鼓组技师：余璨宇"
  }, {
    "time": "04:27.030",
    "text": "吉他：钟承洋"
  }, {
    "time": "04:27.230",
    "text": "贝斯：程杰"
  }, {
    "time": "04:27.490",
    "text": "钢琴：林昀骏"
  }, {
    "time": "04:27.630",
    "text": "小提琴：张暐姗/朱奕宁"
  }, {
    "time": "04:27.830",
    "text": "中提琴：杨凯宁"
  }, {
    "time": "04:28.030",
    "text": "大提琴：叶欲新"
  }, {
    "time": "04:28.222",
    "text": "弦乐监制：许义昕"
  }, {
    "time": "04:28.430",
    "text": "弦乐编写：张学瀚"
  }, {
    "time": "04:28.630",
    "text": "和声编写：林昀骏"
  }, {
    "time": "04:28.830",
    "text": "Pro Tools工程师：单为明/张育维"
  }, {
    "time": "04:29.030",
    "text": "录音师：王永钧(鼓组/弦乐)"
  }, {
    "time": "04:29.230",
    "text": "录音助理：蔡周翰（人声）"
  }, {
    "time": "04:29.430",
    "text": "混音师：余佳伦"
  }, {
    "time": "04:29.630",
    "text": "录音室：强力录音室（鼓组/弦乐） / Lights Up录音室(人声)"
  }, {
    "time": "04:29.830",
    "text": "混音室：MUSDM"
  }, {
    "time": "04:29.900",
    "text": "母带后期处理制作人：林暐哲/余佳伦"
  }, {
    "time": "04:29.930",
    "text": "母带后期处理工程师：Chris Gehringer"
  }, {
    "time": "04:29.960",
    "text": "母带后期处理录音室：Sterling Sound"
  }, {
    "time": "04:30.000",
    "text": "音乐统筹：吕康惟 (在一起工作室Come Together Studio)"
  }]
}, {
  "title": "旅行",
  "author": "许巍",
  "image": "https://eeui.oss-cn-beijing.aliyuncs.com/editor/resources/lvxing.jpg",
  "url": "https://eeui.oss-cn-beijing.aliyuncs.com/editor/resources/lvxing.m4a",
  "lyric": [{
    "time": "00:00.00",
    "text": "旅行 - 许巍"
  }, {
    "time": "00:07.16",
    "text": "词：许巍"
  }, {
    "time": "00:14.32",
    "text": "曲：许巍"
  }, {
    "time": "00:21.48",
    "text": "编曲：许巍"
  }, {
    "time": "00:28.64",
    "text": "阵阵晚风吹动着松涛"
  }, {
    "time": "00:35.51",
    "text": "吹响这风铃声如天籁"
  }, {
    "time": "00:42.31",
    "text": "站在这城市的寂静处"
  }, {
    "time": "00:48.36",
    "text": "让一切喧嚣走远"
  }, {
    "time": "00:56.07",
    "text": "只有青山藏在白云间"
  }, {
    "time": "01:02.91",
    "text": "蝴蝶自由穿行在清涧"
  }, {
    "time": "01:09.75",
    "text": "看那晚霞盛开在天边"
  }, {
    "time": "01:15.79",
    "text": "有一群向西归鸟"
  }, {
    "time": "01:22.60",
    "text": "谁画出这天地 又画下我和你"
  }, {
    "time": "01:29.89",
    "text": "让我们的世界绚丽多彩"
  }, {
    "time": "01:36.33",
    "text": "谁让我们哭泣 又给我们惊喜"
  }, {
    "time": "01:43.63",
    "text": "让我们就这样相爱相遇"
  }, {
    "time": "01:50.03",
    "text": "总是要说再见 相聚又分离"
  }, {
    "time": "01:57.32",
    "text": "总是走在漫长的路上"
  }, {
    "time": "02:35.45",
    "text": "只有青山藏在白云间"
  }, {
    "time": "02:42.36",
    "text": "蝴蝶自由穿行在清涧"
  }, {
    "time": "02:49.17",
    "text": "看那晚霞盛开在天边"
  }, {
    "time": "02:55.23",
    "text": "有一群向西归鸟"
  }, {
    "time": "03:02.04",
    "text": "谁画出这天地 又画下我和你"
  }, {
    "time": "03:09.29",
    "text": "让我们的世界绚丽多彩"
  }, {
    "time": "03:15.75",
    "text": "谁让我们哭泣 又给我们惊喜"
  }, {
    "time": "03:23.02",
    "text": "让我们就这样相爱相遇"
  }, {
    "time": "03:29.48",
    "text": "总是要说再见 相聚又分离"
  }, {
    "time": "03:36.76",
    "text": "总是走在漫长的路上"
  }]
}, {
  "title": "带我走",
  "author": "杨丞琳",
  "image": "https://eeui.oss-cn-beijing.aliyuncs.com/editor/resources/daiwozou.jpg",
  "url": "https://eeui.oss-cn-beijing.aliyuncs.com/editor/resources/daiwozou.m4a",
  "lyric": [{
    "time": "00:00.00",
    "text": "带我走 - 杨丞琳 (Rainie Yang)"
  }, {
    "time": "00:06.11",
    "text": "词：吴青峰"
  }, {
    "time": "00:12.23",
    "text": "曲：吴青峰"
  }, {
    "time": "00:18.35",
    "text": "每次我总一个人走"
  }, {
    "time": "00:22.60",
    "text": ""
  }, {
    "time": "00:23.16",
    "text": "交叉路口自己生活"
  }, {
    "time": "00:29.55",
    "text": ""
  }, {
    "time": "00:31.90",
    "text": "这次你却说带我走"
  }, {
    "time": "00:36.29",
    "text": ""
  }, {
    "time": "00:36.96",
    "text": "某个角落 就你和我"
  }, {
    "time": "00:42.39",
    "text": ""
  }, {
    "time": "00:44.99",
    "text": "像土壤抓紧花的迷惑"
  }, {
    "time": "00:50.34",
    "text": ""
  }, {
    "time": "00:51.64",
    "text": "像天空缠绵雨的汹涌"
  }, {
    "time": "00:56.77",
    "text": "在你的身后 计算的步伐"
  }, {
    "time": "01:00.41",
    "text": "每个背影每个场景"
  }, {
    "time": "01:04.46",
    "text": "都有 发过的梦"
  }, {
    "time": "01:11.19",
    "text": "带我走"
  }, {
    "time": "01:13.01",
    "text": ""
  }, {
    "time": "01:13.75",
    "text": "到遥远的以后"
  }, {
    "time": "01:17.89",
    "text": "带走我"
  }, {
    "time": "01:19.59",
    "text": ""
  }, {
    "time": "01:20.20",
    "text": "一个人自转的寂寞"
  }, {
    "time": "01:24.71",
    "text": "带我走"
  }, {
    "time": "01:26.10",
    "text": "就算我的爱 你的自由"
  }, {
    "time": "01:29.34",
    "text": "都将成为泡沫"
  }, {
    "time": "01:33.15",
    "text": "我不怕 带我走"
  }, {
    "time": "01:37.43",
    "text": ""
  }, {
    "time": "01:49.65",
    "text": "每次我总独自远走"
  }, {
    "time": "01:53.74",
    "text": ""
  }, {
    "time": "01:54.66",
    "text": "保持缄默不皱眉头"
  }, {
    "time": "02:00.59",
    "text": ""
  }, {
    "time": "02:03.10",
    "text": "这次你却说一起走"
  }, {
    "time": "02:08.19",
    "text": "彼此温柔从此以后"
  }, {
    "time": "02:13.85",
    "text": ""
  }, {
    "time": "02:16.15",
    "text": "像土壤抓紧花的迷惑"
  }, {
    "time": "02:22.95",
    "text": "像天空缠绵雨的汹涌"
  }, {
    "time": "02:27.99",
    "text": "在你的身后 计算的步伐"
  }, {
    "time": "02:31.58",
    "text": "每个背影每个场景"
  }, {
    "time": "02:35.57",
    "text": "都有发过的梦"
  }, {
    "time": "02:41.73",
    "text": ""
  }, {
    "time": "02:42.41",
    "text": "带我走"
  }, {
    "time": "02:44.97",
    "text": "到遥远的以后"
  }, {
    "time": "02:49.19",
    "text": "带走我"
  }, {
    "time": "02:50.94",
    "text": ""
  }, {
    "time": "02:51.50",
    "text": "一个人自转的寂寞"
  }, {
    "time": "02:55.88",
    "text": "带我走"
  }, {
    "time": "02:57.32",
    "text": "就算我的爱 你的自由"
  }, {
    "time": "03:00.57",
    "text": "都将成为泡沫"
  }, {
    "time": "03:04.40",
    "text": "我不怕 带我走"
  }, {
    "time": "03:09.47",
    "text": "哦"
  }, {
    "time": "03:10.69",
    "text": "白马溜过漆黑尽头"
  }, {
    "time": "03:14.10",
    "text": "潮汐袭来浪花颤抖"
  }, {
    "time": "03:17.46",
    "text": "凝在海岸结成了沫"
  }, {
    "time": "03:22.16",
    "text": "哦"
  }, {
    "time": "03:24.13",
    "text": "蔷薇朝向草原气球"
  }, {
    "time": "03:27.64",
    "text": "邮差传来一地彩虹"
  }, {
    "time": "03:30.85",
    "text": "刻在心中拍打着脉搏"
  }, {
    "time": "03:39.91",
    "text": "带我走"
  }, {
    "time": "03:41.88",
    "text": ""
  }, {
    "time": "03:42.48",
    "text": "到遥远的以后"
  }, {
    "time": "03:46.61",
    "text": "带走我"
  }, {
    "time": "03:48.95",
    "text": "一个人自转的寂寞"
  }, {
    "time": "03:53.40",
    "text": "带我走"
  }, {
    "time": "03:54.86",
    "text": "就算我的爱 你的自由"
  }, {
    "time": "03:58.01",
    "text": "都将成为泡沫"
  }, {
    "time": "04:01.84",
    "text": "我不怕 带我走"
  }, {
    "time": "04:06.98",
    "text": "带我走"
  }, {
    "time": "04:08.37",
    "text": "就算我的爱 你的自由"
  }, {
    "time": "04:11.57",
    "text": "都将成为泡沫"
  }, {
    "time": "04:17.92",
    "text": "哦"
  }, {
    "time": "04:20.19",
    "text": ""
  }, {
    "time": "04:20.70",
    "text": "带我走"
  }]
}, {
  "title": "芒种",
  "author": "罗之豪",
  "image": "https://eeui.oss-cn-beijing.aliyuncs.com/editor/resources/mangzhong.jpg",
  "url": "https://eeui.oss-cn-beijing.aliyuncs.com/editor/resources/mangzhong.m4a",
  "lyric": [{
    "time": "00:00.00",
    "text": "芒种 - 罗之豪"
  }, {
    "time": "00:00.10",
    "text": "词：假寐"
  }, {
    "time": "00:00.14",
    "text": "曲：殇小谨"
  }, {
    "time": "00:01.26",
    "text": "一想到你我就"
  }, {
    "time": "00:02.98",
    "text": "Wu"
  }, {
    "time": "00:04.84",
    "text": "空恨别梦久"
  }, {
    "time": "00:07.20",
    "text": "Wu"
  }, {
    "time": "00:09.64",
    "text": "烧去纸灰埋烟柳"
  }, {
    "time": "00:33.60",
    "text": "于鲜活的枝丫"
  }, {
    "time": "00:35.98",
    "text": "凋零下的无暇"
  }, {
    "time": "00:38.36",
    "text": "是收获谜底的代价"
  }, {
    "time": "00:42.27",
    "text": "余晖沾上 远行人的发"
  }, {
    "time": "00:45.53",
    "text": "他洒下手中牵挂"
  }, {
    "time": "00:49.39",
    "text": "于桥下"
  }, {
    "time": "00:51.58",
    "text": "前世迟来者"
  }, {
    "time": "00:53.00",
    "text": "擦肩而过"
  }, {
    "time": "00:54.56",
    "text": "掌心刻"
  }, {
    "time": "00:55.76",
    "text": "来生记得"
  }, {
    "time": "00:56.98",
    "text": "你眼中烟波滴落一滴墨 wo"
  }, {
    "time": "01:01.82",
    "text": "若佛说"
  }, {
    "time": "01:02.67",
    "text": "无牵无挂"
  }, {
    "time": "01:03.86",
    "text": "放下执着"
  }, {
    "time": "01:05.69",
    "text": "无相无色"
  }, {
    "time": "01:06.64",
    "text": "我怎能 波澜不惊 去附和"
  }, {
    "time": "01:10.78",
    "text": "一想到你我就"
  }, {
    "time": "01:12.54",
    "text": "Wu"
  }, {
    "time": "01:14.41",
    "text": "恨情不寿 总于苦海囚"
  }, {
    "time": "01:16.77",
    "text": "Wu"
  }, {
    "time": "01:19.21",
    "text": "新翠徒留 落花影中游"
  }, {
    "time": "01:21.55",
    "text": "Wu"
  }, {
    "time": "01:23.97",
    "text": "相思无用 才笑山盟旧"
  }, {
    "time": "01:26.35",
    "text": "Wu"
  }, {
    "time": "01:29.91",
    "text": "谓我何求"
  }, {
    "time": "01:39.64",
    "text": "谓我何求"
  }, {
    "time": "01:43.25",
    "text": "种一万朵莲花"
  }, {
    "time": "01:45.56",
    "text": "在众生中发芽"
  }, {
    "time": "01:48.00",
    "text": "等红尘一万种解答"
  }, {
    "time": "01:51.93",
    "text": "念珠落进 时间的泥沙"
  }, {
    "time": "01:55.16",
    "text": "待 割舍诠释慈悲"
  }, {
    "time": "01:59.04",
    "text": "的读法"
  }, {
    "time": "02:01.16",
    "text": "前世迟来者"
  }, {
    "time": "02:02.61",
    "text": "擦肩而过"
  }, {
    "time": "02:04.17",
    "text": "掌心刻"
  }, {
    "time": "02:05.30",
    "text": "来生记得"
  }, {
    "time": "02:06.65",
    "text": "你眼中烟波滴落一滴墨 wo"
  }, {
    "time": "02:11.45",
    "text": "若佛说"
  }, {
    "time": "02:12.30",
    "text": "无牵无挂"
  }, {
    "time": "02:13.64",
    "text": "放下执着"
  }, {
    "time": "02:15.16",
    "text": "无相无色"
  }, {
    "time": "02:16.19",
    "text": "我怎能 波澜不惊 去附和"
  }, {
    "time": "02:22.76",
    "text": "一想到你我就"
  }, {
    "time": "02:24.53",
    "text": "Wu"
  }, {
    "time": "02:26.46",
    "text": "恨情不寿 总于苦海囚"
  }, {
    "time": "02:28.74",
    "text": "Wu"
  }, {
    "time": "02:31.17",
    "text": "新翠徒留 落花影中游"
  }, {
    "time": "02:33.56",
    "text": "Wu"
  }, {
    "time": "02:36.02",
    "text": "相思无用 才笑山盟旧"
  }, {
    "time": "02:38.35",
    "text": "Wu"
  }, {
    "time": "02:41.99",
    "text": "谓我何求"
  }, {
    "time": "02:51.56",
    "text": "谓我何求"
  }]
}]);

/***/ }),

/***/ "./src/pages/index.vue?entry=true":
/*!****************************************!*\
  !*** ./src/pages/index.vue?entry=true ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-6be49aa4!C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-6be49aa4!C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-6be49aa4!C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-6be49aa4!C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\study\\musicApp\\src\\pages\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6be49aa4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/**
 * 函数防抖
 */
var debounce = function debounce(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  // 记录上一次的延时器
  var timer = null;
  return function () {
    var args = arguments;
    var that = this; // 清除上一次延时器

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(that, args);
    }, delay);
  };
};

/***/ }),

/***/ "C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _json_songList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../json/songList */ "./src/json/songList.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var navigationBar = app.requireModule("navigationBar");
var audio = app.requireModule("eeuiAudio");
var eeui = app.requireModule("eeui");
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      res: "",
      songList: _json_songList__WEBPACK_IMPORTED_MODULE_0__["default"],
      currentSongIndex: 0,
      isloop: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    eeui.scanFile(function (result) {
      if (result && result.state === "success") {
        var list = result.fileList.map(function (e) {
          return {
            title: e.fileName,
            url: e.path
          };
        });
        _this.songList = list;
      }

      if (result.status === "error") {
        eeui.alert({
          title: "提示!",
          message: "请确认是否授权获取本地文件"
        }, function () {});
      }
    }); //扫描本地文件

    audio.setCallback(function (res) {
      if (res.status == "error" || res.status == "compelete") {
        _this.nextSong();
      }

      _this.res = res;
    });
  },
  computed: {
    currentSong: function currentSong() {
      var currentSongIndex = this.currentSongIndex,
          songList = this.songList;
      return songList[currentSongIndex];
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.stop();
  },
  methods: {
    nextSong: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
      var _this2 = this;

      var currentSongIndex = this.currentSongIndex,
          songList = this.songList;

      if (currentSongIndex == songList.length - 1) {
        this.currentSongIndex = 0;
      } else {
        this.currentSongIndex = currentSongIndex + 1;
      }

      setTimeout(function () {
        _this2.play(_this2.currentSong.url);
      }, 0);
    }, 1000),
    prevSong: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
      var _this3 = this;

      var currentSongIndex = this.currentSongIndex,
          songList = this.songList;

      if (currentSongIndex == 0) {
        this.currentSongIndex = songList.length - 1;
      } else {
        this.currentSongIndex--;
      }

      setTimeout(function () {
        _this3.play(_this3.currentSong.url);
      }, 0);
    }),
    start: function start() {
      audio.start();
    },
    play: function play(url) {
      audio.play(url);
    },
    pause: function pause() {
      audio.pause();
    },
    stop: function stop() {
      audio.stop();
    },
    seek: function seek() {
      audio.seek(20000);
    },
    loop: function loop() {
      this.isloop = !this.isloop;
      audio.loop(this.isloop);
    },
    duration: function duration() {
      var _this4 = this;

      audio.getDuration(this.currentSong.url, function (res) {
        _this4.res = res;
      });
    }
  }
});

/***/ }),

/***/ "C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-6be49aa4!C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-6be49aa4!C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "res": {
    "color": "#000000",
    "fontSize": "24"
  },
  "button": {
    "width": "230",
    "height": "80",
    "lineHeight": "80",
    "marginTop": "24",
    "textAlign": "center",
    "color": "#ffffff",
    "backgroundColor": "#3eb4ff",
    "fontSize": "26"
  }
}

/***/ }),

/***/ "C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-6be49aa4!C:\\Users\\18589\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-6be49aa4!C:/Users/18589/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      alignItems: "center",
      justifyContent: "center"
    }
  }, [_c('text', [_vm._v(_vm._s(_vm.currentSong.url))]), _c('text', {
    staticClass: ["res"]
  }, [_vm._v(_vm._s(_vm.currentSongIndex))]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": function($event) {
        _vm.play(_vm.currentSong.url)
      }
    }
  }, [_vm._v("播放（" + _vm._s(_vm.currentSong.url) + "）")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.start
    }
  }, [_vm._v("恢复播放")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.pause
    }
  }, [_vm._v("暂停")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.stop
    }
  }, [_vm._v("停止")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.nextSong
    }
  }, [_vm._v("下一曲")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.prevSong
    }
  }, [_vm._v("上一曲")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.seek
    }
  }, [_vm._v("指定进度")]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.loop
    }
  }, [_vm._v(_vm._s(_vm.isloop ? '取消循环' : '循环'))]), _c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.duration
    }
  }, [_vm._v("获取时长")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });