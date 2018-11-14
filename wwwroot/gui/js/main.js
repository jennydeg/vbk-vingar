var npmBoilerplate = function (settings) {

    // Optional to pass along settings
    settings = settings || {};

    // Global variables 
    var orginWidth = window.innerWidth,
        navHeight = $('nav').outerHeight(),
        debug = false;

    // Create public object
    var Public = {};

    // Page-specific function
    Public.example = function () {

    };

    // Public functions
    var onResize = function () {
        var finishedResizing;
        window.onresize = function () {
            clearTimeout(finishedResizing);
            finishedResizing = setTimeout(function () {
                execute();
            }, 200);
        };

        function execute() {

            // Do stuff on window resize

            orginWidth = window.innerWidth;
        }
    };

    var navigation = function () {
        var mainNavButton = document.getElementById("toggle-menu");
        var mainNavigation = document.getElementById("navigation__main");
        var mainNavigationText = document.getElementById("navigation__menuText");
        mainNavButton.addEventListener("click", function () {
            var expanded = this.getAttribute("aria-expanded") === "true" || false;
            this.setAttribute("aria-expanded", !expanded);
            mainNavigation.classList.add("navigation__main--open");
            if (!expanded) {
                this.classList.add("navigation__menuIcon--open");
                mainNavigation.classList.add("navigation__main--open");
                mainNavigationText.innerHTML = "Stäng";
            } else {
                this.classList.remove("navigation__menuIcon--open");
                mainNavigation.classList.remove("navigation__main--open");
                mainNavigationText.innerHTML = "Meny";
            }
        });


    };
    /*    $('html').animate({
            scrollTop: $('<to element>').offset().top
        }, 400);*/

    // Internal functions
    function example() {

    }

    // Init function
    var init = function () {
        onResize();
        navigation();
    }();

    return Public;

}(window.npmBoilerplate = window.npmBoilerplate || {});