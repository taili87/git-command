/// <reference types="cypress" />

describe('Wrap', ()=>{
    beforeEach(()=>{
        cy.visit("https://example.cypress.io/todo");
    })
    it('wrap input', ()=>{
       cy.log('Hello test warp')
    })
})