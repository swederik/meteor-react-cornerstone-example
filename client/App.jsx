// App component - represents the whole app
App = React.createClass({
  renderImage() {
    return <Image />;
  },
 
  render() {
    return (
      <div className="container">
        {this.renderImage()}
      </div>
    );
  }
});