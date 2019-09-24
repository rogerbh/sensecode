// import React from "react"
// import ReactDOM from "react-dom"

const { Component } = React;
const { render } = ReactDOM;

function FooterLinks() {
    return (
    <>
        <a href='https://jekyllrb.com/' target='_blank'>Jekyll</a>,&#160;
        <a href='https://code.visualstudio.com/' target='_blank'>VSCode</a>,&#160;
        <a href='https://reactjs.org/' target='_blank'>React</a>,&#160;
        <a href='http://getbootstrap.com/' target='_blank'>Bootstrap 4</a> and more cool stuff!
        <br />
        Kindly hosted by <a href='https://pages.github.com/' target='_blank'><strong>GitHub</strong>&#160;Pages</a>
    </>
    )
}

ReactDOM.render(
    <FooterLinks />,
    document.getElementById("reactFooterData")
)