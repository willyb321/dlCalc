#!/usr/bin/env node

'use strict';
const prompt = require('prompt');
const moment = require('moment');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({pkg}).notify();

const schema = {
	properties: {
		dlSpeed: {
			description: 'Download speed in megabytes/s',
			required: true,
			message: 'Please use a number.',
			pattern: /[\d*\.?\d*]/ // eslint-disable-line no-useless-escape

		},
		fileSize: {
			description: 'File Size in megabytes',
			required: true,
			message: 'Please use a number.',
			pattern: /[\d*\.?\d*]/ // eslint-disable-line no-useless-escape
		}
	}
};

prompt.start();

function onErr(err) {
	console.log(err);
	return 1;
}

prompt.get(schema, (err, result) => {
	if (err) {
		return onErr(err);
	}
	const dlspeed = result.dlSpeed;
	const filesize = result.fileSize;
	const dlTime = filesize / dlspeed;
	const dlTimePretty = moment.duration(dlTime, 'seconds');
	console.log('Your approximate DL Time is: ' + dlTimePretty.humanize(false));
});

