import React, { Component } from "react";
import FieldPanel from "./FieldPanel";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "Dinamik Kontrol Oluşturma",
      fieldListIndex: 0,
      fieldList: this.CreateFieldsArray(),
      selectedFieldList: this.CreateFieldsArray()[0],
    };
    this.OnTextChanged = this.OnTextChanged.bind(this);
    this.CreateFieldsArray = this.CreateFieldsArray.bind(this);
    this.OnNumericChanged = this.OnNumericChanged.bind(this);
    this.OnDateChanged = this.OnDateChanged.bind(this);
  }

  OnTextChanged(event) {
    let items = [...this.state.selectedFieldList];
    
    let index = this.state.selectedFieldList.findIndex(
      (spf) => spf.fieldName === event.target.id
    );    
    let item = { ...items[index] };    
    item.fieldValue = event.target.value;    
    items[index] = item;
    console.log(items);
    this.setState({ selectedFieldList: [...items] });
  }

  CreateFieldsArray() {
    let fieldArray = [];
    fieldArray.push([
      {
        fieldName: "kisiadi",
        fieldType: "textbox",
        fieldValue: null,
        fieldLabel: "Adı",
        changeEvent: this.OnTextChanged,
      },
      {
        fieldName: "kisisoyadi",
        fieldType: "textbox",
        fieldValue: null,
        fieldLabel: "Soyadı",
        changeEvent: this.OnTextChanged,
      },
      {
        fieldName: "kisimaasi",
        fieldType: "numericbox",
        fieldValue: null,
        fieldLabel: "Maaşı",
        changeEvent: this.OnNumericChanged,
      },
    ]);
    fieldArray.push([
      {
        fieldName: "departmanadi",
        fieldType: "textbox",
        fieldValue: null,
        fieldLabel: "Departman Adı",
        changeEvent: this.OnTextChanged,
      },
      {
        fieldName: "calisansayisi",
        fieldType: "numericbox",
        fieldValue: null,
        fieldLabel: "Çalışan Sayısı",
        changeEvent: this.OnNumericChanged,
      },
      {
        fieldName: "kurulustarihi",
        fieldType: "datebox",
        fieldValue: null,
        fieldLabel: "Kuruluş Tarihi",
        changeEvent: this.OnDateChanged,
      },
      {
        fieldName: "ilgiliKisi",
        fieldType: "textbox",
        fieldValue: null,
        fieldLabel: "İlgili Kişi",
        changeEvent: this.OnTextChanged,
      },
    ]);
    return fieldArray;
  }

  OnNumericChanged(event) {
    let items = [...this.state.selectedFieldList];
    
    let index = this.state.selectedFieldList.findIndex(
      (spf) => spf.fieldName === event.target.id
    );    
    let item = { ...items[index] };    
    item.fieldValue =parseFloat( event.target.value);    
    items[index] = item;
    console.log(items);
    this.setState({ selectedFieldList: [...items] });
  }

  OnDateChanged(event) {
    let items = [...this.state.selectedFieldList];
    
    let index = this.state.selectedFieldList.findIndex(
      (spf) => spf.fieldName === event.target.id
    );    
    let item = { ...items[index] };    
    item.fieldValue = event.target.value;    
    items[index] = item;
    console.log(items);
    this.setState({ selectedFieldList: [...items] });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.caption}</h1>
        </header>
        <select
          key="slctFields"
          onChange={(event, value) => {
            this.setState({ fieldListIndex: parseInt(event.target.value) });
          }}
        >
          <option value="0">Kişi Bilgileri</option>
          <option value="1">Departman Bilgileri</option>
        </select>
        {}
        <button
          key="btnCreate"
          onClick={() => {
            this.setState({
              selectedFieldList:
                this.state.fieldList[this.state.fieldListIndex],
            });
          }}
        >
          Oluştur
        </button>
        <form key="frm">
          <div>
            <FieldPanel
              selectedFieldList={this.state.selectedFieldList.map((f) => f)}
              OnTextChanged={this.OnTextChanged}
              OnNumericChanged={this.OnNumericChanged}
              OnDateChanged={this.OnDateChanged}
            ></FieldPanel>
          </div>
          <br></br>          
        </form>
        <div>
            <textarea type="text" value={
                this.state.selectedFieldList.map((f)=>{return f.fieldLabel +" : "+ f.fieldValue })
              }>
            </textarea>
          </div>
      </div>
    );
  }
}

export default App;
