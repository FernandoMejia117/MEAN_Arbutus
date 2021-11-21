export default {
    jwtSecret: process.env.JWT_SECRET || 'somescrettoken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost/dbMadroños',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
}