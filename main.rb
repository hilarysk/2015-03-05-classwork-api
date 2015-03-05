require "sinatra"
require 'json'
require "sqlite3"
require 'pry'

DATABASE = SQLite3::Database.new("students.db")
DATABASE.results_as_hash = true

require_relative "student"

get "/" do
  
  erb :homepage
end

get "/students" do
  students = Student.all
  
  students_hash = students.map {|s| s.to_hash}
  students_hash.to_json
end

get "/students/:id" do
  student = Student.find(params[:id])

  student_hash = student.to_hash
  student_hash.to_json
end


post "/modify" do # ?id=2&name=Beth&github=fish
  original_student = Student.find(params["id"]) # object of existing record
  original_student_hash = original_student.to_hash_string
  
  student_to_modify = Student.new(params) #<object: #sdkfjsldkfjsdlfk id=>2, name=>Beth, github=>fish>
  student_to_modify_hash = student_to_modify.to_hash_string #{"name"=>"Beth"}
  
  student_to_modify_hash.each do |key, value|
    if value == nil
      student_to_modify_hash[key] = original_student_hash[key]
    end
  end

  modified_student = Student.new(student_to_modify_hash)
 
  modified_student.save 

  modified_student_hash = modified_student.to_hash
  modified_student_hash.to_json
end

# Afternoon Assignment:

# - Add a route that modifies a student record. There's no need for a page that shows a form for editing. We're just working with request paths directly. (Use 'get' instead of 'post' to make it easier to check that things work. Once it's working, change it to 'post'.)

# - Add routes for creating and deleting students, too.

# - Add a route that returns if a particular student is ultra wise. And one for whether the student can drink.

# - Change the application as needed so that the routes I wrote above return whether students can drink, whether they're ultra wise, and their GitHub *link* in the JSON response.

# From the console, you should be able to use `XMLHttpRequest` to make requests to these paths and parse the responses as JSON, just like we went over together.

## DOM Exercises

# - Add links to various routes on the homepage.
# - Clicking a link should create an `XMLHttpRequest` to that path.
# - Display the result in some elegant way in an alert to the user.
# - Change your code so that the result displays on the page somewhere instead.
# - Some of the routes above change information in the database and therefore need user-submitted information. Those are harder to implement, so save them as a bonus for the end. (Look into FormData.)