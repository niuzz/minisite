import * as React from "react";

@log
class Header extends React.Component {
  render() {
    return <div>header is here! <a href="/#/home">home</a> <a href="/#/page">page</a></div>;
  }
}

function log(target: any) {
  console.log(target);
}

export default Header;
