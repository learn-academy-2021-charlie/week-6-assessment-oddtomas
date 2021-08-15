# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: To add a foreign key that you forgot when creating the model you can use migrate. Rails generate migration "name of task" will create a migration file, where you can go into and add the command add_column and add the foreign key to the associated table. The name of the foreign key should be animal_id in this case, because the sightings belong to the animal. The foreign key is part of the Sightings model, it goes into thje sightings table. Foreign keys go to whatever model has "belongs_to" and the primary key of the "has_many" model is referenced when creating instances. 

  Researched answer: To fix this issue a migration would be appropriate, it allows the developer to make changes to the existing "version" of the database. A foreign key is added as a column to the table that belongs_to the other table. By generating a migration you can add the missing column of animal_id to the sightings table because the Animal model has_many Sightings, and thus Sightings belongs_to the Animal model. This is the same as saying an animal can have many different sightings, and the foreign key column/attribute is generated as the primary key of the item in the table it belongs to. 



2. Which RESTful API routes must always be passed params? Why?

  Your answer: Routes associated with show, edit, update, and delete require params because they need to know which id specifically to show, edit, update, or delete. Without the id parameter in these instances there's no way for those crud actions to perform their intended functions. 

  Researched answer: REST is an architectural style for defining routes, its a way of mapping HTTP routes and the CRUD functionalities. Routes are code that are responsible for listening and receiving requests and then deciding what to send back. The seven RESTful routes are index, new, create, show, edit, update, and destroy. Show, edit, update, and destroy require parameters because they associated with controller methods that show or alter a specific item so they need the id parameter to know which item is being shown or altered. The show route shows information about one item, the edit route shows an edit form of one item, the update route updates a particular item then redirects, and the delete route deletes a particular item then redirects. 



3. Name three rails generator commands. What is created by each?

  Your answer: Rails generate model, rails generate migration, rails generate resource. Rails generate model, creates a model that has the attributes we choose to assign. A Car model can have the make:string, and model:string attributes for example and an associated table would be created with it to accept instances. Rails generate migration is used to modify the database and make changes to existing tables, with the command a migration file is create where varying commands can be inputted and saved via "rails db:migrate". Rails generate resouce is a command that will generate a model, the schema, and all of the required routes for that model. 

  Researched answer: Generate model creates a new model and an optional list of attribute pairs as arguments. A rails model is a Ruby class that can add to the database record, and be used to find data, update, and remove data. To generate a model it would be "rails generate model ModelName columnname:datatype". The generate model command creates a migrate file, a model file, a test file, and yml file. Rails generate migrations is used to modify the shape of an existing database, including actions like adding, deleting, changing column names, or even changing datatypes of columns. When generate migration is ran, a migration file is created that allows you to make changes. The schema inside of a rails app is just a representation of the current state of your database and shouldn't be altered directly and this is what migrations are for.Rails generate resource is structured " rails generate resource ModelName columnname:datatype", as well as optionally foreign keys to save time. The resource command does everything the generate model command does but it also creates the required routes for that model, and an empty folder in views. 



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students          This would be the Index method which is a read action which acts as a homepage where you can display all items in a model with Model.all.

method="POST"   /students       The create method which is a create action is tied to the new method and enables users to submit data to the database. Create can take an argument of strong params have validation checks. 

method="GET"    /students/new  The new method which a create and read action displays a form to users to submit data to the database and create instances. 

method="GET"    /students/2  The show method which is a read action, shows one item in the associated model referencing the specific id of the instance. 

method="GET"    /students/edit/2    The edit method makes an edit form on an existing item referencing that items id.

method="PATCH"  /students/2      The update method is a update action that performs the actual modification to the database from the edit form, referencing that items specific id. 

method="DELETE" /students/2      The destroy method is a delete action that removes information from the database, it would delete the item that belongs to a specific id. 



5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a developer I make a rails app to manage my to do list
2. As a developer my app has a List model that has the attributes of title and content
3. As a developer I can see a page with all my tasks
4. As a developer I can see individual tasks
5. As a developer I can add new tasks
6. As a developer I can update my tasks
7. As a developer I can delete the task I have completed
8. As a developer I can make multiple types of lists that have many tasks
9. As a developer each list should have it's own page or container
10. As a developer each individual task page should have a way to get back to all of the tasks in that list
