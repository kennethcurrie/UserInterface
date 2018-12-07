import * as React from 'react';
import { Clock } from '../../components/clock/clock.component';

export class AssociateCheckIn extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {

    return (
      <div id="rowboxthing2">
        {/* here users will input their whatevers for dah chicken */}
        <div id="headerRow">
          <h4 id="headerField">Check In</h4>
          <Clock/>
        </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item flex-row-sb">
              <textarea id="textarea" placeholder="Description" ></textarea>
            </li>
          </ul>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Check In</button>
          </div>
        {/* end chicken request */}
      </div>
      
    );
  }
}