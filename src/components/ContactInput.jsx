import React from 'react';

class ContactInput extends React.Component {
    
    constructor ( props )
    {
   super(props);
 
   // inisialisasi state
   this.state = {
     name: '',
     tag: '',
     number:'',
     address: '',
   }
 
   this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
   this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
   this.onNumberChangeEventHandler = this.onNumberChangeEventHandler.bind(this);
   this.onAddressChangeEventHandler = this.onAddressChangeEventHandler.bind(this);
   this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
 }
 
 onNameChangeEventHandler(event) {
   this.setState(() => {
     return {
       name: event.target.value,
     }
   });
 }
 
 onTagChangeEventHandler(event) {
   this.setState(() => {
     return {
       tag: event.target.value,
     }
   });
 }

 onNumberChangeEventHandler(event) {
  this.setState(() => {
    return {
      number: event.target.value,
    }
  });
}

 onAddressChangeEventHandler(event) {
  this.setState(() => {
    return {
      address: event.target.value,
    }
  });
}
 
 onSubmitEventHandler(event) {
   event.preventDefault();
   this.props.addContact(this.state);
 }
render() {
return (
    <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
       <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
       <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
       <input type="text" placeholder="Number" value={this.state.number} onChange={this.onNumberChangeEventHandler} />
       <input type="text" placeholder="Alamat" value={this.state.address} onChange={this.onAddressChangeEventHandler} />
       <button type="submit">Tambah</button>
     </form>
)
}
}

export default ContactInput;