import { exec, spawn } from 'child_process';
import fs from 'fs';

export const runScript = async(command, cb) => {
  const { stdout, stderr } = await exec(command);
  stdout.on('data', cb);
}

export default {
  read: async function (req, res) {
    const readable = fs.createReadStream(`./scripts/${req.query.name}`, {
        encoding: 'utf8',
        fd: null,
    });
    readable.on('readable', function() {
      try {
        const chunk = readable.read(10);
        res.json({ result: chunk?.toString() || '<none>'})
      } catch(err) {
        console.error(err)
      }
      
    });
  },
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
      res.json({ command, result: chunk.toString() })
    })
    stderr.on('data', function(chunk) { 
      res.json({ command, result: chunk.toString() })
    })
  }
};
