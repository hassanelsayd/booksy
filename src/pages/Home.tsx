import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ProductList from "../components/ProductList";
export default function Home() {
  return (
    <React.Fragment>
      <Menu />
      <Header />
      <ProductList />
    </React.Fragment>
  );
}
