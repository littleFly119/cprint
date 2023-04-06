import request from "@/utils/request.js"

// 获取token
export const getAuthTokenApi = () => {
    return request({
        method:"get",
        url:"/client/Auth/GetAuthToken",
    })
}