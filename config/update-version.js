const fs = require('fs');
const chalk = require('chalk');

// 每次打包构建代码，自动更新版本号，同一天加1，隔天自动回归变成 1 。例如{ 今天：1.20200917.3，第二天：1.20200918.1 }
try {
  function AddZero(time) {
    if (time < 10) {
      return "0" + time
    } else {
      return time
    }
  }

  const packageTxt = fs.readFileSync('./package.json', 'utf8');
  const versionData = packageTxt.split('\n');
  const packageJson = JSON.parse(packageTxt);
  const VersionArr = packageJson.version.split('.');
  const date = new Date();
  const today = date.getFullYear() + "" + AddZero((date.getMonth() + 1)) + "" + AddZero(date.getDate())
  if (today == VersionArr[1]) {
    VersionArr[2] = parseInt(VersionArr[2]) + 1
  } else {
    VersionArr[1] = date.getFullYear() + "" + AddZero((date.getMonth() + 1)) + "" + AddZero(date.getDate())
    VersionArr[2] = 1;
  }
  const versionLine = VersionArr.join('.');
  for (let i = 0; i < versionData.length; i++) {
    if (versionData[i].indexOf('"version":') != -1) {
      versionData.splice(i, 1, '  "version": "' + versionLine + '",');
      break;
    }
  }
  fs.writeFileSync('./package.json', versionData.join('\n'), 'utf8');
  console.log(chalk.green.bold('更新版本号成功！当前最新版本号为：' + versionLine));
} catch (e) {
  console.log(chalk.red.bold('读取文件修改版本号出错:', e.toString()));
}
