/**
 * 使用内置传输发送邮件
 * Created by jiajiangyi on 2016/12/26.
 */

'use strict';

var config = require("./config.js");
var nodemailer = require('nodemailer');

// 开启一个 SMTP 连接池
var smtpTransport = nodemailer.createTransport(config.mail.from);

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
    };

    // 发送邮件
    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        } else {
            console.log("Message sent: " + info.response);
        }
    });
}

var subjectContent = "hello world";
var emailContent = "<b>thanks a for visiting!</b> 世界，你好！";

sendMail(subjectContent, emailContent);





