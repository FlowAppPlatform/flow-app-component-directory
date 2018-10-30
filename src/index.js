import React from 'react';

import AppComponent from 'flow-app-component';

class DirectoryComponent extends AppComponent {
  static properties = {
    iconUrl: '/assets/images/text-component.svg',
    name: 'Directory',
    type: 'ui-component',
    category: 'Wrappers',
    parent: null,
    showOnComponentsPanel: false,
    isValuable: true,
    allowsChildren: true
  };

  constructor() {
    super();
    const newState = {
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'App Name',
          properties: [],
        },
        {
          categoryName: 'Access Control',
          categoryDescription: 'Control access to the directory',
          properties: [
            {
              id: 'allowed-roles',
              name: 'Allowed Roles',
              type: 'roles',
              description: 'Select roles that have access to this directory',
              value: 'all',
              options: {
                multi: true,
              },
            },
          ],
        },
      ],

      ...DirectoryComponent.properties
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    return null;
  }
}

export default DirectoryComponent;
