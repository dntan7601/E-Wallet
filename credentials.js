module.exports = {
    cookieSecret: "your cookie secret goes here",
    mongo: {
        development: {
            connectionString: 'mongodb+srv://dntan761:Daonhattan123@cluster0.2asohhp.mongodb.net/?retryWrites=true&w=majority',
        },
        production: {
            connectionString: 'your production_connection_string',
        },
    },
}
