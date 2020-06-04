// import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
// import HometoHomeContext from '../Context/HometoHomeContext'
// import './Addresses.css';

// export default function address(props) {
  
//   return (
//     <div className='Card'>
//       {/* <button 
//         onClick={() => props.onDeleteItem(props.id)}
//         type="button">
//           delete
//       </button> */}
//       <Link to={`/main/address/${props.id}`}>
//           {props.street}{' '}{props.city}{' '}{props.state}{' '}{props.zip}
//       </Link>
//       <p>name:{props.name} </p>
//       <p>phone:{props.phone}</p>
//       <p>Was the gospel presented? {props.gospelPresentation}</p>
//       <p>Were there any new salvations? {props.newSalvations}</p>
//       <p>note:{props.notes}</p>
//     </div>
//   );
// }

// address.propTypes = {
//   onDeleteItem: () => {}
// }

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HometoHomeContext from '../Context/HometoHomeContext'
import './Addresses.css';

export default class Addresses extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
static contextType = HometoHomeContext;
  render() {
    const {addresses=[], lists=[]} = this.context
    console.log('herehereher', this.context)
    return (
      <div className="totalAddress">
        <div className='AddCatalog__button'>
          <button type='submit'>
            <Link to={`/add-address`}>Add Addresses</Link>
          </button>
        </div>

        {addresses.map(a => 
      <p><b>Street: {a.street}</b> <br></br>
      City: {a.city}<br></br>
      State: {a.state}<br></br>
      Zip: {a.zip}<br></br>
      Name: {a.name}<br></br>
      Phone: {a.phone}<br></br>
      Was the Gospel Presented? {a.gospelPresentation}<br></br>
      Were there any new salvations? {a.newSalvations}<br></br>
      Notes: {a.notes}</p>
      )}
      {/* <p>name:{props.name} </p>
      <p>phone:{props.phone}</p>
      <p>Was the gospel presented? {props.gospelPresentation}</p>
      <p>Were there any new salvations? {props.newSalvations}</p>
      <p>note:{props.notes}</p> */}
    </div>
    )
  }
}
