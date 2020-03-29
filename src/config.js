module.exports = {
    // puppet_padplus Token
    token: "puppet_padplus_5aff7e574d786868",
    // 你的机器人名字
    name: "chatting_assistant",
    // 房间/群聊
    room: {
      // 管理群组列表
      roomList: {
        // 群名字(用于发送群名字加群):群id，后面会介绍到
        Web圈: "*****@chatroom",
        男神群: "*****@chatroom"
      },
      // 加入房间回复
      roomJoinReply: `你好，欢迎加入`
    },
    // 私人
    personal: {
      // 好友验证自动通过关键字
      addFriendKeywords: ["加群"],
      // 是否开启加群
      addRoom: true
    }
  }
  