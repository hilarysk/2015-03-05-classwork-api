Code for loop for looking up specific student:

<form >
  <select>
  <p><% @allstudents.each do |object| %>
    <option id="<%= object.id.to_s %>"><%= object.name %>.</option>
    <% end %></p>
  </select>
  <br><br>
  <input type="submit" onclick="openSend('get', 'students/#{object.id}')" value="SUBMIT">
  </form>