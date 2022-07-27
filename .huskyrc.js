module.exports = {
  hooks: {
    // git commit 前的钩子
    'pre-commit': 'lint-staged',
    // 检查 git 提交信息
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
