import "./index.css";
import TestImg from "./assets/test.png";
import { Avatar, Column, Row, Typography } from "./components";

export default function App() {
  return (
    <div>
      Groot Component Library
      <Typography tag="h2" typoSize="h3">
        hello
      </Typography>
      <Row>
        <div style={{ border: "1px solid" }}>aaa</div>
        <div style={{ border: "1px solid" }}>aaa</div>
      </Row>
      <Column>
        <div style={{ border: "1px solid" }}>aaa</div>
        <div style={{ border: "1px solid" }}>aaa</div>
      </Column>
      <Avatar src={TestImg} size={36} />
    </div>
  );
}
