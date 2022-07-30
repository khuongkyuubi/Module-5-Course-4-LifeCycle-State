import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "black"
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({color: "pink"});
        }, 5000);
    }

    render() {
        return (
          <div>
              <div style={{
                  backgroundColor: this.state.color,
                  paddingTop: 20,
                  width: 400,
                  height: 80,
                  margin: "auto"
              }}>

              </div>
          </div>
        )
    }
}

export default App;
