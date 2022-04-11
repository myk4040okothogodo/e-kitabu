
/*in this file is where i construct my query to the provided API as an asynchronous function, that returns a promise,
as can be seen below i use the library 'graphql-request', this code has been placed in this folder to allow for future expansion
of the query, and also to create a single file that handles query cnstruction
*/

import { request, gql } from 'graphql-request';
const graphqlAPI = "https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql";



export const getBookPages = async () => {   /*the following is the recommended format for writing a graphql query, not the only way */
    const query = gql `                 
        query MyQuery {
            book {
              pages {
                content
                tokens {
                  position
                  value
                }
              }
            }
        }
      `;
    const results = await  request(graphqlAPI, query);
    return results.book.pages;      /* my return value that i will then look to plug into my application state*/
};
