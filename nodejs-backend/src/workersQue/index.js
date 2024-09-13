const { createJobQueWorker } = require('./processJobQueues');
// const { createDynaLoaderQueWorker } = require('./processDynaLoaderQues');
const {
  createChangeForgotPasswordQueWorker,
} = require('./processChangeForgotPasswordQue');
const { createMailQueWorker } = require('./processEmails');
const {
  createUserInvitationOnCreateOnLogin,
} = require('./processUserInvitationOnCreateOnLoginQues');

const createWorker = (app) => {
  createJobQueWorker(app);
  createMailQueWorker(app);
  createChangeForgotPasswordQueWorker(app);
  createUserInvitationOnCreateOnLogin(app);
};

module.exports = createWorker;
