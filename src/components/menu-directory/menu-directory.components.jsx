import React from "react";
import "./menu-directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import MenuHeader from "../menu-header/menu-header.component";
import MENU_DATA from "../../menu.data";
import MenuOverview from "../menu-overview/menu-overview.component";

class MenuDirectory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: MENU_DATA,
    };
  }
  render() {
    const { sections } = this.state;
    return (
      <div className="directory">
        <MenuHeader />
        <MenuOverview items={sections} />
      </div>
    );
  }
}

export default MenuDirectory;
