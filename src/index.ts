import { Handler } from 'aws-lambda'
export const handler: Handler = async () => {
  console.log("HELLO WORLD")
  return "HI!"
}