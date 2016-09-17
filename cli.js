#!/usr/bin/env node

'use strict';
const prompt = require('prompt');

prompt.start();

function onErr(err) {
	console.log(err);
	return 1;
}

prompt.get(['DLSpeedmbyte', 'FileSizembyte'], (err, result) => {
	const dlspeed = result.DLSpeedmbyte;
	const filesize = result.FileSizembyte;
	if (err) {
		return onErr(err);
	}
	const dlTime = filesize / dlspeed
	console.log(dlTime);
});
