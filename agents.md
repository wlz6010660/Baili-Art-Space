# Agent Handoff Notes

This repository is a static website for Baili Art Space. Use this file as the operational handoff guide for future coding sessions.

## Repository

- GitHub: `wlz6010660/Baili-Art-Space`
- Branch: `main`
- Local path: `/Users/baili/Documents/百里的网站`
- Site type: static HTML/CSS/JavaScript
- Vercel preset: `Other`

## Asset Policy

- Images are tracked in Git and should be available to Vercel.
- Videos stay local for now and must not be committed.
- Keep these ignore rules unless the user explicitly changes the video plan:

```gitignore
assets/vr-art/*.mp4
assets/vr-art/*.mov
assets/*.mov
```

Before committing, check that no video files are staged:

```bash
git diff --cached --name-only | grep -E '\.(mov|mp4)$'
```

No output means the staged set is safe with respect to videos.

## Normal Sync

Try ordinary Git first:

```bash
git status -sb
git push
```

This machine has repeatedly had unstable HTTPS Git transport to GitHub, with errors like:

- `Empty reply from server`
- `Failed to connect to github.com port 443`
- `Error in the HTTP2 framing layer`

If normal Git push/fetch fails but `gh api` still works, use the API sync method below.

## GitHub API Sync Fallback

Prerequisites:

```bash
/Users/baili/.local/bin/gh auth status
git status -sb
git rev-parse origin/main
```

Use this fallback only after making a normal local commit. It uploads the committed tree through GitHub's Git database API, then points remote `main` to the new commit.

```bash
/Applications/Codex.app/Contents/Resources/node <<'NODE'
const { spawnSync, execFileSync } = require('child_process');
const fs = require('fs');

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function ghApi(method, route, body) {
  const input = body === undefined ? undefined : JSON.stringify(body);
  let last = '';
  for (let attempt = 1; attempt <= 8; attempt++) {
    const args = ['api', '--method', method, route];
    if (body !== undefined) args.push('--input', '-');
    const res = spawnSync('/Users/baili/.local/bin/gh', args, {
      input,
      encoding: 'utf8',
      maxBuffer: 100 * 1024 * 1024,
      timeout: 180000
    });
    if (res.status === 0) return res.stdout.trim() ? JSON.parse(res.stdout) : {};
    last = `${res.stderr || ''}${res.stdout || ''}`.trim();
    if (attempt < 8) {
      console.log(`retry ${attempt}/7 for ${method} ${route}`);
      sleep(2000 * attempt);
    }
  }
  throw new Error(last || `${method} ${route} failed`);
}

const owner = 'wlz6010660';
const repo = 'Baili-Art-Space';
const remoteHead = execFileSync('git', ['rev-parse', 'origin/main'], { encoding: 'utf8' }).trim();
const changed = execFileSync('git', ['diff', '--name-only', '-z', 'origin/main..HEAD'])
  .toString('utf8')
  .split('\0')
  .filter(Boolean);

for (const file of changed) {
  if (!fs.existsSync(file)) continue;
  const bytes = fs.readFileSync(file);
  ghApi('POST', `repos/${owner}/${repo}/git/blobs`, {
    content: bytes.toString('base64'),
    encoding: 'base64'
  });
  console.log(`uploaded blob: ${file}`);
}

const rawTree = execFileSync('git', ['ls-tree', '-rz', 'HEAD'])
  .toString('utf8')
  .split('\0')
  .filter(Boolean);
const tree = rawTree.map((line) => {
  const tab = line.indexOf('\t');
  const meta = line.slice(0, tab).split(' ');
  return { mode: meta[0], type: meta[1], sha: meta[2], path: line.slice(tab + 1) };
});

const treeObj = ghApi('POST', `repos/${owner}/${repo}/git/trees`, { tree });
const message = execFileSync('git', ['log', '-1', '--pretty=%B'], { encoding: 'utf8' }).trim();
const authorName = execFileSync('git', ['show', '-s', '--format=%an', 'HEAD'], { encoding: 'utf8' }).trim();
const authorEmail = execFileSync('git', ['show', '-s', '--format=%ae', 'HEAD'], { encoding: 'utf8' }).trim();
const authorDate = execFileSync('git', ['show', '-s', '--format=%aI', 'HEAD'], { encoding: 'utf8' }).trim();
const committerName = execFileSync('git', ['show', '-s', '--format=%cn', 'HEAD'], { encoding: 'utf8' }).trim();
const committerEmail = execFileSync('git', ['show', '-s', '--format=%ce', 'HEAD'], { encoding: 'utf8' }).trim();
const committerDate = execFileSync('git', ['show', '-s', '--format=%cI', 'HEAD'], { encoding: 'utf8' }).trim();

const commit = ghApi('POST', `repos/${owner}/${repo}/git/commits`, {
  message,
  tree: treeObj.sha,
  parents: [remoteHead],
  author: { name: authorName, email: authorEmail, date: authorDate },
  committer: { name: committerName, email: committerEmail, date: committerDate }
});

ghApi('PATCH', `repos/${owner}/${repo}/git/refs/heads/main`, {
  sha: commit.sha,
  force: false
});

console.log(`updated remote main to ${commit.sha}`);
NODE
```

After the API sync, normal `git fetch` may still fail because of network transport. If GitHub confirms the remote commit but local `origin/main` is stale, either retry `git fetch origin main` later or recreate/update the remote ref locally only after verifying the remote commit SHA with:

```bash
/Users/baili/.local/bin/gh api repos/wlz6010660/Baili-Art-Space/git/ref/heads/main --jq '.object.sha'
```

## Current Deployment Notes

- `README.md` contains the user-facing project handoff.
- `DEPLOYMENT_NOTES.md` records the current deployment decision: images in GitHub, videos local, object storage/CDN/cloud server paused.
