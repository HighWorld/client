import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from "@apollo/client";

import {setContext} from '@apollo/client/link/context';



import App from "../App";

import React from 'react';

// setting the authorization link for linking every operation to the authorization 
const authLink = setContext(()=>{
    const token = localStorage.getItem('jwtToken');

    return {
        headers: {authorization: token? `Bearer ${token}` : ''}
    }
});


const httpLink = createHttpLink({
    // uri: "http://localhost:5000",
    uri: "https://high-world-server.herokuapp.com/",
});


const client = new ApolloClient({

    // concatinating the link to the auth link {authLink + httpLink}
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),

   
});

export default (
    <ApolloProvider client={client}>

      
            <App />
       
        
    </ApolloProvider>
);