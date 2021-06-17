//IIFE
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteWarning = document.querySelectorAll('.btn-danger');

        for(button of deleteWarning)
        {
            button.addEventListener('click', (event)=>
                {
                    if(!confirm("Do you really want to delete this?"))
                    {
                       event.preventDefault();
                       window.location.assign('/contact-list');
                    }
                });
        }
    }
    window.addEventListener("load", Start);

})();