import { request } from "@/utils/http"


/**
 * 首页-列表
 * @param listType 列表类型
 */
export const getHomeBannerAPI = (listType = 1) => {
    return request({
        method: 'GET',
        url: '/home/list',
        data: {
            listType,
        }
    })
}
