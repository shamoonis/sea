import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "gw-containergw-main-container gw-sidebargw-sidebar-fixed": {
        "left": "auto"
    },
    "gw-containergw-main-container gw-sidebargw-sidebar-fixed:before": {
        "left": "auto"
    },
    "gw-sidebar": {
        "paddingTop": 0,
        "paddingRight": 2,
        "paddingBottom": 0,
        "paddingLeft": 2,
        "bottom": 0,
        "top": 0,
        "left": 0
    },
    "gw-sidebar nano-pane": {},
    "gw-sidebar gw-nav-list li a": {
        "paddingLeft": 8
    },
    "gw-nav-list": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "gw-nav-list>li:first-child": {
        "borderTop": 0
    },
    "gw-nav-list>li": {
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "border": 0,
        "borderTop": "1px solid #fcfcfc",
        "borderBottom": "1px solid #e5e5e5",
        "position": "relative",
        "textDecoration": "none"
    },
    "gw-nav-list>liarrow-down:after": {
        "content": "''",
        "width": 7,
        "height": 7,
        "position": "absolute",
        "right": 10,
        "top": 15,
        "borderTop": "1px solid #bababa",
        "borderLeft": "1px solid #bababa",
        "WebkitTransform": "rotate(45deg)",
        "WebkitAnimation": "arrow-slide .5s 0s ease both"
    },
    "gw-menu-text": {
        "fontSize": 14
    },
    "gw-nav-list>liinit-arrow-down:after": {
        "content": "''",
        "width": 7,
        "height": 7,
        "position": "absolute",
        "right": 10,
        "top": 15,
        "borderRight": "1px solid #bababa",
        "borderBottom": "1px solid #bababa",
        "WebkitTransform": "rotate(45deg)"
    },
    "gw-nav-list>liarrow-up:after": {
        "content": "''",
        "width": 7,
        "height": 7,
        "position": "absolute",
        "right": 10,
        "top": 15,
        "borderRight": "1px solid #bababa",
        "borderBottom": "1px solid #bababa",
        "WebkitTransform": "rotate(45deg)",
        "WebkitAnimation": "arrow-slide1 .5s 0s ease both"
    },
    "gw-nav-list>liinit-arrow-up:after": {
        "content": "''",
        "width": 7,
        "height": 7,
        "position": "absolute",
        "right": 10,
        "top": 15,
        "borderTop": "1px solid #bababa",
        "borderLeft": "1px solid #bababa",
        "WebkitTransform": "rotate(45deg)"
    },
    "gw-nav-list>li>a": {
        "display": "block",
        "height": 38,
        "lineHeight": 36,
        "paddingTop": 0,
        "paddingRight": 16,
        "paddingBottom": 0,
        "paddingLeft": 7,
        "color": "#585858",
        "textShadow": "none!important",
        "fontSize": 0.82,
        "textDecoration": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "gw-open > a": {
        "outline": 0
    },
    "gw-nav-list>ligw-open": {
        "borderBottomColor": "#e5e5e5"
    },
    "gw-nav-list>ligw-open>a": {
        "color": "#1963aa"
    },
    "gw-nav-list gw-open>a": {
        "backgroundColor": "#fafafa"
    },
    "gw-nav-list gw-open>a:hover": {
        "backgroundColor": "#fafafa"
    },
    "gw-nav-list gw-open>a:focus": {
        "backgroundColor": "#fafafa"
    },
    "gw-nav gw-open > a": {
        "borderColor": "#428bca"
    },
    "gw-nav gw-open > a:hover": {
        "borderColor": "#428bca"
    },
    "gw-nav gw-open > a:focus": {
        "borderColor": "#428bca"
    },
    "gw-nav-list>liactive>a": {
        "backgroundColor": "#fff",
        "color": "#dd4814",
        "fontWeight": "bold",
        "fontSize": 0.82
    },
    "gw-nav-list>liactive>a:hover": {
        "backgroundColor": "#fff",
        "color": "#dd4814",
        "fontWeight": "bold",
        "fontSize": 0.82
    },
    "gw-nav-list>liactive>a:focus": {
        "backgroundColor": "#fff",
        "color": "#dd4814",
        "fontWeight": "bold",
        "fontSize": 0.82
    },
    "gw-nav-list>liactive>a:active": {
        "backgroundColor": "#fff",
        "color": "#dd4814",
        "fontWeight": "bold",
        "fontSize": 0.82
    },
    "gw-nav-list gw-nav-header": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "gw-nav-list>liactive>a>[class*=\"icon-\"]": {
        "fontWeight": "normal"
    },
    "gw-nav-list>liactive>a:hover:before": {
        "display": "none"
    },
    "gw-nav-list>liactive:before": {
        "display": "inline-block",
        "content": "",
        "position": "absolute",
        "right": -2,
        "top": -1,
        "bottom": 0,
        "zIndex": 1
    },
    "gw-nav-list ligw-open>a:after": {
        "display": "none"
    },
    "gw-nav-list>li a>gw-arrow": {
        "display": "inline-block",
        "width": "14px!important",
        "height": 14,
        "lineHeight": 14,
        "textShadow": "none",
        "fontSize": 18,
        "position": "absolute",
        "right": 11,
        "top": 11,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "color": "#666"
    },
    "gw-nav-list>li a:hover>gw-arrow": {
        "color": "#1963aa"
    },
    "gw-nav-list>liactive>a>gw-arrow": {
        "color": "#1963aa"
    },
    "gw-nav-list>ligw-open>a>gw-arrow": {
        "color": "#1963aa"
    },
    "gw-nav-list>li>a>[class*=\"icon-\"]:first-child": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "minWidth": 30,
        "textAlign": "center",
        "fontSize": 18,
        "fontWeight": "normal",
        "marginRight": 2
    },
    "gw-nav-list>liactive gw-submenu": {
        "backgroundColor": "#fff"
    },
    "gw-nav-list>li gw-submenu": {
        "fontSize": 13,
        "display": "none",
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "relative",
        "borderTop": "1px solid #e5e5e5"
    },
    "gw-nav-list>li gw-submenu>li": {
        "marginLeft": 0,
        "position": "relative"
    },
    "gw-nav-list>li gw-submenu>li>a": {
        "display": "block",
        "position": "relative",
        "color": "#616161",
        "paddingTop": 7,
        "paddingRight": 0,
        "paddingBottom": 9,
        "paddingLeft": 20,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderTop": "1px dotted #e4e4e4",
        "fontSize": 14,
        "textDecoration": "none"
    },
    "gw-nav-list>li gw-submenu>li>a:focus": {
        "textDecoration": "none"
    },
    "gw-nav-list>li gw-submenu>li>a:hover": {
        "textDecoration": "none",
        "color": "#dd4814",
        "backgroundColor": "rgba(25,25,50,0.03)"
    },
    "gw-nav-list>li gw-submenu>liactive:after": {
        "display": "inline-block",
        "content": "",
        "position": "absolute",
        "right": -1,
        "top": -1,
        "bottom": 0,
        "zIndex": 1
    },
    "gw-nav-list>li gw-submenu>liactive>a": {
        "color": "#dd4814"
    },
    "gw-nav-list>li gw-submenu>li a>[class*=\"icon-\"]:first-child": {
        "display": "none",
        "fontSize": 12,
        "fontWeight": "normal",
        "width": 18,
        "height": "auto",
        "lineHeight": 12,
        "textAlign": "center",
        "position": "absolute",
        "left": 10,
        "top": 11,
        "zIndex": 1,
        "backgroundColor": "#FFF"
    },
    "gw-nav-list>li gw-submenu>liactive>a>[class*=\"icon-\"]:first-child": {
        "display": "inline-block",
        "color": "#c86139"
    },
    "gw-nav-list>li gw-submenu>li:hover>a>[class*=\"icon-\"]:first-child": {
        "display": "inline-block"
    },
    "gw-nav-list>li>gw-submenu>li:first-child>a": {
        "borderTop": 0
    },
    "gw-nav-list li gw-submenu": {
        "overflow": "hidden"
    },
    "gw-nav-list liactivegw-open>gw-submenu>liactivegw-open>adropdown-toggle:after": {
        "display": "none"
    },
    "gw-nav-list liactive>gw-submenu>liactive>a:after": {
        "display": "none"
    },
    "gw-nav-list liactivegw-open>gw-submenu>liactive>a:after": {
        "display": "block"
    },
    "gw-nav-tabs li[class*=\" icon-\"]": {
        "width": 1.25,
        "display": "inline-block",
        "textAlign": "center"
    },
    "nav-tabs li[class^=\"icon-\"]": {
        "width": 1.25,
        "display": "inline-block",
        "textAlign": "center"
    },
    "gw-sidebar i": {
        "display": "inline"
    },
    "nano-content gw-nav-list ul li a": {
        "paddingLeft": 10
    },
    "left-li": {
        "paddingLeft": 10
    }
});