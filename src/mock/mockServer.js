/*
使用mockjs提供mock接口数据
 */
import Mock from 'mockjs'
import data from './data.json'

//返回goods的接口
Mock.mock('/goods',{code: 0, data: data.goods})
//返回ratings的接口
Mock.mock('/ratings',{code: 0, data: data.ratings})
//返回info的s接口
Mock.mock('/info',{code: 0, data: data.info})

// export default ???  不需要向外暴露任何数据，只要在主入口js文件中引入该文件保证加载使用即可
