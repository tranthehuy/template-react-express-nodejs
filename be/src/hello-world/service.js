import {exec} from 'child_process';

export default {
  ls: async function (req, res) {
    const { stdout, stderr } = await exec('ls scripts');
    stdout.on('data', function(chunk) {
      const lines = chunk.split('\n').filter(line => !!line);
      res.json({ scripts: lines })
    });
  },
  pwd: async function (req, res) {
    const { stdout, stderr } = await exec('pwd');
    stdout.on('data', function(chunk) {
      res.send(`run script ${req.query.name} \n ${JSON.stringify(chunk)}`);
    });
  },
};
