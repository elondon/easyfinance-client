import Header from './Header.react';
import ModelSpace from './ModelSpace.react';
import SideBar from './SideBar.react';
import Footer from './Footer.react';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
      return (
        <div>
          <Header/>
          <SideBar/>
          <ModelSpace/>
          <Footer/>
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    // what here?
  }
}
