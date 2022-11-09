import { exec, spawn } from 'child_process';

export const runScript = async(command, cb) => {
  const { stdout, stderr } = await exec(command);
  stdout.on('data', cb);
}

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
      res.json({ result: `run script ${req.query.name} \n ${JSON.stringify(chunk)}` })
    });
  },
  run: async function(req, res) {
    const command = `sh ./scripts/${req.query.name}`;
    const { stdout, stderr } = spawn('sh', [`./scripts/${req.query.name}`]);
    stdout.on('data', function(chunk) { 
      res.json({ command, result: chunk })
    })
    stderr.on('data', function(chunk) { 
      res.json({ command, result: chunk })
    })
  }
};
