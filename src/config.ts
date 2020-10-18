import path from 'path'

interface AppConfig {
    mongoUrl: string
    sessionSecret: string
    staticRoot: string
}

const config: AppConfig = {
    mongoUrl: process.env.MONGO_URL as string,
    sessionSecret: process.env.SESSION_SECRET as string,
    staticRoot: path.join(__dirname, '../', 'public')
}

export default config