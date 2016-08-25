import {app_module, controller_module, service_module} from '../config/module.config'

class VideoService {
    constructor() {
    }

    getAlbumPageList(pageNo) {
        let albums = [];
        for (var i = 1; i <= 10; i++) {
            albums.push({
                id: i,
                title: '【老郑大讲堂】家族基金与全球资产配置',
                videoCount: 5,
                likeCount: 10,
                collectCount: 10, //收藏次数
                downloadCount: 10, //下载次数
                state: 1
            });
        }
        return {
            pageCount: 5,
            count: 100,
            data: albums
        }
    }

    getAlbum(albumId) {
        return {
            id: albumId,
            title: '【老郑大讲堂】家族基金与全球资产配置',
            state: 1,
            videoCount: 5,
            desc: '前沿讲座',
            image: 'https://img3.aixuehuisi.com/jdxk_2f3abc9122b34a8fc7d237891610c76d3'
        }
    }

    getVideoPageList(albumId, pageNo) {
        let video_list = [];
        for (var i = 1; i <= 10; i++) {
            video_list.push({
                id: i,
                title: '家族基金与全球资产配置（之一）',
                orderNum: i, //第几集
                collectCount: 10,
                likeCount: 10,
                downloadCount: 10
            });
        }
        return {
            pageCount: 5,
            count: 100,
            data: video_list
        }
    }

    getVideo(vidoeId) {
        return {
            title: '家族基金与全球资产配置（之一）',
            htmlCode: '<iframe frameborder="0" width="300" height="200" src="http://v.qq.com/iframe/player.html?vid=k0161kp0yty&tiny=0&auto=0" allowfullscreen></iframe>',
            orderNum: 1,
            desc: '国内股市振荡，房产市场冷热不均，资本市场处处暗藏凶险，面对多变的资本市场何去何从，面对复杂的国际形势如何抉择，家族财富的传承如何延续，成为越来越多的高净值人士的困惑。知名家族财富管理专家、北大清华澳洲麦格理大学客座教授、全球资产配置先导者郑锦桥教授为您的资产全球配置指点迷津，为财富家族的成功传承提供最佳解决方案。',
            image: 'https://img3.aixuehuisi.com/jdxk_2f3abc9122b34a8fc7d237891610c76d3'
        }
    }
}

service_module.service('VideoService', VideoService);
