/// <reference path="../typings/requirejs/require.d.ts" />
requirejs.config({
    paths: {
        jquery: '../../Scripts/lib/jquery-1.10.2'
    }
});

// Directly call the RequireJS require() function and from here
// TypeScript's external module support takes over
require(["app"]);