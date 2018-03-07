import React from 'react';
import { Menu, Grid, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middleMenu">
          <Grid centered container>
            <Dropdown item text="MEN">
                <Dropdown.Menu>
                    <Dropdown.Item>Tank Tops</Dropdown.Item>
                  <Dropdown.Item>Shirts</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>Tank Tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>KIDS</Menu.Item>
            <Dropdown item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>Tank Tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>Search</Menu.Item>
          </Grid>
        </Menu>
    );
  }
}
