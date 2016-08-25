export const menu_tree = [
    {
        name: "私募管理",
        children: [
            {
                name: "私募列表",
                state: "pes.list"
            },{
                name: "添加私募",
                state: "pes.add"
            }
        ]
    },
    {
        name: "文章管理",
        children: [
            {
                name: "文章列表",
                state: "topics.list"
            },{
                name: "添加文章",
                state: "topics.add"
            }
        ]
    },
    {
        name: "视频集管理",
        children: [
            {
                name: "视频集列表",
                state: "video_collects.list"
            },{
                name: "添加视频集",
                state: "video_collects.add"
            }
        ]
    },
    {
        name: "Banner管理",
        children: [
            {
                name: "Banner列表",
                state: "banners.list"
            },{
                name: "添加Banner",
                state: "banners.add"
            }
        ]
    },
    {
        name: "用户管理",
        children: [
            {
                name: "用户列表",
                state: "users.list"
            }, {
                name: "添加用户",
                state: "users.add"
            }, {
                name: "导入用户",
                state: "users.import"
            }
        ]
    },
    {
        name: "订单管理",
        children: [
            {
                name: "订单列表",
                state: "orders.list"
            }
        ]
    },
    {
        name: "会员管理",
        children: [
            {
                name: "会员列表",
                state: "members.list"
            }
        ]
    },
    {
        name: "收益统计管理",
        children: [
            {
                name: "收益统计列表",
                state: "income_stats.list"
            }
        ]
    },
    {
        name: "投资项目管理",
        children: [
            {
                name: "投资项目列表",
                state: "projects.list"
            },{
                name: "添加投资项目",
                state: "projects.add"
            },{
                name: "导入投资项目",
                state: "projects.import"
            }
        ]
    },
    {
        name: "收益明细管理",
        children: [
            {
                name: "收益明细列表",
                state: "income_details.list"
            },{
                name: "添加收益明细",
                state: "income_details.add"
            },{
                name: "导入个人统计和收益明细",
                state: "income_details.import"
            }
        ]
    },
    {
        name: "个人收益管理",
        children: [
            {
                name: "个人收益列表",
                state: "person_incomes.list"
            }
        ]
    }
]
