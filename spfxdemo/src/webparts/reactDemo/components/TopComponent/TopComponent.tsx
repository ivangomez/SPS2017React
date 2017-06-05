import * as React from 'react';
import { CustomDropwdownProps, CustomDropdown, ComboItems } from '../CustomDropdown/CustomDropdown';
import { CustomSender } from '../CustomSender/CustomSender';

export interface TopComponentProps {

}

export interface TopComponentState {
    value1: string;
    items1: ComboItems[]
    value2: string;
    items2: ComboItems[];
    value3: string;
    items3: ComboItems[]
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
        this.state = {
            value1: "0",
            items1: this.getItems(""),
            value2: "0",
            items2: [],
            value3: "0",
            items3: []
        }
    }
    private handleChangeCombo1(value: string): void {
        var combo2Items = this.getItems(value);
        this.setState({ ...this.state, value1: value, items2: combo2Items, value2: "0", value3: "0" });
    }

    private handleChangeCombo2(value: string): void {
        var combo3Items = this.getItems(value);
        this.setState({ ...this.state, value2: value, items3: combo3Items, value3: "0" });
    }

    private handleChangeCombo3(value: string): void {
        //var combo3Items = this.getItems(value);
        this.setState({ ...this.state, value3: value });
    }

    private getItems(value: string): ComboItems[] {
        let literal: string;
        switch (value) {
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
            { key: "1", display: "primera opcion" + literal, value: "1" },
            { key: "2", display: "segunda opcion" + literal, value: "2" },
            { key: "3", display: "tercera opcion" + literal, value: "3" }
        ];
        return comboItems;
    }

    public render(): React.ReactElement<TopComponentProps> {
        let data: string[] = [this.state.value1, this.state.value2, this.state.value3];
        return (
            <div>
                <CustomDropdown label="Primer combo" id="primercombo" items={this.state.items1}
                    callBack={this.handleChangeCombo1} selectedValue={this.state.value1} />
                <CustomDropdown label="Segundo combo" id="segundo combo" items={this.state.items2}
                    callBack={this.handleChangeCombo2} selectedValue={this.state.value2} />
                <CustomDropdown label="Tercer combo" id="tercer combo" items={this.state.items3}
                    callBack={this.handleChangeCombo3} selectedValue={this.state.value3} />
                <CustomSender rawdata={data} buttonLabel="Enviar" />
            </div>
        );
    }
}