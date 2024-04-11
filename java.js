function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if (name.trim() == '' || email.trim() == '' || message.trim() == '') {
      alert("Please, complete all lines.");
      return false;
    }
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please, Enter a valid email address.");
      return false;
    }
    
    alert("¡Form submitted successfully!");
    return true;
  }
  var searchData = ["HTML", "CSS", "JavaScript", "Python", "Java", "C++", "Ruby", "PHP", "React", "Angular", "Vue"];