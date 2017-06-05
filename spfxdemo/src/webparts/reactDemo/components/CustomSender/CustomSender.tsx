import * as React from 'react';

export interface CustomSenderProps {
    buttonLabel: string;
    rawdata: string[];
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
                <button onClick={this.handleChange} >{this.props.buttonLabel}</button>
            </div>);
    }
}