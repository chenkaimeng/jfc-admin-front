import {app_module, controller_module, service_module} from "../config/module.config"

class BannerService {
    constructor() {

    }

    getBannerPageList(pageNo) {
        let banners = [];
        for (var i = 1; i <= 10; i++) {
            banners.push({
                id: i,
                image: 'http://7xpeub.com1.z0.glb.clouddn.com/8276ca44e22285612aa7390e7a26a87d.jpg',
                title: '价值',
                url: 'http://www.baidu.com',
                category: 2,
                createTime: 1472141518064,
                state: 0
            })
        }
        return {
            count: 100,
            pageCount: 10,
            data: banners
        }
    }

    getBanner(bannerId) {
        return {
            id: bannerId,
            image: 'http://7xpeub.com1.z0.glb.clouddn.com/8276ca44e22285612aa7390e7a26a87d.jpg',
            title: '价值',
            url: 'http://www.baidu.com',
            category: 2,
            createTime: 1472141518064,
            state: 0
        }
    }
}

service_module.service("BannerService", BannerService);
