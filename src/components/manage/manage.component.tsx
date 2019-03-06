import * as React from 'react';
import { ManageNavComponent } from './manage-nav/manage-nav.component';
import { IManageComponentProps } from './manage.container';
import CreateCohortModal from './create-cohort-modal/create-cohort-modal.container';
import { ManageInternalComponenet } from './manage-internal/manage-internal.component';
import { ManageCohortsComponenet } from './manage-cohorts/manage-cohorts.component';
import CreateUserModal from './create-user-modal/create-user-modal.container';


export class ManageComponenet extends React.Component<IManageComponentProps, any> {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const manage = this.props.match.params.manage;
    if (manage === 'users') {
      this.props.manageGetUsersByGroup(manage);
    }
  }

  updateManageUsersTable = (groupName: string) => {
    this.props.manageGetUsersByGroup(groupName);
  }

  render() {
    return (
      <div id="manage-users-container">
        <ManageNavComponent
          toggleCreateUserModal={this.props.toggleCreateUserModal}
          updateManageUsersTable={this.updateManageUsersTable}
          manage={this.props.match.params.manage}
          history={this.props.history} 
          location={this.props.location}
          match={this.props.match}/>

        {this.props.match.params.manage === 'cohorts'
          ? <ManageCohortsComponenet manageUsers={this.props.manageUsers.manageUsers} toggleCreateCohortModal={this.props.toggleCreateCohortModal}/>
          : <ManageInternalComponenet manageUsers={this.props.manageUsers.manageUsers} />
        }
        <CreateCohortModal />
        <CreateUserModal />
      </div>
    )
  }
}