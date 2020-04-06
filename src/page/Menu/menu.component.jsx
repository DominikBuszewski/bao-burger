import React from "react";
import "./menu.styles.scss";
import MenuHeaderButton from "../../components/menu-header/menu-header.component";
import MenuOverview from "../../components/menu-overview/menu-overview.component";
import MENU_DATA from "../../menu.data";

class MenuPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: MENU_DATA,
      filteredByCategory: [],
    };
  }

  componentDidMount() {
    this.setState({
      filteredByCategory: this.state.categories,
    });
  }

  // handleChange = e => {
  //   this.setState({filteredCategory: e.target.value})
  // }

  handleFilterEvent = (event) => {
    const { filteredByCategory } = this.state;

    const filterByCategory = event.target.value;
    console.log(event.target.value);
    let filterCategory = [];
    if (event.target.value === "All") {
      filterCategory = filteredByCategory;
    } else {
      filterCategory = filteredByCategory.filter(
        (asd) => asd.category.toLowerCase() === filterByCategory.toLowerCase()
      );
    }
    this.setState({ filteredByCategory: filterCategory });
  };

  render() {
    const { filteredByCategory } = this.state;
    const all = "All";
    const burgers = "Burgers";
    const drinks = "Drinks";
    const other = "Other";
    return (
      <div className="menu">
        <div className="categories">
          <MenuHeaderButton category={all} onClick={this.handleFilterEvent} />
          <MenuHeaderButton
            category={burgers}
            onClick={this.handleFilterEvent}
          />
          <MenuHeaderButton
            category={drinks}
            onClick={this.handleFilterEvent}
          />
          <MenuHeaderButton category={other} onClick={this.handleFilterEvent} />
        </div>

        <MenuOverview items={filteredByCategory} />
      </div>
    );
  }
}

export default MenuPage;
