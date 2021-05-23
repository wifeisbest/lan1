const sitesRouter = require('./sites');
const nameRouter = require('./name');
const createName = require('./create');
const auth = require('./auth')

function router(app){
    app.use('/name', nameRouter);
    app.use('/',sitesRouter);
    app.use('/about',sitesRouter);
    app.use('/create',createName);
    app.use('/auth',auth)

}

module.exports = router;
