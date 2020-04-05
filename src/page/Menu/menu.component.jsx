import React from "react";
import "./menu.styles.scss";
import MenuHeader from "../../components/menu-header/menu-header.component";
import MenuOverview from "../../components/menu-overview/menu-overview.component";
import MENU_DATA from "../../menu.data";

class MenuPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: MENU_DATA,
    };
  }

  componentDidMount() {}

  render() {
    const { sections } = this.state;
    return (
      <div className="menu">
        <MenuHeader />
        <MenuOverview items={sections} />
      </div>
    );
  }
}

export default MenuPage;
