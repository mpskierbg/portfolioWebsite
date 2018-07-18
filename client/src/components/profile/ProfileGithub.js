import React, { Component } from "react";
import axios from "axios";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "mpskierbg",
      clientId: "9ab623d05062db891737",
      clientSecret: "93c7dd2fcd93ac4718e82392be6e394a5977fffe",
      count: 6,
      sort: "created: asc",
      repos: []
    };
  }

  componentDidMount() {
    const { username, count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }
  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div className="card">
        <img
          class="card-img-top img-fluid"
          src="//placehold.it/500x200"
          alt="Card image cap"
        />
        <div className="card-body">
          <a href={repo.html_url} className="text-info" target="_blank">
            <h5 className="card-title">{repo.name}</h5>
          </a>
          <p className="card-text">{repo.description}</p>
          <p className="card-text">{repo.language}</p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>

      /* <div key={repo.id} className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <a href={repo.html_url} className="text-info" target="_blank">
                {repo.name}
              </a>
            </h4>
            <p></p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-success">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
    </div> */
    ));
    return (
      <div className="container">
        <hr />
        <h3>Latest Projects</h3>
        <div className="row">
          <div className="col-sm-12">
            <div className="card-columns" ref="myRef">
              {repoItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileGithub;
