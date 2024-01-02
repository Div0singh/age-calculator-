let btn = document.getElementById("button");
btn.addEventListener('click', ()=>{
   let value = document.getElementById("user_value").value;
   let result = document.getElementById("output");
   let time  = new Date();
   let user_values = new Date(value);
   if(time < user_values){
      document.getElementById("invalid").style.display = "block";
      document.getElementById("invalid").innerText = "Please Enter Valid Date";
      document.getElementById("user_value").classList.add('invalid');
   }
   else if(value == 0){
      document.getElementById("invalid").style.display = "block";
      document.getElementById("invalid").innerText = "Please Enter Date";
      document.getElementById("user_value").classList.add('invalid');

   }
   else{
   // common dates
   document.getElementById("user_value").classList.remove('invalid');
   document.getElementById("user_value").classList.add('valid');
   document.getElementById("invalid").style.display = "none";
   let commonDate = time.getDate();
   let commonMonth = time.getMonth()+1;
   let commonYear = time.getYear();
   // use dates
   let user_Date = user_values.getDate();
   let user_Month = user_values.getMonth()+1;
   let user_Year = user_values.getYear();
   //final value
   let date = commonDate - user_Date;
   let month = commonMonth-user_Month;
   let year = commonYear- user_Year;
   let totalDays=(year*365)+(month*30)+date;
   let totalHours = totalDays*24;
   result.innerHTML  = `Your Age : ${year} Years ${month} Months ${date} Days <p>Total Days : ${totalDays}  Hours : ${totalHours}</p>`;
}
})
