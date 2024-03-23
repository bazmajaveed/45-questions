/*







*/
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
// Dfault large and message
make_shirt();
// Default message, medium size
make_shirt("medium");
// custom message, small size
make_shirt("small", "Drive into coding");
