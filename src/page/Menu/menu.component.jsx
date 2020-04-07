import React from "react";
import "./menu.styles.scss";
import MenuHeader from "../../components/menu-header/menu-header.component";
import MenuOverview from "../../components/menu-overview/menu-overview.component.jsx";
import MENU_DATA from "../../menu.data";

class MenuPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: MENU_DATA,
      filteredItemsByCategory: [],
    };
  }

  componentDidMount() {
    this.setState({ filteredItemsByCategory: this.state.items });
  }

  handleFilterEvent = (event) => {
    const byCategory = event.target.value;
    let filteredItems = [];
    console.log(event);
    console.log(this.state.items);
    console.log(this.state.filteredItemsByCategory);
    if (event.target.value === "all") {
      filteredItems = this.state.items;
    } else {
      filteredItems = this.state.items.filter(
        (item) => item.category.toLowerCase() === byCategory.toLowerCase()
      );
    }
    this.setState({ filteredItemsByCategory: filteredItems });
  };

  // clickTest() {
  //   console.log("asdasd)");
  // }

  render() {
    const { filteredItemsByCategory } = this.state;
    // console.log(this.handleFilterEvent);
    // console.log(this.state.items);
    console.log(filteredItemsByCategory);
    return (
      <div className="menu">
        <MenuHeader filter={this.handleFilterEvent} />
        <MenuOverview items={filteredItemsByCategory} />
      </div>
    );
  }
}

export default MenuPage;
