const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const list = discussionsData.find((item) => {
      return item.id === Number(req.params.id);
    });
    if (list) {
      res.status(200).send(list);
    } else {
      res.status(404).end();
    }
  },
};

module.exports = {
  discussionsController,
};
