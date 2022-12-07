import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Plan from './Plan';

 class App extends Component {
  state={
    item:[],
    text:"",
  }
  handleChange = e =>{
    this.setState({text:e.target.value})
  }
  handleAdd = e =>{
    if(this.state.text !== ""){
      const item = [...this.state.item,this.state.text];
      this.setState({item:item,text:""});
    }
  }
  handleDelete = id =>{
      const Olditems = [...this.state.item]
      const items = Olditems.filter((element,i)=>{
        return i!==id
      })
      this.setState({item:items});
  }
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-sm-6 mx-auto text-white shadow-lg p-3'>
            <h2 className='text-center'>Today's Plan</h2>
            <div className='row'>
              <div className="col-9">
                <input type="text" className='form-control' placeholder='Write your plan' value={this.state.text} onChange={this.handleChange}/></div>
                <div className='col-2'>
                  <button className='btn btn-warning px-5' onClick={this.handleAdd}>Add</button>
                </div>
                <div className="container-fluid">
                  <ul className='list-unstyled row m-5'>
                    {
                      this.state.item.map((value,i)=>{
                        return <Plan key={i} id={i} value={value} sendData={this.handleDelete}/>
                      })
                    }
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;