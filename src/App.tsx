import "./index.css";
import TestImg from "./assets/test.png";
import { Avatar, Row, Typography } from "./components";

export default function App() {
  return (
    <div>
      Groot Component Library
      <Typography tag="h2" typoSize="h3" style={{ fontSize: "5px" }}>
        hello
      </Typography>
      <Row>asg</Row>
      <Avatar src={TestImg} size={36} />
    </div>
  );
}
