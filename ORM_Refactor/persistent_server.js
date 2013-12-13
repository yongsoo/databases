var Sequelize = require("sequelize");

var sequelize = new Sequelize("chat", "root", "");

var Messages = sequelize.define('sequel_messages', {
  username: Sequelize.STRING,
  msg: Sequelize.STRING,
  createdAt: Sequelize.DATE
});

exports.postMsgToDb = function(message) {
  Messages.sync().success(function() {
    var newMessage = Messages.build({
      username: message.username,
      msg: message.text,
      createdAt: new Date()
    });

    newMessage.save();
  });
}

exports.getMsgFromDb = function(cb) {
  console.log('inside getMsgFromDb function');
  var messageLog = [];
  Messages.sync().success(function() {
    Messages.findAll({
     limit: 10,
     order: "createdAt DESC"
    }).success(function(msg) {
      console.log('inside success function of getMsgFromDb');
        msg.forEach(function(message) {
          var obj = {};
          obj.username = message.dataValues.username;
          obj.text = message.dataValues.msg;
          obj.createdAt = message.dataValues.createdAt;
          messageLog.push(obj);
      });

      cb(messageLog);
    });
  });

}