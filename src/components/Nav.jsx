import React,{Component} from 'react';
import styles from './Nav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from '../routes/pages/Index.jsx'
import Dynamic from '../routes/pages/Dynamic.jsx'
import Open from '../routes/pages/Open.jsx'
import Housing from '../routes/pages/Housing.jsx'
import Service from '../routes/pages/Service.jsx'
import Communication from '../routes/pages/Communication.jsx'
import Flow from '../routes/pages/Flow.jsx'

class Nav extends Component {
  constructor(props){
    super(props)
    this.props=props
  }
  render() {
      return(
        <div>
           <Router>
              <div>
                <ul>
                  <li>
                    <Link to="/index">网站首页</Link>
                  </li>
                  <li>
                    <Link to="/denamic">住房动态</Link>
                  </li>
                  <li>
                    <Link to="/open">政务公开</Link>
                  </li>
                  <li>
                    <Link to="/housing">住房业务</Link>
                  </li>
                  <li>
                    <Link to="/service">政府服务</Link>
                  </li>
                  <li>
                    <Link to="/communication">互动交流</Link>
                  </li>
                  <li>
                    <Link to="/flow">行业数据</Link>
                  </li>
                </ul>

                <hr />

                <Route path="/index" component={Index} />
                <Route path="/denamic" component={Dynamic} />
                <Route path="/open" component={Open} />
                <Route path="/housing" component={Housing} />
                <Route path="/service" component={Service} />
                <Route path="/communication" component={Communication} />
                <Route path="/flow" component={Flow} />
              </div>
            </Router>
        </div>
      )
  }
}
export default Nav;