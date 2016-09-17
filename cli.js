#!/usr/bin/env node

'use strict';
const prompt = require('prompt');

const schema = {
    properties: {
      dlSpeed: {
        description: 'Download speed in megabytes/s',
        required: true
      },
      fileSize: {
        description: 'File Size in megabytes',
        required: true
      }
    }
  };

prompt.start();

function onErr(err) {
	console.log(err);
	return 1;
}

prompt.get(schema, (err, result) => {
	const dlspeed = result.dlSpeed;
	const filesize = result.fileSize;
	if (err) {
		return onErr(err);
	}
	const dlTime = filesize / dlspeed
	console.log(dlTime);
});
