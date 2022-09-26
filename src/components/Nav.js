import React from 'react'

function Nav ({contacts}) {
    const contactList = contacts.map((contact) => 
    <li key = {contact.id} className= {contact.name.charAt(0) ==='P' ? 'contact active' : 'contact'}>
        <div className= 'icon'> {contact.name.charAt(0)}</div>
        {contact.name}
    </li>
    )
    return (
        <nav>
            <h2> Contacts</h2>
            <ul className ="contacts">
                {contactList}
            </ul>
        </nav>
    )
}
export default Nav