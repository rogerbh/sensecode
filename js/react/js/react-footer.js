"use strict";

// import React from "react"
// import ReactDOM from "react-dom"
var _React = React,
    Component = _React.Component;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

function FooterLinks() {
  return React.createElement(React.Fragment, null, React.createElement("a", {
    href: "https://jekyllrb.com/",
    target: "_blank"
  }, "Jekyll"), ",\xA0", React.createElement("a", {
    href: "https://code.visualstudio.com/",
    target: "_blank"
  }, "VSCode"), ",\xA0", React.createElement("a", {
    href: "https://reactjs.org/",
    target: "_blank"
  }, "React"), ",\xA0", React.createElement("a", {
    href: "http://getbootstrap.com/",
    target: "_blank"
  }, "Bootstrap 4"), " and more cool stuff!", React.createElement("br", null), "Kindly hosted by ", React.createElement("a", {
    href: "https://pages.github.com/",
    target: "_blank"
  }, React.createElement("strong", null, "GitHub"), "\xA0Pages"));
}

ReactDOM.render(React.createElement(FooterLinks, null), document.getElementById("reactFooterData"));