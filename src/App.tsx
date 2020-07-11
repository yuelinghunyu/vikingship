import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
function App() {
  return (
    <div className="App">
      <header>learn react</header>
      <section className="App-header">
        <Button> Default Button </Button>
        <Button disabled> Disabled Button </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large Primary </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com"> Link  </Button>
        <Button btnType={ButtonType.Link} disabled href="http://www.baidu.com"> Disabled Link  </Button>
      </section>

      <section className="App-header">
        <Menu defaultIndex={0} onSelect={(index) => {
          alert(index)
        }} >
          <MenuItem>
            cool link 1
          </MenuItem>
          <MenuItem>
            cool link 2
          </MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>
      </section>
    </div>
  );
}

export default App;
