import * as React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

export interface CustomSenderProps {
    buttonLabel: string;
    rawdata: string[];
    disable:boolean;
}

export class CustomSender extends React.Component<CustomSenderProps, any>{
    /**
     *
     */
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange(): void {
        let message:string = "Estos son los datos: " + this.props.rawdata.toString();
        console.log(message);
        alert(message);
    }

    public render(): React.ReactElement<CustomSenderProps> {
        return (
            <div>
                <PrimaryButton disabled={this.props.disable} label={this.props.buttonLabel} onClick={this.handleChange} />                
            </div>);
    }
}