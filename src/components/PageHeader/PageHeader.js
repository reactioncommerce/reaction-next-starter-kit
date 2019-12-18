import React from "react";
import PropTypes from "prop-types";
import BannerTop from "components/BannerTop"
import * as s from "./style";

const PageHeader = (props) => {
  const { title, description, banner, webBanner } = props.page;
  return (
    <s.PageHeaderSection>
      <BannerTop banner={banner} webBanner={webBanner}/>
      <s.Title>{title}</s.Title>
      <s.Description>{description}</s.Description>

    </s.PageHeaderSection>
  );
};

PageHeader.propTypes = {
  page: PropTypes.object
};

export default PageHeader;
