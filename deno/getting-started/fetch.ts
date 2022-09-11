// fetch.ts
const res = await fetch("https://www.githubstatus.com/api/v2/status.json");
const json = await res.json();
console.log(json);
