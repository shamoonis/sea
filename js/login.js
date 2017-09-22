import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:before": {
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:after": {
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "body": {
        "background": "#2c3338",
        "color": "#606468",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "a": {
        "color": "#eee",
        "textDecoration": "none"
    },
    "a:hover": {
        "textDecoration": "underline"
    },
    "input": {
        "border": "none",
        "fontSize": 14,
        "lineHeight": 1.5,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "WebkitAppearance": "none"
    },
    "p": {
        "lineHeight": 1.5,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "clearfix": {
        "Zoom": 1
    },
    "clearfix:before": {
        "content": "' '",
        "display": "table"
    },
    "clearfix:after": {
        "content": "' '",
        "display": "table",
        "clear": "both"
    },
    "wrapper": {
        "left": "50%",
        "position": "fixed",
        "top": "50%",
        "WebkitTransform": "translate(-50%, -50%)",
        "MsTransform": "translate(-50%, -50%)",
        "transform": "translate(-50%, -50%)"
    },
    "login": {
        "width": 280
    },
    "login form span": {
        "backgroundColor": "#363b41",
        "borderRadius": "3px 0px 0px 3px",
        "color": "#606468",
        "display": "block",
        "float": "left",
        "height": 50,
        "lineHeight": 50,
        "textAlign": "center",
        "width": 50
    },
    "login form input": {
        "height": 50
    },
    "login form input[type=\"text\"]": {
        "backgroundColor": "#3b4148",
        "borderRadius": "0px 3px 3px 0px",
        "color": "#ddd",
        "marginBottom": 1,
        "paddingTop": 0,
        "paddingRight": 16,
        "paddingBottom": 0,
        "paddingLeft": 16,
        "width": 230
    },
    "input[type=\"password\"]": {
        "backgroundColor": "#3b4148",
        "borderRadius": "0px 3px 3px 0px",
        "color": "#ddd",
        "marginBottom": 1,
        "paddingTop": 0,
        "paddingRight": 16,
        "paddingBottom": 0,
        "paddingLeft": 16,
        "width": 230
    },
    "login form input[type=\"submit\"]": {
        "borderRadius": 3,
        "MozBorderRadius": 3,
        "WebkitBorderRadius": 3,
        "backgroundColor": "#024959",
        "color": "#eee",
        "fontWeight": "bold",
        "marginBottom": 2,
        "textTransform": "uppercase",
        "width": 280
    },
    "login form input[type=\"submit\"]:hover": {
        "backgroundColor": "#037E8C"
    },
    "login > p": {
        "textAlign": "center"
    },
    "login > p span": {
        "paddingLeft": 5
    }
});