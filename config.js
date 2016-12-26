/**
 * Created by jiajiangyi on 2016/12/26.
 */


module.exports = {
    mail: {
        from: {
            name: 'sylujia', //名字
            host: "smtp.163.com", // 主机
            secureConnection: true, // 使用 SSL
            port: 465, // SMTP 端口
            auth: {
                user: '***@163.com', // 账号
                pass: '****' // 第三方授权码
            }
        },
        to: [
            'Jia Jiangyi <***@qq.com>'
        ]
    }
};





