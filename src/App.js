import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DummyComponent from 'demo-double-bundle-withstyles';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component {
  
  state = {
    showDummy: false,
  };
  
  componentDidMount() {
    setTimeout(() => this.setState({ showDummy: true }), 5000);
  }
  
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        { this.state.showDummy && <DummyComponent items={['toto', 'titi', 'tata']}/>}
      </div>
    );
  }
}

export default withStyles(styles)(ButtonAppBar);
