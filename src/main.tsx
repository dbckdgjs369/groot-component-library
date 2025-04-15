import ReactDOM from "react-dom/client";
import { Avatar, Button, Column, Row, Typography } from "./lib";
import Tab from "./lib/components/Tab/Tab";
// import { Button, Row, Typography } from "./lib/components";
import Src from "../public/groot.png";
import Table from "./lib/components/Table";

const dummyHeader = [
  {
    label: "a",
    id: "a",
  },
  {
    label: "b",
    id: "b",
  },
  {
    label: "c",
    id: "c",
  },
  {
    label: "d",
    id: "d",
  },
];

interface DummyTableInterface {
  a: string;
  b: string;
  c: string;
}

const dummyData: DummyTableInterface[] = [
  {
    a: "1",
    b: "2",
    c: "3",
  },
  {
    a: "1",
    b: "2",
    c: "3",
  },
  {
    a: "1",
    b: "2",
    c: "3",
  },
  {
    a: "1",
    b: "2",
    c: "3",
  },
  {
    a: "1",
    b: "2",
    c: "3",
  },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div>
    {/* <Row> */}
    {/* <Typography typoSize="h1" as>
        asdg
      </Typography> */}
    <Avatar src={Src} />
    <Button color="red">asdg</Button>
    <Typography typoSize="h4">asdg</Typography>
    <Column>asgd</Column>
    <Column>asgd2</Column>
    <Tab.Provider defaultTab="Tab 1">
      <Tab.List style={{ width: "100px" }} tabColor="red">
        <Tab value="Tab 1">Tab 1</Tab>
        <Tab value="Tab 2">Tab 2</Tab>
        <Tab value="Tab 3">Tab 3</Tab>
      </Tab.List>
      <Tab.Panel value="Tab 1">
        <div style={{ width: "500px", height: "500px", border: "1px solid" }}>
          a
        </div>
      </Tab.Panel>
      <Tab.Panel value="Tab 2">b</Tab.Panel>
      <Tab.Panel value="Tab 3">c</Tab.Panel>
      <Row gap={30}>
        <div>asdg</div>
        <div>asdg</div>
        <div>asdg</div>
        <div>asdg</div>
      </Row>
      table
      <Table
        tableHeaders={dummyHeader}
        data={dummyData}
        tdList={(row) => ({
          a: <span>{row.a}</span>,
          b: <span>{row.b}세</span>,
          c: <span>{row.c}세</span>,
        })}
      />
    </Tab.Provider>
  </div>
);
