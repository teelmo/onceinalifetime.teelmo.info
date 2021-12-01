import React, {Component} from 'react';
import style from './../styles/styles.less';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {

  }
  // shouldComponentUpdate(nextProps, nextState) {}
  // static getDerivedStateFromProps(props, state) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // static getDerivedStateFromError(error) {}
  // componentDidCatch() {}
  render() {
    return (
      <div className={style.app}>
        <div className={style.content}>
          <div className={style.scroll}>⬇️</div>
          <div className={style.page}>
            <h1>Do you like once in a lifetime opportunities?</h1>
          </div>
          <div className={style.page}>
            <h1>This is the question I am asking you, once in a lifetime, does it intrigue you?</h1>
          </div>
          <div className={style.page}>
            <h1>... at the moment you should be thinking, what is this opportunity?!?!</h1>
          </div>
          <div className={style.page}>
            <h1>If you are not, I don't know what excites you in life, nothing?</h1>
          </div>
          <div className={style.page}>
            <h1>Well, do you want to know what the opportunity is about?</h1>
          </div>
          <div className={style.page}>
            <h1>You will find out if you scroll a bit further...</h1>
          </div>
          <div className={style.page}>
            <h1>...</h1>
          </div>
          <div className={style.page}>
            <h1>I guess you are tired of scrolling already?</h1>
          </div>
          <div className={style.page}>
            <h1>But you are desperate to know, aren't you??</h1>
          </div>
          <div className={style.page}>
            <h1>Ok, I will let you out of your misery.</h1>
          </div>
          <div className={style.page}>
            <h1>🥁🥁🥁🥁🥁🥁🥁🥁</h1>
          </div>
          <div className={style.page}>
            <h1>Next Monday<br/>Teemo's place<br />Soup made by Teemo<br />For you<br />At 19:30</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default App;