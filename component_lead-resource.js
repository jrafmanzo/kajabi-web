$(document).ready(function() {
    // Function to set a session cookie
    function setSessionCookie(name, value) {
        document.cookie = name + "=" + value + "; path=/";
    }

    // Add event listener for the button with ID "#lead-resource-cookie"
    $("#lead-resource-cookie").on("click", function() {
        // Set the cookie called "Lead Resource"
        setSessionCookie("Lead Resource", "true");

        // Remove the class "hide" from all buttons with ID "#lead-resource-open"
        $("#lead-resource-open").removeClass("hide");

        // Add the class "hide" to all buttons with ID "#lead-resource-trigger"
        $("#lead-resource-trigger").addClass("hide");
    });
});

$(document).ready(function() {
    // Function to get a cookie value by name
    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Check if "Lead Resource" cookie exists on page load
    if (getCookie("Lead Resource")) {
        // Remove the class "hide" from all elements with ID "#lead-resource-open"
        $("#lead-resource-open").removeClass("hide");

        // Add the class "hide" to all elements with ID "#lead-resource-trigger"
        $("#lead-resource-trigger").addClass("hide");
    }

    // Function to set a session cookie
    function setSessionCookie(name, value) {
        document.cookie = name + "=" + value + "; path=/";
    }

    // Add event listener for the button with ID "#lead-resource-cookie"
    $("#lead-resource-cookie").on("click", function() {
        // Set the cookie called "Lead Resource"
        setSessionCookie("Lead Resource", "true");

        // Remove the class "hide" from all elements with ID "#lead-resource-open"
        $("#lead-resource-open").removeClass("hide");

        // Add the class "hide" to all elements with ID "#lead-resource-trigger"
        $("#lead-resource-trigger").addClass("hide");
    });
});
