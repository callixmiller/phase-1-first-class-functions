function receivesAFunction(callback) {
    return callback();   
}

function returnsANamedFunction(aNamedFunction) {
    return function aNamedFunction() {};
}

function returnsAnAnonymousFunction() {
    return function() {};
}