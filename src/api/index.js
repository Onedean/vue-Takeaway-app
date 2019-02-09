/*
包含n个接口请求的函数模块
函数的返回值：promise对象
 */
import ajax from './ajax.js'
//const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')
// 3、根据经纬度获取商铺列表
export const reqShopList = (latitude,longitude) => ajax(BASE_URL+'/shops',{latitude,longitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash,keyword) => ajax(BASE_URL+'/search_shops',{geohash,keyword})
// 5、用户名密码登陆
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')
// 6、发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode',{phone})
// 7、手机号验证码登陆
export const reqSmsLogin = (phone,code) => ajax(BASE_URL+'/login_sms',{phone,code},'POST')
// 8、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
// 9、用户登出
export const reqLogout = () => ajax(BASE_URL+'/logout')

// 获取商家商品数组
export const reqShopGoods = () => ajax('/goods')
// 获取商家评价数组
export const reqShopRatings = () => ajax('/ratings')
// 获取商家信息
export const reqShopInfo = () => ajax('/info')
