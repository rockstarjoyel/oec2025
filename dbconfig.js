const config = {
    user: 'OECTEST',
    password: 'TesT99$',
    server: 'OECSERVER4',
    database: 'DEV_TEST',
    options: {
        encrypt: false,
        trustServerCertificate: true,
        enableArithAbort: true
    },
    pool: {
        max: 10,                 // Max number of connections
        min: 0,                  // Min number of connections
        idleTimeoutMillis: 30000 // Close idle connections after 30 seconds
    }
};
