/*
 * Sample plugin scaffolding for Adobe XD.
 *
 * Visit http://adobexdplatform.com/ for API docs and more sample code.
 */

const { ImageFill } = require ("scenegraph");
const { getDocumentAsJSON } = require("xd-json-wrapper");

function myPluginCommand(selection,documentRoot) {
    
    if(selection.items.length>0) {
        console.log("OLD:");
        console.log(selection.items[0].fill);
        var fill = selection.items[0].fill;
		fill.scaleBehavior = ImageFill.SCALE_STRETCH;
        selection.items[0].fill = fill;
        console.log("NEW:");
        console.log(selection.items[0].fill);
    }
    
    const wrappedDocument= getDocumentAsJSON(documentRoot);
    const json = wrappedDocument.toJSON();
    console.log(json);
}

module.exports = {
    commands: {
        myPluginCommand: myPluginCommand
    }
};