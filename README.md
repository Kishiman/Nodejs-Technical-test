# Nodejs Technical test
This is an exercise to test your technical experience with NodeJs and database design.
Please clone this repository to have a minimal intial project.
### Specification
##### Description
- A 'Company' is composed by a set of emplyee 'User' and one required CEO 'User'.

- Both 'Company' and 'User' have an 'Address'.

- An emplyee 'User' can have  multiple 'Mission's and a 'Mission' can be assigned to multiple emplyee 'User's. (CEO do not have missions). 

- A 'Mission' is assigned to one 'Comapny' and can only be assigned to its employees.

##### Models
###### User
- firstname
- lastname
- username (default: 'firstname'+'lastname')
- email (unique)
- password
- phoneNumber
- parentCompany (if the user is an employee)
- ownedCompany (if the user is a CEO)
- address
- missions

###### Company

- name
- ceo
- employees
- address

###### Address

- fullAddress
- zipCode
- user (if address belongs to a user)
- company (if address belongs to a company)

###### Mission

- title
- description
- createdAt (autofill)
- users
- company

##### Validation
for the sake of test, all ids must be configured to be INTEGER AUTO INCREMENT

the 'testRequest.js' file contain a set of HTTP request that will be use to validate the different levels of difficulty.
During validation process, we will run all request in order on an empty database, any failure in the chain may result in disruption of ids and thus causing a Domino effect.
Please make sure you validate the whole level before moving to the next one.
###### Level 1
-  Implement basic CRUD (GET POST UPDATE) for all 4 models




