import debug from "https://cdn.skypack.dev/debug";

const log = debug('mylog');

debug.enable('mylog');

log('hello world');

