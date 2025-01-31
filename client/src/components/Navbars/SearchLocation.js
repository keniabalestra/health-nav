import { React, useState } from "react";
import { Row, Col, Button, Container, NavbarBrand, Navbar } from "reactstrap";
import Select from "react-select";
import MapWrapper from "components/MapWrapper";
import { Link } from "react-router-dom";

// dijk helpers
import {
  graph,
  dijkNodes,
  dijkstra,
  dijkCoords,
  routeStr,
  routeCoords,
} from "helpers/dijkstra";

// locations object must be formatted with label for the dropdown menu's options prop
// a value can be passed as props, so we can assign the state's value to it's graph node via the select component

const locations = {
  //Entrances

  6: { label: "Front Doors", value: "y6" },
  //Health-Services
  7: { label: "Prep & Recovery (Pediatric)", value: "z1" },
  8: { label: "Prep & Recovery (Adult)", value: "z2" },
  9: { label: "Lab", value: "z3" },
  10: { label: "Imaging", value: "z4" },
  11: { label: "Surgery", value: "z5" },
  12: { label: "Inpatient", value: "z6" },
  //Visitor Services
  13: { label: "Admin", value: "v1" },
  14: { label: "Waiting (Pediatric)", value: "v2" },
  15: { label: "Waiting (Adult)", value: "v3" },
  // Emergency
  16: { label: "Emergency", value: "er1" },
  //Restrooms
  17: { label: "Restroom 1", value: "rr1" },
  18: { label: "Restroom 2", value: "rr2" },
  19: { label: "Restroom 3", value: "rr3" },
  20: { label: "Restroom 4", value: "rr4" },
  21: { label: "Restroom 5", value: "rr5" },
  //Hospital Staff
  22: { label: "Staff", value: "s1" },
  23: { label: "Utility", value: "s2" },
  24: { label: "Dietary", value: "s3" },
};

// transform the object to iterate through its values and ignore the arbitrary keys
// had to be an object of objects to capture the value within
const navLocations = Object.values(locations);

export default function SearchLocation() {
  // states for search/dropdowns
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // capture the node for start when state updates
  const onChangeHandlerStart = (e) => {
    let newStart = setStart(e.value);
    return newStart;
  };

  // capture the node for end when state updates
  const onChangeHandlerEnd = (e) => {
    let newEnd = setEnd(e.value);
    return newEnd;
  };
  
  // when user clicks the go button in the navbar, dijkstra's funtion is called with the state values from start and end
  const goHandler = () => {
    const go = dijkstra(graph, start, end);
    console.log(go);
  };

  const customStyles={
    control: (css) => ({
      ...css,
      width: 250,
      height:"10px",
      padding: 0,
      borderRadius:"30px",
      marginTop: "20px"
    }),
    menu: ({ width, ...css }) => ({
      ...css,
      width: 250,
      minWidth: "20%"
    }),
  }

  return (
    // <Navbar >
    <Container md="12">
      <Row className="row-cols-lg-auto g-0 align-items-center">
        <Col xs={{ order: "first" }} style={{ paddingRight: 20 }}>
          <Select
            className="description"
            placeholder="Choose starting point..."
            options={navLocations}
            onChange={onChangeHandlerStart}
            value={start.e}
            styles={customStyles}
          ></Select>
        </Col>
        <Col style={{ paddingLeft: 0 }}>
          <Select
            className="description selectNav"
            width='200px'
            placeholder="Choose destination..."
            options={navLocations}
            onChange={onChangeHandlerEnd}
            value={end.e}
            styles={customStyles}
          ></Select>
        </Col>
        <Col xs={{ order: "last" }}>
          
          <Link to={"/admin/nav/" + start + "/" + end}>
            { start && end  ? <Button className="btn-round" >Go</Button> : null }
          </Link>
        </Col> 
      </Row>
    </Container>
    // </Navbar>
  );
}
