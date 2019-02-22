import React,{Component} from 'react';
import Lay from '../../components/Lay.jsx'

class communication extends Component {
  constructor(props){
    super(props)
    this.props=props
  }
  render() {
      return(
        <div>
           communication connect 互动交流
           <Lay />
        </div>
      )
  }
}
export default communication;