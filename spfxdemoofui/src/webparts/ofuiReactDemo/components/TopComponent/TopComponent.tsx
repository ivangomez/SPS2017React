import * as React from 'react';
/*import { CustomDropwdownProps, CustomDropdown, ComboItems } from '../CustomDropdown/CustomDropdown';
import { CustomSender } from '../CustomSender/CustomSender';*/
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { CustomSender } from '../CustomSender/CustomSender';

export interface ComboItems {
    key: string;
    text: string;
}

export interface TopComponentProps {

}

export interface TopComponentState {
    value1: string;
    items1: ComboItems[]
    value2: string;
    items2: ComboItems[];
    value3: string;
    items3: ComboItems[];
    disableSend: boolean;
}

export class TopComponent extends React.Component<TopComponentProps, TopComponentState>{
    /**
     *
     */
    constructor(props: TopComponentProps) {
        super(props);
        this.handleChangeCombo1 = this.handleChangeCombo1.bind(this);
        this.handleChangeCombo2 = this.handleChangeCombo2.bind(this);
        this.handleChangeCombo3 = this.handleChangeCombo3.bind(this);
        this.readyToSend = this.readyToSend.bind(this);
        this.state = {
            value1: "0",
            items1: this.getItems({ key: "", text: "" }),
            value2: "0",
            items2: [],
            value3: "0",
            items3: [],
            disableSend: true
        }
    }
    private handleChangeCombo1(value: ComboItems): void {
        var combo2Items = this.getItems(value);
        this.setState({ ...this.state, value1: value.key, items2: combo2Items, value2: "0", value3: "0" });
    }

    private handleChangeCombo2(value: ComboItems): void {
        var combo3Items = this.getItems(value);
        this.setState({ ...this.state, value2: value.key, items3: combo3Items, value3: "0" });
    }

    private handleChangeCombo3(value: ComboItems): void {
        //var combo3Items = this.getItems(value);
        this.setState({ ...this.state, value3: value.key, disableSend: this.readyToSend() });
    }

    private readyToSend(): boolean {
        return this.state.value1 != "0" && this.state.value2 != "0" && this.state.value3 != "0";
    }

    private getItems(value: ComboItems): ComboItems[] {
        let literal: string;
        switch (value.key) {
            case "1":
                literal = " del primer valor del control anterior";
                break;
            case "2":
                literal = " del segundo valor del control anterior";
                break;
            case "3":
                literal = " del tercer valor del control anterior";
                break;
            default:
                literal = "";
                break;
        }

        let comboItems: ComboItems[] = [
            { key:"0", text:"Seleccione un valor"},
            { key: "1", text: "primera opcion" + literal },
            { key: "2", text: "segunda opcion" + literal },
            { key: "3", text: "tercera opcion" + literal }
        ];
        return comboItems;
    }

    public render(): React.ReactElement<TopComponentProps> {
        let data: string[] = [this.state.value1, this.state.value2, this.state.value3];
        return (
            <div>
                <Dropdown label="Primer combo" options={this.state.items1} selectedKey={this.state.value1} onChanged={this.handleChangeCombo1} />
                <Dropdown label="Segundo combo" options={this.state.items2} selectedKey={this.state.value2} onChanged={this.handleChangeCombo2} />
                <Dropdown label="Tercer combo" options={this.state.items3} selectedKey={this.state.value3} onChanged={this.handleChangeCombo3} />
                <CustomSender disable={this.state.disableSend} rawdata={data} buttonLabel="Enviar" />
            </div>
        );
    }
}