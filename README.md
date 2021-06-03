# Nodejs Technical test
This is an exercise to test your technical experience with NodeJs and database design.
Please clone this repository to have a minimal intial project.
### Specification
##### Description
- A 'Company' is composed by a set of emplyee 'User' and one required CEO 'User'.

- Both 'Company' and 'User' have an 'Address'.

- An emplyee 'User' can have  multiple 'Mission's and a 'Mission' can be assigned to multiple emplyee 'User's. (CEO do not have missions). 

- A 'Mission' is assigned to one 'Comapny' and can only be assigned to its staffs.

##### Models
###### User
- firstname
- lastname
- username (default: 'firstname'+'lastname')
- email (unique)
- password
- phoneNumber
- parentCompany (if the user is an staff)
- ownedCompany (if the user is a CEO)
- address
- missions

###### Company

- name
- ceo
- staffs
- address

###### Address

- fullAddress
- state
- country
- zipCode
- user (if address belongs to a user)
- company (if address belongs to a company)

###### Mission

- title
- description
- createdAt (autofill)
- staffs
- company

##### Validation
- All ids must be configured to be INTEGER AUTO INCREMENT for the validation process

- There are seperate 'testRequest' files describing differnt scenario with escalating levels of difficulty
each 'testRequest' will have an array of HTTP Requests

- some levels will require an empty Database, otherwise it will be dependednt on the previous level

- You are allowed to modify the structure of any request body (keynames, object hierarchy etc), but never any of the data

- There are multiple approches to design the database, it is recomended you read all test cases so that your conception is compatible with the requested specifications

- You are required or expected to finish in the allocated time, we recomend you prioritize best practices over and implementing long term solutions 

- It is recommended that you validate a level before moving to the next one.

- You are encouragted engage with you supervisor for clarification, advice or help





