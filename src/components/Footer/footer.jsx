import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { color } from "@mui/system";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted">
      <section
        style={{ backgroundColor: "rgba(0, 90, 206, 1)", color: "White" }}
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
      >
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Breakaway
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                eius facere, assumenda eveniet provident doloremehenderit maxime
                quaerat autem perspiciatis suscipit consectetur?
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Abu Dhabi, NY 10012, UAE
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Breakaway@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 92 31 025 858 39
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 021 234 567 89
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Download App</h6>
              <div className="playstore-img-wrap">
                <a href="#!" className="text-reset">
                  <img
                    src="https://www.nicepng.com/png/full/37-374927_apple-app-store-and-google-play-logos-app.png"
                    alt="Our App link"
                    width={"180px"}
                  />
                </a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 90, 206, 1)", color: "White" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://Hux.com/">
          Hux.com
        </a>
      </div>
    </MDBFooter>
  );
}
