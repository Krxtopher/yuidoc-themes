YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "AlphaMapFilter",
        "AlphaMaskFilter",
        "Bitmap",
        "BitmapAnimation",
        "BitmapText",
        "BlurFilter",
        "ButtonHelper",
        "ColorFilter",
        "ColorMatrix",
        "ColorMatrixFilter",
        "Command",
        "Container",
        "DOMElement",
        "DisplayObject",
        "EaselJS",
        "Event",
        "EventDispatcher",
        "Filter",
        "Graphics",
        "Matrix2D",
        "MouseEvent",
        "MovieClip",
        "MovieClipPlugin",
        "Point",
        "Rectangle",
        "Shadow",
        "Shape",
        "Sprite",
        "SpriteSheet",
        "SpriteSheetBuilder",
        "SpriteSheetUtils",
        "Stage",
        "Text",
        "Ticker",
        "Touch",
        "UID",
        "Utility Methods"
    ],
    "modules": [
        "CreateJS",
        "EaselJS"
    ],
    "allModules": [
        {
            "displayName": "CreateJS",
            "name": "CreateJS",
            "description": "A collection of Classes that are shared across all the CreateJS libraries.  The classes are included in the minified\nfiles of each library and are available on the createsjs namespace directly.\n\n<h4>Example</h4>\n     myObject.addEventListener(\"change\", createjs.proxy(myMethod, scope));"
        },
        {
            "displayName": "EaselJS",
            "name": "EaselJS",
            "description": "The EaselJS Javascript library provides a retained graphics mode for canvas including a full hierarchical display\nlist, a core interaction model, and helper classes to make working with 2D graphics in Canvas much easier.\nEaselJS provides straight forward solutions for working with rich graphics and interactivity with HTML5 Canvas...\n\n<h4>Getting Started</h4>\nTo get started with Easel, create a {{#crossLink \"Stage\"}}{{/crossLink}} that wraps a CANVAS element, and add\n{{#crossLink \"DisplayObject\"}}{{/crossLink}} instances as children. EaselJS supports:\n<ul>\n     <li>Images using {{#crossLink \"Bitmap\"}}{{/crossLink}}</li>\n     <li>Vector graphics using {{#crossLink \"Shape\"}}{{/crossLink}} and {{#crossLink \"Graphics\"}}{{/crossLink}}</li>\n     <li>Animated bitmaps using {{#crossLink \"SpriteSheet\"}}{{/crossLink}} and {{#crossLink \"Sprite\"}}{{/crossLink}}\n     <li>Simple text instances using {{#crossLink \"Text\"}}{{/crossLink}}</li>\n     <li>Containers that hold other DisplayObjects using {{#crossLink \"Container\"}}{{/crossLink}}</li>\n     <li>Control HTML DOM elements using {{#crossLink \"DOMElement\"}}{{/crossLink}}</li>\n</ul>\n\nAll display objects can be added to the stage as children, or drawn to a canvas directly.\n\n<b>User Interactions</b><br />\nAll display objects on stage (except DOMElement) will dispatch events when interacted with using a mouse or\ntouch. EaselJS supports hover, press, and release events, as well as an easy-to-use drag-and-drop model. Check out\n{{#crossLink \"MouseEvent\"}}{{/crossLink}} for more information.\n\n<h4>Simple Example</h4>\nThis example illustrates how to create and position a {{#crossLink \"Shape\"}}{{/crossLink}} on the {{#crossLink \"Stage\"}}{{/crossLink}}\nusing EaselJS' drawing API.\n\n\t    //Create a stage by getting a reference to the canvas\n\t    stage = new createjs.Stage(\"demoCanvas\");\n\t    //Create a Shape DisplayObject.\n\t    circle = new createjs.Shape();\n\t    circle.graphics.beginFill(\"red\").drawCircle(0, 0, 40);\n\t    //Set position of Shape instance.\n\t    circle.x = circle.y = 50;\n\t    //Add Shape instance to stage display list.\n\t    stage.addChild(circle);\n\t    //Update stage will render next frame\n\t    stage.update();\n\n<b>Simple Interaction Example</b><br>\n\n     displayObject.addEventListener(\"click\", handleClick);\n     function handleClick(event){\n         // Click happenened\n     }\n\n     displayObject.addEventListener(\"mousedown\", handlePress);\n     function handlePress(event) {\n         // A mouse press happened.\n         // Listen for mouse move while the mouse is down:\n         event.addEventListener(\"mousemove\", handleMove);\n     }\n     function handleMove(event) {\n         // Check out the DragAndDrop example in GitHub for more\n     }\n\n<b>Simple Animation Example</b><br />\nThis example moves the shape created in the previous demo across the screen.\n\n\t    //Update stage will render next frame\n\t    createjs.Ticker.addEventListener(\"tick\", handleTick);\n\n\t    function handleTick() {\n         //Circle will move 10 units to the right.\n\t    \tcircle.x += 10;\n\t    \t//Will cause the circle to wrap back\n\t    \tif (circle.x > stage.canvas.width) { circle.x = 0; }\n\t    \tstage.update();\n\t    }\n\n<h4>Other Features</h4>\nEaselJS also has built in support for\n<ul><li>Canvas features such as {{#crossLink \"Shadow\"}}{{/crossLink}} and CompositeOperation</li>\n     <li>{{#crossLink \"Ticker\"}}{{/crossLink}}, a global heartbeat that objects can subscribe to</li>\n     <li>Filters, including a provided {{#crossLink \"ColorMatrixFilter\"}}{{/crossLink}}, {{#crossLink \"AlphaMaskFilter\"}}{{/crossLink}},\n     {{#crossLink \"AlphaMapFilter\"}}{{/crossLink}}, and {{#crossLink \"BlurFilter\"}}{{/crossLink}}. See {{#crossLink \"Filter\"}}{{/crossLink}}\n     for more information</li>\n     <li>A {{#crossLink \"ButtonHelper\"}}{{/crossLink}} utility, to easily create interactive buttons</li>\n     <li>{{#crossLink \"SpriteSheetUtils\"}}{{/crossLink}} and a {{#crossLink \"SpriteSheetBuilder\"}}{{/crossLink}} to\n     help build and manage {{#crossLink \"SpriteSheet\"}}{{/crossLink}} functionality at run-time.</li>\n</ul>\n\n<h4>Browser Support</h4>\nAll modern browsers that support Canvas will support EaselJS (<a href=\"http://caniuse.com/canvas\">http://caniuse.com/canvas</a>).\nBrowser performance may vary between platforms, for example, Android Canvas has poor hardware support, and is much\nslower on average than most other browsers."
        }
    ]
} };
});