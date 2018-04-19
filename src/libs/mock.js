import Mock from 'mockjs';
import glab from '../gloabl/gloabl';
//import service from './index';
//var Mock =new Mock;

const Random = Mock.Random;
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 5; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject);
    }
 
    return {
        articles: articles
    }
}

const produceNewsData1 = function() {
    let articles = [];
    for (let i = 0; i < 5; i++) {
        let newArticleObject = Mock.mock({
            'name': '@name',

            'age|1-100': 100,
            
            'color': '@color'
        });
        articles.push(newArticleObject);
    }
 
    return {
        articles: articles
    }
}
// export default Mock.mock(''+glab.userId+'/web/login','post',{
//     'name': '@name',

//     'age|1-100': 100,

//     'color': '@color'
// });

// login (params, callback) {
//     service.post('/web/login', params, callback);
// }
//Mock.mock(''+glab.userId+'/web/login', 'post', produceNewsData);
Mock.mock(''+glab.userId+'/web/login', 'post', produceNewsData1);