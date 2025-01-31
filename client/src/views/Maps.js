/*!

=========================================================
* Now UI Dashboard React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { useParams } from "react-router-dom";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import MapWrapper from "components/MapWrapper";

function FullScreenMap() {
  const params = useParams()
  const locationId = params.name
  const start = params.start
  const end = params.end
  // console.log("LOCATION:", params)
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  // style={{ position: "fixed", minHeight:"auto", minWidth:"100vw", maxWidth:"100vw", objectFit:"contain"}}
                >
                  <MapWrapper locationId={locationId} start={start} end={end}/>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FullScreenMap;
