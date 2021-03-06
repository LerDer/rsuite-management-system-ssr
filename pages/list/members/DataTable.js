import * as React from "react";
import {
  Input,
  InputGroup,
  Table,
  Panel,
  Icon,
  ButtonToolbar,
  Button,
  DOMHelper,
  SelectPicker
} from "rsuite";

import data from "./users";
import DrawerView from "./DrawerView";

const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

class DataList extends React.Component {
  constructor() {
    super();
    this.state = {
      showDrawer: false
    };
  }
  handleShowDrawer = () => {
    this.setState({
      showDrawer: true
    });
  };
  handleCloseDrawer = () => {
    this.setState({
      showDrawer: false
    });
  };
  render() {
    const filterData = [
      { label: "All", value: 0 },
      { label: "Enabled", value: 1 }
    ];

    return (
      <div>
        <Panel header={<h3>Members</h3>}>
          <div className="table-toolbar">
            <ButtonToolbar className="inner-left">
              <Button
                appearance="primary"
                placement="left"
                onClick={this.handleShowDrawer}
              >
                New
              </Button>
              <SelectPicker data={filterData} />
            </ButtonToolbar>

            <div className="inner-right">
              <InputGroup inside>
                <Input placeholder="Search" />
                <InputGroup.Addon>
                  <Icon icon="search" />
                </InputGroup.Addon>
              </InputGroup>
            </div>
          </div>

          <Table
            height={600}
            data={data}
            onRowClick={data => {
              console.log(data);
            }}
          >
            <Column width={70} align="center" fixed>
              <HeaderCell>Id</HeaderCell>
              <Cell dataKey="id" />
            </Column>

            <Column width={200} fixed>
              <HeaderCell>First Name</HeaderCell>
              <Cell dataKey="firstName" />
            </Column>

            <Column width={200}>
              <HeaderCell>Last Name</HeaderCell>
              <Cell dataKey="lastName" />
            </Column>

            <Column width={200}>
              <HeaderCell>City</HeaderCell>
              <Cell dataKey="city" />
            </Column>

            <Column width={200}>
              <HeaderCell>Street</HeaderCell>
              <Cell dataKey="street" />
            </Column>

            <Column width={300}>
              <HeaderCell>Company Name</HeaderCell>
              <Cell dataKey="companyName" />
            </Column>

            <Column width={300}>
              <HeaderCell>Email</HeaderCell>
              <Cell dataKey="email" />
            </Column>
          </Table>
        </Panel>
        <DrawerView
          show={this.state.showDrawer}
          onClose={this.handleCloseDrawer}
        />
      </div>
    );
  }
}

export default DataList;
