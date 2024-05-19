import React from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Services() {
  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <section class="section services-section" id="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="section-title">
                <h2>What Our Services</h2>
                <p>
                  Welcome to our mental health assessment services, where we're
                  dedicated to understanding and supporting your well-being.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fa fa-desktop"></i>
                </div>
                <div class="feature-content">
                  <h5>Our Tests</h5>
                  <p>
                    Our standardized tests like PHQ-9 provide accurate
                    evaluations, guiding understanding of your emotional
                    well-being effectively.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fa fa-user"></i>
                </div>
                <div class="feature-content">
                  <h5>Connect with Psychiatrists</h5>
                  <p>
                    Discover our personalized mental health solutions tailored
                    to your needs. Reach out today for professional guidance and
                    unwavering support.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fa fa-comment"></i>
                </div>
                <div class="feature-content">
                  <h5>24/7 Chat Support Available</h5>
                  <p>
                    Get instant assistance anytime, anywhere. Our team is here
                    to provide prompt and reliable support whenever you need it.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fa fa-image"></i>
                </div>
                <div class="feature-content">
                  <h5>Video-Audio Based Assessment</h5>
                  <p>
                    Assess your mental health status through innovative
                    technology. Simply upload your audio or video files to
                    receive personalized insights and support from our expert
                    team
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fa fa-th"></i>
                </div>
                <div class="feature-content">
                  <h5>Get Quick Results </h5>
                  <p>
                    Our assessment process ensures prompt feedback and precise
                    recommendations tailored to your needs. Trust our expertise
                    for efficient and effective support on your mental health
                    journey
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="feature-box-1">
                <div class="icon">
                  <i class="fa fa-cog"></i>
                </div>
                <div class="feature-content">
                  <h5>Beyound Assessment</h5>
                  <p>
                    Explore our inspiring stories and motivational videos,
                    guiding your mental health recovery journey with hope and
                    encouragement. Find hope in every story, strength in every
                    video
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Services;
