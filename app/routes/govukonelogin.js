module.exports = router => {

    router.post('/auth-answer', function(request, response) {

        var method = request.session.data['authMethod']
        if (method == "text-message"){
            response.redirect("/govukonelogin/create/create-mobile-number")
        } else {
            response.redirect("/govukonelogin/create/authenticator")
        }
    })
    


}