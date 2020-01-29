import { Rocky } from '@guardian/rocky'

const rocky = new Rocky({
  name: "rocky-test",
  url: "https://github.com/guardian/rocky-test",
  parameters: {
    "parameterName": {
      description: "This is where some data goes"
    }
  },
  bucket: "rocky-test-dist",
  stacks: ['playground']
})

const deployment = rocky.deployment({
  name: "deployment",
  path: "./dist"
})

const lambda = rocky.lambda({
  name: "lambda",
  handler: "index.handler",
  deployment
})

