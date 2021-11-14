import React from "react";
import TutorialForm from "./TutorialForm";
import EditTutorial from "./EditTutorial";
import TutorialTable from "./TutorialTable";
import APIURL from "../../helpers/environment";

export default class MyTutorialIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tutorials: [],
    };
  }
  componentDidMount() {
    this.userTutorials();
  }
  userTutorials = () => {
    fetch(`${APIURL}/tutorial/user`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.sessionToken,
      }),
    })
      .then((response) => response.json())
      .then((getData) => {
        this.setState({ tutorials: getData });
        console.log(getData);
      });
  };

  render() {
    console.log(this.state.tutorials);
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
