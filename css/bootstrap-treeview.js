import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "divpanel:first-child": {
        "marginTop": 20
    },
    "divtreeview": {
        "minWidth": 100,
        "minHeight": 100,
        "maxHeight": 256,
        "overflow": "auto",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "marginBottom": 20,
        "color": "#369",
        "border": "solid 1px",
        "borderRadius": 4
    },
    "divtreeview ul:first-child:before": {
        "display": "none"
    },
    "treeview": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none",
        "color": "#369"
    },
    "treeview ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 1,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none",
        "color": "#369",
        "position": "relative"
    },
    "treeview ul ul": {
        "marginLeft": 0.5
    },
    "treeview ul:before": {
        "content": "",
        "display": "block",
        "width": 0,
        "position": "absolute",
        "top": 0,
        "left": 0,
        "borderLeft": "1px solid",
        "bottom": 15
    },
    "treeview li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "lineHeight": 2,
        "fontWeight": "700",
        "position": "relative"
    },
    "treeview ul li:before": {
        "content": "",
        "display": "block",
        "width": 10,
        "height": 0,
        "borderTop": "1px solid",
        "marginTop": -1,
        "position": "absolute",
        "top": 1,
        "left": 0
    },
    "tree-indicator": {
        "marginRight": 5,
        "cursor": "pointer"
    },
    "treeview li a": {
        "textDecoration": "none",
        "color": "inherit",
        "cursor": "pointer"
    },
    "treeview li button": {
        "textDecoration": "none",
        "color": "inherit",
        "border": "none",
        "background": "transparent",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "outline": 0
    },
    "treeview li button:active": {
        "textDecoration": "none",
        "color": "inherit",
        "border": "none",
        "background": "transparent",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "outline": 0
    },
    "treeview li button:focus": {
        "textDecoration": "none",
        "color": "inherit",
        "border": "none",
        "background": "transparent",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "outline": 0
    }
});