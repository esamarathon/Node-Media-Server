#!/usr/bin/env node 

const NodeMediaServer = require('..');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 9000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();
