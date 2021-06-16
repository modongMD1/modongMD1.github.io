const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // mini: false,
    fixed: true,//吸底模式
    autoplay: true,//默认是否自动播放
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,//默认音量
    mutex: true,//是否不允许多个播放器同时播放
    listFolded: true,//是否默认收起播放列表
    listMaxHeight: 90,//播放列表的高度
    lrcType: 3, //使用lrc文件提供歌词
	//网易云默认外链链接：http://music.163.com/song/media/outer/url?id=ID数字.mp3
    audio: [
        {
            //歌曲名字
            name: 'Butter-Fly',
            //歌曲的作者
            artist: '和田光司',
            //歌曲的外联链接
            url: 'http://music.163.com/song/media/outer/url?id=28850500.mp3',
            //歌曲的图片
            cover: 'http://p1.music.126.net/mZKiQ4LnkjL4scCKX6w8Zg==/3405187512279011.jpg?param=130y130',
            //歌曲的lrc歌词
            lrc: '/./dist/music/lrc/Butter-Fly.lrc',
            //歌曲的切换到此音频时的主题色
            theme: '#46718b'
        },
        {
            name: '兔子先生',
            artist: '菠萝赛东',
            url: 'http://music.163.com/song/media/outer/url?id=1320060799.mp3',
            cover: 'http://p2.music.126.net/DtLcS_kIl5VEKHKUB9s4gg==/109951163621943688.jpg?param=130y130',
            lrc: '/./dist/music/lrc/兔子先生.lrc',
            theme: '#46718b'
        },
		{
            name: '秋分',
            artist: '音阙诗听 / 昆玉',
            url: 'http://music.163.com/song/media/outer/url?id=1392177451.mp3',
            cover: 'http://p2.music.126.net/KFWbxh1ZLyy9WR77Ca08tA==/109951164866828786.jpg?param=130y130',
            lrc: '/./dist/music/lrc/秋分.lrc',
            theme: '#46718b'
        },
		{
            name: 'Anything Goes! (「仮面ライダーオーズ/000」)',
            artist: '大黒摩季',
            url: 'http://music.163.com/song/media/outer/url?id=1362000583.mp3',
            cover: 'http://p1.music.126.net/PnNTfWOk9iI7sVvnaNw6ug==/109951165227114418.jpg?param=130y130',
            lrc: '/./dist/music/lrc/Anything Goes!.lrc',
	        theme: '#46718b'
        },
		{
            name: '认真地老去',
            artist: '张希 / 曹方',
            url: 'http://music.163.com/song/media/outer/url?id=461080452.mp3',
            cover: 'http://p1.music.126.net/LwisuwyurwWs3zpkoBIC9g==/19024849695642179.jpg?param=130y130',
            lrc: '/./dist/music/lrc/认真地老去.lrc',
	    theme: '#46718b'
        },
        {
            name: '今天你要嫁给我',
            artist: '陶喆 / 蔡依林',
            url: 'http://music.163.com/song/media/outer/url?id=5254811.mp3',
            cover: 'http://p2.music.126.net/ukJi8SPQR0StMTHS31titg==/109951163449486613.jpg?param=130y130',
            lrc: '/./dist/music/lrc/今天你要嫁给我.lrc',
	    theme: '#46718b'
        }
    ]
});