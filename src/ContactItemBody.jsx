import React from 'react';
    
function ContactItemBody({ name, tag, number, address }) {
    return (
    <div className="contact-item__body">
        <h3 className="contact-item__title">{name}</h3>
        <p className="contact-item__username">@{ tag }</p>
        <p className="contact-item__number">{ number}</p>
        <p className="contact-item__address">{ address}</p>
    </div>
    );
}
    
export default ContactItemBody;