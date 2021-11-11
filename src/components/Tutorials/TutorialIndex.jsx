import React from "react";
import TutorialForm from "./TutorialForm";
import EditTutorial from "./EditTutorial";
import TutorialTable from "./TutorialTable";

export default class TutorialIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorials: [],
    };
  }
  componentDidMount() {
    this.TutorialsView();
  }
  TutorialsView = () => {
    fetch("http://localhost:3000/tutorial/", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((response) => response.json())
      .then((getData) => {
        this.setState({ tutorials: getData });
        // console.log(getData);
      });
  };

  render() {
    // console.log(this.state.tutorials);
    return (
      <div>
        <TutorialTable
          tutorials={this.state.tutorials}
          sessionToken={this.props.sessionToken}
        />
      </div>
    );
  }
}
