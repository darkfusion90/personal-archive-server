interface AppConfig {
    mongoUrl: string
    sessionSecret: string
}

const config: AppConfig = {
    mongoUrl: process.env.MONGO_URL as string,
    sessionSecret: process.env.SESSION_SECRET as string
}

export default config