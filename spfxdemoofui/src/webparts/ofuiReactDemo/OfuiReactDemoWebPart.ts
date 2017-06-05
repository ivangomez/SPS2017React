import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ofuiReactDemoStrings';
//import OfuiReactDemo from './components/OfuiReactDemo';
//import { IOfuiReactDemoProps } from './components/IOfuiReactDemoProps';
import { IOfuiReactDemoWebPartProps } from './IOfuiReactDemoWebPartProps';
import {TopComponentProps, TopComponent} from './components/TopComponent/TopComponent';

export default class OfuiReactDemoWebPart extends BaseClientSideWebPart<IOfuiReactDemoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<TopComponentProps > = React.createElement(
      TopComponent,
      {
        //description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
