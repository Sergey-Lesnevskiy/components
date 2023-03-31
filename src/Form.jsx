// import { useEffect } from "react";
// import { useState } from "react";

// export const Form = ({ setFormValues }) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [birthDate, setBirthDate] = useState("");
//   const [country, setCountry] = useState("");
//   const [agree, setAgree] = useState(false);
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     setErrors({});
//     if (!agree) {
//       setErrors((state) => ({ ...state, agree }));
//     }
//     if(birthDate === ''){
//       setErrors((state) => ({ ...state, birthDate }));
//     }
//     if(firstName === ''){
//       setErrors((state) => ({ ...state, firstName }));
//     }
//   };

//   useEffect(() => {
//     validate();
//   }, [agree, firstName, birthDate]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (Object.keys(errors).length === 0) {
//       setFormValues((state) => [
//         ...state,
//         { firstName, lastName, birthDate, country, agree },
//       ]);
//       reset();
//     }

//   };
// const reset = () =>{
//   setAgree(false)
//   setCountry('Russia')
//   setFirstName('')
//    setLastName('')
//   setBirthDate('')
// }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="firstName">
//         <p>
//         Name:
//           {errors?.firstName !== undefined && (
//             <span>* firstName should be fill</span>
//           )}
//         </p>
//         <input
//           type="text"
//           onChange={(event) => setFirstName(event.target.value)}
//           name="firstName"
//           value={firstName}
//         ></input>
//       </label>
//       <label htmlFor="lastName">
//         Surname:
//         <input
//           type="text"
//           onChange={(event) => setLastName(event.target.value)}
//           name="lastName"
//           value={lastName}
//         ></input>
//       </label>
//       <label htmlFor="birthDate">
//         Birth day:
//         <p>
//         Birth day:
//           {errors?.birthDate !== undefined && (
//             <span>* birthDate should be fill</span>
//           )}
//         </p>
//         <input
//           type="date"
//           onChange={(event) => setBirthDate(event.target.value)}
//           name="birthDate"
//           value={birthDate}
//         ></input>
//       </label>
//       <label htmlFor="birthDate">
//         Country:
//         <select
//           name="country"
//           value={country}
//           onChange={(event) => setCountry(event.target.value)}
//         >
//           <option>Russia</option>
//           <option>Belarus</option>
//           <option>Ukraine</option>
//         </select>
//       </label>
//       <label htmlFor="agree">
//         <p>
//           this box I agree...
//           {errors?.agree !== undefined && (
//             <span>* agree should be checked</span>
//           )}
//         </p>

//         <input
//           type="checkbox"
//           checked={agree}
//           onChange={() => setAgree((prev) => !prev)}
//         ></input>
//       </label>

//       <div>
//         <input type="submit" value="Send" />
//       </div>
//     </form>
//   );
// };
