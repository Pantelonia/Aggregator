 
# The aggregator code 


### That project created for the purpose of providing information about project from GitLab:
- Information about Project
- Information about Author
- All project's Commit
- Information about Difference between Commit

# Getting started
Project is divided into to parts:
- [Frontend](https://github.com/Pantelonia/Aggregator)
- [Backend](https://github.com/Pantelonia/AggregatorBack)
### To kick-start clone repo and build the app

# Installation
### BackEnd
It's based on Spring-Data technology. That programme connect  two aggregator in one place and working with DataBase
### Frontend
It's based on React. For work with it you should have a node.js and npm [Official site](https://nodejs.org/en/)

# API Reference
In project i use a bootstrap and for correct work you need it
### `npm install bootstrap`
### Database
Your database must have this entities
```
create table IF NOT EXISTS "user"(
	id int primary key ,
	name text not null,
	username text not null,
	web_url text not null,
	avatar_url text
);

create table IF NOT EXISTS "project"(
	id int primary key,
	name text not null,
	description text,
	user_id int REFERENCES "user" (id),
	created_at text not null,
	web_url text not null,
	avatar_url text
);

create table IF NOT EXISTS "commit"(
	id text primary key,
	title text,
	created_at text not null, 
	message text,
	project_id  int not null REFERENCES "project" (id),
	author_name text not null,
	branches text not null
);

create table IF NOT EXISTS "Diff"(
	id serial primary key,
	old_path text not null,
	new_path text not null,
	new_file bool not null,
	renamed_file bool not null,
	deleted_file bool not null,
	diff text not null,
	commit_id text not null REFERENCES "commit" (id)
);
```
# How to use?
Firstly, you should use *pivoting* to connect with DataBase
### `$ ssh -L localhost:9999:"pg":5432 s242274@se.ifmo.ru -p 2222`
After that, run a backend spring-app. If app build correctly user can start Frontend react-app
You should use a this command:
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>
You will also see any lint errors in the console.

# Author
- [Syrovatskiy pavel](https://github.com/Pantelonia)
- [Artamonov Alex](https://github.com/ArtamonovAlex)
- [Kocharian Sergei](https://github.com/KACHANIX)


