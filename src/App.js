import React from 'react';
import { UserForm } from './components/UserForm';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme();
console.log(theme.palette);
const myTheme = createMuiTheme({
      palette: {
        primary: green,
        secondary: purple
    },
  }
)

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <UserForm />
      </ThemeProvider>
    </div>
  );
}

export default App;
