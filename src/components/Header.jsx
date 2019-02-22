import React,{Component} from 'react';
import styles from '../scss/Header.css';
import Title from '../assets/title.png'

class Header extends Component {
  constructor(props){
    super(props)
    this.props=props
  }
  render() {
      return(
        <div>
            <div className={styles.normal}>
                <img src={Title} alt="title"/>
            </div>
        </div>
      )
  }
}
export default Header;