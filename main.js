// let day =document.getElementById("days");
// let month =document.getElementById("months");
// let year =document.getElementById("years");
// let btn =document.getElementById("button");
// let o_day =document.getElementById("output_days");
// let o_month =document.getElementById("output_months");
// let o_year =document.getElementById("output_years");

// btn.addEventListener('click', () => {
//    let day_Value = day.value;
//    let month_Value = month.value;
//    let year_Value = year.value;
//    var value = new Date();
//    let v_date = value.getDate() - day_Value;
//    let v_month = (value.getMonth() - month_Value) + 1;
//    let v_year = value.getFullYear() - year_Value;
//    o_year.innerText = v_year + " " + "Years";
//    o_month.innerText = v_month + " " + "Months";
//    o_day.innerText = v_date + " " + "Days";
// });

// $('input[type="number"]').each(function(){
//    $(this).on('keyup',function(){
//       if ($(this).val() > Number($(this).attr("max"))) {
//     val=$(this).val().slice(0, $(this).attr("max").length);
//     $(this).val(val);
//   }
//    });
// });
let btn = document.getElementById("button");
btn.addEventListener('click', ()=>{
   let value = document.getElementById("user_value").value;
   let result = document.getElementById("output");
   let time  = new Date();
   let user_values = new Date(value);
   // common dates
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
   
})