module.exports = router => {

    router.post('/auth-answer', function(request, response) {

        var method = request.session.data['authMethod']
        if (method == "text-message"){
            response.redirect("/govukonelogin/create/create-mobile-number")
        } else {
            response.redirect("/govukonelogin/create/authenticator")
        }
    })
    

    router.post('/sign-in-auth-answer', function(request, response) {

        var method = request.session.data['authMethod']
        if (method == "text-message"){
            response.redirect("/govukonelogin/sign-in/sign-in-check-phone")
        } else {
            response.redirect("/govukonelogin/sign-in/sign-in-check-app")
        }
    })
    


}