let fs = require('fs');
let path = require('path');
let dp = path.join(__dirname, "EXS");
if (!fs.existsSync(dp)) fs.mkdirSync(dp);

const execSync = require('child_process').execSync;
let tDir = path.join(__dirname, "CONVERT-WITH-MOSS");
if (!fs.existsSync(tDir)) fs.mkdirSync(tDir);
let sfzs = fs.readdirSync(dp).filter(d => d.endsWith('.sfz')).map(f => path.join(dp, f));
sfzs.forEach(processSFZ);

function processSFZ(s) {
    let fData = fs.readFileSync(s).toString();
    let m = fData.match(/default_path=([^\/]+)\//);
    if (m.length != 2) {
        console.log(`${s} does not seem to be a mac sfz file converted from exs2sfz!`);
        return;
    }
    let sDir = path.join(dp, m[1]);
    if (!fs.existsSync(sDir)) {
        console.log(`${sDir} does not seem to be the Samples Directory`);
        return;
    }
    let aifs = fs.readdirSync(sDir).filter(d => d.endsWith(".aif"));
    aifs.forEach(a => {
        let f = path.join(sDir, a);
        let odir = path.join(tDir, m[1]);
        if (!fs.existsSync(odir)) fs.mkdirSync(odir);
        let ofile = path.join(odir, a.replace('.aif', '.WAV'));
        let cmd = `sox "${f}" -t wavpcm "${ofile}"`;
        let c = execSync(cmd);
    });
    let wavs = fs.readdirSync(sDir).filter(d => d.toLowerCase().endsWith(".wav"));
    wavs.forEach(a => {
        let f = path.join(sDir, a);
        let odir = path.join(tDir, m[1]);
        if (!fs.existsSync(odir)) fs.mkdirSync(odir);
        let ofile = path.join(odir, a);
        fs.copyFileSync(f, ofile);

    });

    let oData = fData.replaceAll('.aif ', '.WAV ');
    fs.writeFileSync(path.join(tDir, path.basename(s)), oData);
    console.log(`Converted: ${path.basename(s)}`);

}