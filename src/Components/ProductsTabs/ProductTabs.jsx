import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import ProductsSlider from "../ProductsSlider/ProductsSlider";
import './ProductTabs.css'
const ProductTabs = () => {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
  
      if (activeTab !== tab) setActiveTab(tab)
  };

  return (
    <div className="product-tab-block mt-80">
      <div className="container">
        <div className="main-tab box">
          <div className="product-tabs box-content clearfix">
            <div className="page-title toggled">
              <h3>Top Products</h3>
            </div>
            <div id="tabs" className="mahardhi-tabs section">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Featured
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Latest
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Bestseller
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <ProductsSlider></ProductsSlider>
                </TabPane>
                <TabPane tabId="2">
                <ProductsSlider></ProductsSlider>
                </TabPane>
                <TabPane tabId="3">
                <ProductsSlider></ProductsSlider>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
