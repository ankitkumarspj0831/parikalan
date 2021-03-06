import { Component } from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import parikalan from "../../parikalan.png";

class Navigation extends Component {
  state = {
    expanded: false,
  };
  toggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  logoutClicked = () => {
    console.log("Logout clicked");
    this.toggle();
    this.props.isLoggedOut();
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
    /* fetch("http://localhost:8000/auth/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: "Ankit" }),
    })
      .then((result) => {
        return result.json();
      })
      .then((response) => {
        this.props.isLoggedOut();
        localStorage.removeItem("token");
        localStorage.removeItem("expiryDate");
        localStorage.removeItem("userId");
      })
      .catch((err) => {
        console.log("Error fetching the logout.");
        console.log("Error: " + err);
      }); */
  };
  render() {
    if (this.props.isLoggedIn) {
      return (
        <div className="classes.navLinks">
          <Navbar
            expand="lg"
            style={{ backgroundColor: "#9bc9c8" }}
            expanded={this.state.expanded}
            onToggle={this.toggle}
          >
            <Navbar.Brand>
              <NavLink
                to="/"
                exact
                activeStyle={{ color: "white" }}
                onClick={() => {
                  this.setState({ expanded: false });
                }}
              >
                <Image src={parikalan} rounded height="50px" width="70px" />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <NavLink
                    to="/"
                    exact
                    activeStyle={{ color: "white" }}
                    onClick={this.toggle}
                  >
                    Home
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    to="/clubs"
                    activeStyle={{ color: "white" }}
                    onClick={this.toggle}
                  >
                    Clubs
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    to="/xenium"
                    activeStyle={{ color: "white" }}
                    onClick={this.toggle}
                  >
                    Xenium
                  </NavLink>
                </Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link className="mr-sm-2" onClick={this.logoutClicked}>
                  {/* <NavLink
                    to="/auth/logout"
                    activeStyle={{ color: "white" }}
                    onClick={this.logoutClicked}
                  >
                    Logout
                  </NavLink> */}
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div className="classes.navLinks">
          <Navbar
            expand="lg"
            style={{ backgroundColor: "#9bc9c8" }}
            expanded={this.state.expanded}
            onToggle={this.toggle}
          >
            <Navbar.Brand>
              <NavLink
                to="/"
                exact
                activeStyle={{ color: "white" }}
                onClick={() => {
                  this.setState({ expanded: false });
                }}
              >
                <Image src={parikalan} rounded height="50px" width="70px" />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <NavLink
                    to="/"
                    exact
                    activeStyle={{ color: "white" }}
                    onClick={this.toggle}
                  >
                    Home
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    to="/clubs"
                    activeStyle={{ color: "white" }}
                    onClick={this.toggle}
                  >
                    Clubs
                  </NavLink>
                </Nav.Link>

                <Nav.Link>
                  <NavLink
                    to="/xenium"
                    activeStyle={{ color: "white" }}
                    onClick={this.toggle}
                  >
                    Xenium
                  </NavLink>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link className="mr-sm-2">
                  <NavLink
                    to="/auth/signin"
                    activeStyle={{ color: "white" }}
                    onClick={this.toggle}
                  >
                    SignIn
                  </NavLink>
                </Nav.Link>
                <Nav.Link className="mr-sm-2">
                  <NavLink
                    to="/auth/signup"
                    activeStyle={{ color: "white" }}
                    onClick={this.toggle}
                  >
                    SignUp
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLoggedOut: () => dispatch({ type: "ISLOGGEDOUT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
