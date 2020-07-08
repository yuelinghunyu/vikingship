import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button> Default Button </Button>
        <Button disabled> Disabled Button </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Large Primary </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Small Danger </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com"> Link  </Button>
        <Button btnType={ButtonType.Link} disabled href="http://www.baidu.com"> Disabled Link  </Button>
      </header>
    </div>
  );
}

export default App;
