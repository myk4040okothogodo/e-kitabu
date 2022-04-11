import { request, gql } from 'graphql-request';
const graphqlAPI = "https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql";



export const getBookPages = async () => {
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
    return results.book.pages;
};
