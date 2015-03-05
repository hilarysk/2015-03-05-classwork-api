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
  
  students_array = students.map do |object|
     object.to_hash_all_info 
   end
  students_array.to_json
end

get "/students/:id" do
  student = Student.find(params[:id])

  student_hash = student.to_hash_all_info
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

get "/delete" do
  student = Student.find(params["id"])
  student.delete
end

get "/create" do
  student = Student.new(params)
  student.insert
end

get "/ultrawise" do
  student = Student.find(params["id"])
  student.ultra_wise?.to_json 
end

get "/candrink" do
  student = Student.find(params["id"])
  student.can_drink?.to_json
end


# Afternoon Assignment:

# From the console, you should be able to use `XMLHttpRequest` to make requests to these paths and parse the responses as JSON, just like we went over together.

## DOM Exercises

# - Add links to various routes on the homepage.
# - Clicking a link should create an `XMLHttpRequest` to that path.
# - Display the result in some elegant way in an alert to the user.
# - Change your code so that the result displays on the page somewhere instead.
# - Some of the routes above change information in the database and therefore need user-submitted information. Those are harder to implement, so save them as a bonus for the end. (Look into FormData.)