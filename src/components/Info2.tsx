import React from "react";
import google_ads from "../../public/assets/images/google_ads.png";
import seo from "../../public/assets/images/seo.png";
import arrow from "../../public/assets/images/arrow_icon.png";
import "../styles/Info2.css";
const Info2 = () => {
  return (
    <section className="info2-section">
      <div className="info2-container">
        <div className="seo">
          <div className="seo-image">
            <img src={seo} alt="Logo" className="seo-design" />
            <h3 className="seo-heading">Search Engine Optimization</h3>
          </div>
          <div className="seo-content">
            <p>
              There is no detail too small when optimizing your website to rank
              higher in Google search and land on the first page of search
              results. Codeweb's expert SEO services include a thorough analysis
              of your website to identify opportunities for stronger search
              ranking and fix any issues that could be adversely affecting your
              SEO.
            </p>

            <div>
              <button className="btn-info2-learn-more">
                LEARN MORE
                <img src={arrow} alt="Arrow Icon" className="arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="google-ads">
          <div className="google-ads-image">
            <img src={google_ads} alt="Logo" className="google-ads" />
            <h3 className="google-ads-heading">Google Ads Management</h3>
          </div>
          <div className="google-ads-content">
            <p>
              Codeweb's Google Ads specialists have created hundred's of
              effective Google Ads Campaigns for Calgary businesses. We will help
              you reach your target audience on the first search page, their
              favourite blogs and apps, and the top trending YouTube videos.
            </p>

            <div>
              <button className="btn-info2-learn-more">
                LEARN MORE
                <img src={arrow} alt="Arrow Icon" className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info2;
