import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "height": "100%",
        "overflowX": "hidden!important"
    },
    "body": {
        "fontFamily": "\"Helvetica Neue\", \"Open Sans\", Helvetica, Arial, sans-serif",
        "fontSize": 13,
        "color": "#6a6c6f",
        "paddingTop": 50,
        "height": "100%",
        "background": "#f7f9fa",
        "fontWeight": "normal"
    },
    "sub-header": {
        "paddingBottom": 10,
        "borderBottom": "1px solid #eee"
    },
    "navbar-fixed-top": {
        "borderBottom": "1px solid #e4e5e7"
    },
    "top-navigator": {
        "backgroundColor": "#f8f8f8",
        "border": "1px solid #e4e5e7"
    },
    "sidebar": {
        "display": "none"
    },
    "nav-sidebar": {
        "marginRight": -21,
        "marginBottom": 20,
        "marginLeft": -20
    },
    "nav-sidebar > li > a": {
        "paddingRight": 20,
        "paddingLeft": 20
    },
    "nav-sidebar > active > a": {
        "color": "#fff",
        "backgroundColor": "#428bca"
    },
    "nav-sidebar > active > a:hover": {
        "color": "#fff",
        "backgroundColor": "#428bca"
    },
    "nav-sidebar > active > a:focus": {
        "color": "#fff",
        "backgroundColor": "#428bca"
    },
    "main": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "marginBottom": 0
    },
    "project-name": {
        "color": "#666"
    },
    "placeholder": {
        "marginBottom": 20,
        "textAlign": "center",
        "paddingTop": 0.6,
        "paddingRight": 0.6,
        "paddingBottom": 0.6,
        "paddingLeft": 0.6
    },
    "placeholders h4": {
        "marginBottom": 0
    },
    "placeholder h7": {
        "fontWeight": "600"
    },
    "placeholder user-img": {
        "textAlign": "center",
        "border": 0,
        "marginBottom": 1
    },
    "placeholder user-img img": {
        "display": "inline-block",
        "borderRadius": "50%"
    },
    "placeholder span": {
        "fontSize": 0.8
    },
    "panel": {
        "border": "1px solid #e4e5e7"
    },
    "nav-pad": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "breadcrum theme-default": {},
    "breadcrumb": {
        "background": "#f7f9fa",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 12,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "dropdown-menuhdropdown": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "zIndex": 1060
    },
    "dropdown-menuhdropdown title": {
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "textAlign": "center",
        "borderBottom": "1px solid #e4e5e7"
    },
    "dropdown-menuhdropdown li": {
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "textAlign": "left",
        "background": "#fafbfc",
        "borderBottom": "1px solid #e4e5e7"
    },
    "dropdown-menufiledropdown li": {
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6,
        "textAlign": "left",
        "background": "#fafbfc",
        "borderBottom": "1px solid #e4e5e7"
    },
    "dropdown-menufiledropdown li i": {
        "marginRight": 10
    },
    "dropdown-menuhdropdownnotification li": {
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12
    },
    "dropdown-menuhdropdownnotification li label": {
        "marginRight": 10
    },
    "dropdown-menuhdropdown li > a:hover": {
        "background": "inherit"
    },
    "dropdown-menufiledropdown li > a:hover": {
        "background": "inherit"
    },
    "dropdown-menuhdropdown li:hover": {
        "background": "#f1f3f6"
    },
    "dropdown-menufiledropdown li:hover": {
        "background": "#f1f3f6"
    },
    "dropdown-menuhdropdown lisummary": {
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "textAlign": "center",
        "background": "#fff"
    },
    "hdropdownbigmenu": {
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30
    },
    "bigmenu a i": {
        "fontSize": 46
    },
    "bigmenu a": {
        "display": "block",
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 30,
        "marginLeft": 0,
        "minWidth": 100
    },
    "bigmenu h5": {
        "fontSize": 13,
        "marginTop": 10
    },
    "animated-panel": {
        "WebkitAnimationDuration": ".5s",
        "animationDuration": ".5s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "modal-body profile-pic": {
        "width": "auto !important",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "profile-pic img": {
        "width": "100% !important"
    },
    "input[type=\"file\"]": {
        "border": "none",
        "boxShadow": "none"
    },
    "img-responsive": {
        "outline": "none"
    },
    "user-img a": {
        "outline": "none"
    },
    "emp-search-alpha": {
        "background": "#f4f4f4",
        "paddingTop": 4,
        "paddingRight": 8,
        "paddingBottom": 4,
        "paddingLeft": 8,
        "float": "left",
        "borderRight": "1px solid #f1f1f1",
        "textAlign": "center"
    },
    "emp-filter-f": {
        "marginBottom": 0,
        "paddingBottom": 16
    },
    "activ": {
        "backgroundColor": "#ddd"
    },
    "emp-list-pic img": {
        "width": "100% !important"
    },
    "emp-sm-bx": {
        "paddingTop": 0,
        "paddingBottom": 0
    },
    "txt-right": {
        "textAlign": "right"
    },
    "txt-left": {
        "textAlign": "left"
    },
    "txt-center": {
        "textAlign": "center"
    },
    "p-nline": {
        "display": "inline"
    },
    "txt-12": {
        "fontSize": 12
    },
    "txt-11": {
        "fontSize": 11
    },
    "txt-10": {
        "fontSize": 10
    },
    "txt-9": {
        "fontSize": 9
    },
    "tb-zero": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "t-zero": {
        "marginTop": 0,
        "paddingTop": 0
    },
    "b-zero": {
        "marginBottom": 0,
        "paddingBottom": 0
    },
    "tp-4": {
        "marginTop": 4
    },
    "col-bt": {
        "marginBottom": 14
    },
    "col-tp": {
        "marginBottom": 14
    },
    "tb-pd10": {
        "paddingTop": 10,
        "paddingBottom": 10
    },
    "b-pd10": {
        "paddingBottom": 10
    },
    "t-pd10": {
        "paddingTop": 10
    },
    "bd-footer": {
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 0,
        "marginTop": 4,
        "fontSize": "85%",
        "backgroundColor": "#f2f2f2"
    },
    "bd-footer a": {
        "fontWeight": "500",
        "color": "#464a4c"
    },
    "bd-footer a:hover": {
        "color": "#0275d8"
    },
    "bd-footer p": {
        "marginBottom": 0
    },
    "bd-footer-links": {
        "paddingLeft": 0,
        "marginBottom": 1
    },
    "bd-footer-links li": {
        "display": "inline-block"
    },
    "bd-footer-links li + li": {
        "marginLeft": 1
    },
    "pull-right dropdown-menu::after": {
        "left": "auto",
        "right": 13
    },
    "pull-right dropdown-menu": {
        "left": "auto",
        "right": 0
    },
    "control-label": {
        "fontWeight": "500"
    },
    "form-group input[type=\"radio\"]": {
        "display": "none"
    },
    "form-group input[type=\"checkbox\"]": {
        "display": "none"
    },
    "form-group input[type=\"checkbox\"] + btn-group > label": {
        "whiteSpace": "normal"
    },
    "form-group input[type=\"radio\"] + btn-group > label": {
        "whiteSpace": "normal"
    },
    "form-group input[type=\"checkbox\"] + btn-group > labelbtn-default": {
        "color": "#333",
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "form-group input[type=\"radio\"] + btn-group > labelbtn-default": {
        "color": "#333",
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "form-group input[type=\"checkbox\"] + btn-group > labelbtn-primary": {
        "color": "#fff",
        "backgroundColor": "#428bca",
        "borderColor": "#357ebd"
    },
    "form-group input[type=\"radio\"] + btn-group > labelbtn-primary": {
        "color": "#fff",
        "backgroundColor": "#428bca",
        "borderColor": "#357ebd"
    },
    "form-group input[type=\"checkbox\"] + btn-group > labelbtn-success": {
        "color": "#fff",
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "form-group input[type=\"radio\"] + btn-group > labelbtn-success": {
        "color": "#fff",
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "form-group input[type=\"checkbox\"] + btn-group > labelbtn-info": {
        "color": "#fff",
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "form-group input[type=\"radio\"] + btn-group > labelbtn-info": {
        "color": "#fff",
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "form-group input[type=\"checkbox\"] + btn-group > labelbtn-warning": {
        "color": "#fff",
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "form-group input[type=\"radio\"] + btn-group > labelbtn-warning": {
        "color": "#fff",
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "form-group input[type=\"checkbox\"] + btn-group > labelbtn-danger": {
        "color": "#fff",
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "form-group input[type=\"radio\"] + btn-group > labelbtn-danger": {
        "color": "#fff",
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "form-group input[type=\"checkbox\"] + btn-group > labelbtn-link": {
        "fontWeight": "normal",
        "color": "#428bca",
        "borderRadius": 0
    },
    "form-group input[type=\"radio\"] + btn-group > labelbtn-link": {
        "fontWeight": "normal",
        "color": "#428bca",
        "borderRadius": 0
    },
    "form-group input[type=\"radio\"] + btn-group > label span:first-child": {
        "display": "none"
    },
    "form-group input[type=\"checkbox\"] + btn-group > label span:first-child": {
        "display": "none"
    },
    "form-group input[type=\"radio\"] + btn-group > label span:first-child + span": {
        "display": "inline-block"
    },
    "form-group input[type=\"checkbox\"] + btn-group > label span:first-child + span": {
        "display": "inline-block"
    },
    "form-group input[type=\"radio\"]:checked + btn-group > label span:first-child": {
        "display": "inline-block"
    },
    "form-group input[type=\"checkbox\"]:checked + btn-group > label span:first-child": {
        "display": "inline-block"
    },
    "form-group input[type=\"radio\"]:checked + btn-group > label span:first-child + span": {
        "display": "none"
    },
    "form-group input[type=\"checkbox\"]:checked + btn-group > label span:first-child + span": {
        "display": "none"
    },
    "form-group input[type=\"checkbox\"] + btn-group > label span[class*=\"fa-\"]": {
        "width": 15,
        "float": "left",
        "marginTop": 4,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": -2
    },
    "form-group input[type=\"radio\"] + btn-group > label span[class*=\"fa-\"]": {
        "width": 15,
        "float": "left",
        "marginTop": 4,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": -2
    },
    "form-group input[type=\"checkbox\"] + btn-group > label spancontent": {
        "marginLeft": 10
    },
    "form-group input[type=\"radio\"] + btn-group > label spancontent": {
        "marginLeft": 10
    }
});