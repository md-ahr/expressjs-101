/**
 ** Express JS Methods & Properties:
    ---------------------------------

 ** express() methods -
 **     1. express.json()
 **     2. express.Router()
 **     3. express.static('rootDir', options)
 **     4. express.urlencoded({ extended: true/false })

 ** application properties -
 **     1. app.locals
 **     2. app.mountpath

 ** application events -
 **     1. mount

 ** application methods -
 **     1. app.all()
 **     2. app.delete()
 **     3. app.disable()
 **     4. app.disabled()
 **     5. app.enable()
 **     6. app.enabled()
 **     7. app.engine()
 **     8. app.listen()
 **     9. app.method()
 **     10. app.path()
 **     11. app.post()
 **     12. app.put()
 **     13. app.patch()
 **     14. app.delete()
 **     15. app.get()
 **     16. app.set()
 **     17. app.render()
 **     18. app.route()
 **     19. app.use()

 ** request properties -
 **     1. req.body()
 **     2. req.cookies() // need cookie-parse package
 **     3. req.hostname
 **     4. req.ip
 **     5. req.method
 **     6. req.params
 **     7. req.query

 ** request methods -
 **     1. req.accepts()
 **     2. req.get() // get request header properties

 ** response properties -
 **     1. res.locals
 **     2. res.headersSent
 **     3. res.app

 ** response methods -
 **     1. res.append()
 **     2. res.attachment()
 **     3. res.cookie()
 **     4. res.download()
 **     5. res.end()
 **     6. res.format()
 **     7. res.get()
 **     8. res.json()
 **     9. res.jsonp()
 **     10. res.redirect()
 **     11. res.render()
 **     12. res.send()
 **     13. res.sendFile()
 **     14. res.set()
 **     15. res.status()

 ** middlewares -
 **     - handle common tasks
 **     - request logs
 **     - filter request
 **     - modify or reshape request
 **     - validate request body
 **     - authenticate or authorize request
 **     - add additional details to request body
 **     - response bad requests
 **     - pass requests to next middleware or response handler
 **     - app.use(middleware) for register a middleware

 ** router methods -
 **     1. router.all()
 **     2. router.METHOD()
 **     3. router.route()
 **     4. router.use() // use on large size application
*/