import ApplyForm from "@/components/ApplyForm";
import React from "react";

function ApplyPage() {
  return (
    <div className="apply__page">
      <div className="container">
        <div className="app__hero">
          <div className="app__hero-text">
            <h1 className="main__title">
              We&apos;re excited to help <br /> you take the next step
            </h1>
            <p className="p__text">
              towards your dream of studying abroad and obtaining a
              bachelor&apos;s or master&apos;s degree. Our streamlined
              application process makes it easy for you to get started on your
              educational journey.
            </p>
          </div>
        </div>
        <div className="apply__form">
          <ApplyForm />
        </div>
      </div>
    </div>
  );
}

export default ApplyPage;
