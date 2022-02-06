import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'https://google.com';
Given('I open Google page', () => {
  cy.visit(url);
});

Given('I see {string} in the title', () => {
  cy.contains('Google');
});