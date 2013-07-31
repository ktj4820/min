/* Colors (3 byte hex) */
Editor.segment_color = "#BBBBBB"; 
Editor.selected_segment_color = "#BBBBBB";

Editor.control_point_fill_color = "#FFAA00";
Editor.control_point_line_color = "#111111";
Editor.control_point_radius = 16;
Editor.control_point_line_width = 1.5;

Editor.recognition_result_color = "#111111";

Editor.stroke_width = 4;
Editor.selected_stroke_width = 4;
Editor.stroke_select_color = "#44F"
Editor.stroke_select_width = 2;

/* Symbol classification and attributes */
// Hierarchical tree of available symbol classes
Editor.symbol_tree = "example_tree_icdar.xml";

// The number of events to store in the event queue for momentum tracking
Editor.moveQueueLength = 2;

// Symbol layout classes (for DRACULAE)
Editor.ascender_chars = ['b','d','f','h','i','k','l','t'];
Editor.x_height_chars = ['a','c','e','m','n','o','r','s','u','v','w','x','z'];
Editor.descender_chars = ['g','j','p','q','y'];

Editor.recognition_timeout = 1500; // In milliseconds, used in RecognitionManager line 132.

// List of keycodes, I couldn't find a standard object for this
KeyCode = {
    backspace: 8,
    del: 46,
    enter: 13,
    left_arrow: 37,
    up_arrow: 38,
    right_arrow: 39,
    down_arrow: 40,
    group: "g",
    relabel: "l",
    pen: "p",
}

Editor.touchAndHoldTimeout = 800;
Editor.minTouchTimeDiff = 100;

Editor.DPRL_url = "http://www.cs.rit.edu/~dprl";
Editor.classifier = new Classifier();

//Editor.editor_root = "./";
Editor.editor_root = "http://129.21.34.109:";

/* Recognition servers and ports */
var saskatoon = "http://129.21.34.109:";
Editor.connected_components_server_url = saskatoon + "20000";
Editor.align_server_url = saskatoon + "1000";
Editor.data_server_url = saskatoon + "500"
Editor.inkml_save_server_url = saskatoon + "4205"

/* Clasification servers */
/*
  To add a new type of classifiction, just add the server URL to this
object and then create a 'classification_server' field on the new
stroke objects which references the correct URL in this one See
PenStroke.js for an example.
*/
ClassificationServers = {
    "PenStrokeClassifier": saskatoon + "1504", // Use part 2 (ICDAR 2011)
    "ImageBlobClassifier": saskatoon + "7006"
};

