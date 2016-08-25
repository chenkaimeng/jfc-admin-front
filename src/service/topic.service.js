import {app_module, controller_module, service_module} from '../config/module.config';

class TopicService {
    constructor() {

    }

    getTopicPageList(pageNo) {
        let topics = [];
        for (var i = 0; i <= 10; i++) {
            topics.push({
                id: i,
                title: '嘉富诚第三期家族办公室私董会成功举办',
                author: '郑锦桥 创始人&董事长',
                category: 3
            })
        }

        return {
            count: 100,
            pageCount: 5,
            data: topics
        }
    }

    getTopic(topicId) {
        return {
            title: '嘉富诚第三期家族办公室私董会成功举办',
            author: '郑锦桥',
            category: 4,
            desc: '嘉富诚第三期家族办公室私董会成功举办',
            image: 'https://img3.aixuehuisi.com/jdxk_2f3abc9122b34a8fc7d237891610c76d3',
            url: 'http://mp.weixin.qq.com/s?__biz=MjM5MjgwOTI0MA==&mid=503543112&idx=1&sn=76def9a51f2c854a2d9b30a459099f98#rd'
        }
    }
}

service_module.service('TopicService', TopicService);
