const userController = require('./controllers/user');

function initRouter(app) {
    try {
        app.get('/',(req,res) => {
            res.writeHead(200, '',{
                'Content-Type': 'text/plain'});
            res.end('bonjour.');
            })
        app.get('/users',userController.getAllUsers);
        return app;
    } catch(error) {
        console.error(error);
        return false;
    }
}

exports.initRouter = initRouter;