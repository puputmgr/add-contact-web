import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './components/DeleteButton';
    
function ContactItem({ imageUrl, name, tag, number, address, onDelete, id }) {
    return (
    <div className="contact-item">
        <ContactItemImage imageUrl={imageUrl} />
        <ContactItemBody name={ name } tag={ tag } number={ number } address={ address } />
        <DeleteButton id={id} onDelete={onDelete} />
    </div>
    );
}
    
export default ContactItem;