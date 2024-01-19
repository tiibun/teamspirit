import { readFileSync, writeFileSync } from 'fs';

// package.jsonからバージョンを読み取る
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
const version = packageJson.version;

// manifest.jsonを読み取る
const manifestJson = JSON.parse(readFileSync('./manifest.json', 'utf-8'));

// manifest.jsonのバージョンを更新する
manifestJson.version = version;

// manifest.jsonを更新する
writeFileSync('./manifest.json', JSON.stringify(manifestJson, null, 2));
