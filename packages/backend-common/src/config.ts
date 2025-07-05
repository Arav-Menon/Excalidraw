import 'dotenv/config'

//@ts-ignore
export const JWT_SECRET = process.env.JWT_ROOM_TOKEN

console.log(JWT_SECRET)