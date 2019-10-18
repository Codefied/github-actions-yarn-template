import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  const optionalInput = core.getInput("optional_input");
  console.log(optionalInput);

  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
