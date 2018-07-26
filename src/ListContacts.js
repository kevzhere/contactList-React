import React, {Component} from 'react';
import propTypes from 'prop-types';

class ListContacts extends Component{
    static propTypes = {
        contacts: propTypes.array.isRequired,
        onDelete: propTypes.func.isRequired
    }
    
    state ={
        query:''
    }

    updateQuery = (query) =>{
        this.setState({query: query.trim() })
    }

    render(){
        return(
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        text='text'
                        placeholder='Search Contacts'
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                {this.state.query}
                <ol className='contact-list'>
                    {this.props.contacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar' style={{
                                backgroundImage:`url(${contact.avatarURL})`
                            }}/>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button className='contact-remove' onClick={()=>this.props.onDelete(contact)}>
                            Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}



export default ListContacts;