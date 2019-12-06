import React from "react";
import PropTypes from "prop-types";
import * as s from "./style";


const Breadcrumb = (props) => {
  const { pageName, breadcrumb, routingStore } = props;

  console.log({routingStore})

  return (
    <s.BreacrumbList >
      <s.Item><s.StyledLink route={"/"}>Home</s.StyledLink></s.Item>
      <s.Separator>/</s.Separator>
      <s.Item><s.StyledLink route={breadcrumb.root.link}>{breadcrumb.root.name}</s.StyledLink></s.Item>
      <s.Separator>/</s.Separator>
      <s.Item>{pageName}</s.Item>
    </s.BreacrumbList>
  );
};

Breadcrumb.proptype = {
  pageName: PropTypes.string,
  breadcrumb: PropTypes.object,
  routingStore: PropTypes.shape({
    slugOrId: PropTypes.string
  })
};

export default Breadcrumb;
