import React from 'react'

export default function RegisterView(props) {
    function register(event)
    {
      event.preventDefault();
      props.storeUserInfo(
        
        event.target['name'].value,
        event.target['address'].value,
        event.target['phone'].value,
        event.target['email'].value,
        
      );
        
     
      props.history.goBack();
    }
  
    function cancel(event)
    {
      event.preventDefault();
      props.history.goBack();
    }
  
    return (
      <div>
        <form onSubmit={ register }>
          <div>
            Name
          </div>
          <input type="text" name="name" />
  
          <div>
            Street Address
          </div>
          <input type="text" name="address" />
  
          <div>
            Phone
          </div>
          <input type="text" name="phone" />
  
          <div>
            email
          </div>
          <input type="text" name="email" />
  
          <button onClick={ cancel }>Cancel</button>
          <button type="submit">Register</button>
        </form>
      </div>
    )
}
