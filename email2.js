/**
 * 使用其他传输插件
 * 其他代码类似，差别只是在创建transport上
 * Created by jiajiangyi on 2016/12/26.
 */

'use strict';

var config = require('./config');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

// 开启一个 SMTP 连接池
var transport = nodemailer.createTransport(smtpTransport(config.mail.from));

/**
 * 发送邮件
 * @param subject 邮件标题
 * @param html 邮件内容
 */
function sendMail(subject, html) {
    // 设置邮件内容
    var mailOptions = {
        from: [config.mail.from.name, config.mail.from.auth.user].join(' '), // 发件地址
        to: config.mail.to.join(','), // 收件列表
        subject: subject, // 标题
        html: html // html 内容
    }

    // 发送邮件
    transport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.error(error);
        } else {
            console.log(response);
        }
        transport.close(); // 如果没用，关闭连接池
    });
}

var subjectContent = "hello world";
var emailContent = "<b>thanks a for visiting!</b> 世界，你好！";

sendMail(subjectContent,emailContent);



