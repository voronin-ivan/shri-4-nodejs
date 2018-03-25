const util = require('util');
const childProcess = require('child_process');
const path = require('path');

const exec = util.promisify(childProcess.exec);
const repoPath = path.join(__dirname, '../../repo');
const options = { cwd: repoPath };

const runExec = async (command) => {
    const { stdout, stderr } = await exec(command, options);

    if (stderr) {
        console.error(stderr);
    }

    return stdout;
};

const inlineString = string => string.toString().trim().split('\n');
const getHash = string => string.split('\t')[0].slice(0, 6);

module.exports = {
    runExec,
    inlineString,
    getHash,
};
