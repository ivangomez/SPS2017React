import * as React from 'react';

export interface CustomDropwdownProps {
    label: string;
    id: string;
    items?: ComboItems[];
    callBack?: any;
    selectedValue?:string;
}

export interface CustomDropdownState {
    selectedValue: string;
}

export interface ComboItems {
    key: string;
    display: string;
    value: string;
}

export class CustomDropdown extends React.Component<CustomDropwdownProps, void>{
    /**
     *
     */
    constructor(props: CustomDropwdownProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.state = { selectedValue: "0" }
    }
    private handleChange(event: any): void {
        //this.setState({ selectedValue: event.target.value })
        this.props.callBack(event.target.value);
        console.log("changed to " + event.target.value);
    }
    public render(): React.ReactElement<CustomDropwdownProps> {
        var items = [];
        if (this.props.items) {
            items = this.props.items;
        }
        return (
            <div>
                <label>{this.props.label}</label>
                <select id={this.props.id} value={this.props.selectedValue} onChange={this.handleChange}>
                    <option key="0" value="0" >Seleccione un valor</option>
                    {items.map((item) =>
                        <option key={item.key} value={item.value} >{item.display}</option>
                    )}
                </select>
            </div>
        );
    }
}