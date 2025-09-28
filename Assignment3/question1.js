
/*Q1) Create an array of states in india.
Remove all the names starting with vowels from the list. Use array.filter.*/
let states = [
   "Mizoram","Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Himachal Pradesh", 
    "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Telangana","Uttar Pradesh", "Uttarakhand", "West Bengal","Tripura","Uttarakhand"];

// Remove states starting with vowels using filter
let filteredStates = states.filter(state => {
    return !["A", "E", "I", "O", "U"].includes(state[0].toUpperCase());
});

console.log(filteredStates);
