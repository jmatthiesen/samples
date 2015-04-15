/// <reference path="../typings/requirejs/require.d.ts" />
export function initialize(): void {
    requirejs.config({
        paths: {
            jquery: '../../lib/jquery-1.10.2'
        }
    });
}