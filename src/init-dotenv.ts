export default () => {
    if (process.env.NODE_ENV === 'production') {
        return console.log('Production mode. Will not initialize using dotenv')
    }

    require('dotenv').config()
}