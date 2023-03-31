import React, { useState } from 'react';

import FormComponent from '../../components/FormComponent/FormComponent';

const FormPage = function FormPage() {
  const [formValues, setFormValues] = useState([
    {
      firstName: '',
      lastName: '',
      birthDate: '',
      // fileInput: '',
      country: '',
      // agree: false,
      // maleInput: '',
    },
  ]);

  return (
    <div>
      <FormComponent setFormValues={setFormValues}></FormComponent>
    </div>
  );
};

//  {formValues.map((_item,_ind)=>{
//   return <FormCard key={ind} item= {item}></FormCard>
// })}
// <FormCard></FormCard>

// class FormPage extends React.Component<unknown, StateForm> {
//   nameInput: React.RefObject<HTMLInputElement>;
//   surName: React.RefObject<HTMLInputElement>;
//   form: React.RefObject<HTMLFormElement>;
//   dateRef: React.RefObject<HTMLInputElement>;
//   fileRef: React.RefObject<HTMLInputElement>;
//   cityRef: React.RefObject<HTMLSelectElement>;
//   approvalRef: React.RefObject<HTMLInputElement>;
//   womanRef: React.RefObject<HTMLInputElement>;
//   manRef: React.RefObject<HTMLInputElement>;

//   constructor(props: PropsForm) {
//     super(props);

//     this.nameInput = createRef();
//     this.surName = createRef();
//     this.form = createRef();
//     this.dateRef = createRef();
//     this.fileRef = createRef();
//     this.cityRef = createRef();
//     this.approvalRef = createRef();
//     this.manRef = createRef();
//     this.womanRef = createRef();
//     this.state = {
//       errors: {
//         firstNameInput: '',
//         lastNameInput: '',
//         dateInput: '',
//         fileInput: '',
//         cityInput: '',
//         approvalInput: '',
//         maleInput: '',
//       },
//       disabledButton: true,
//       arrayCards: [],
//       show: '',
//     };
//   }

//   handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (this.validate()) {
//       const inputValueName = (this.nameInput as RefObject<HTMLInputElement>).current?.value;
//       const inputValueSurName = (this.surName as RefObject<HTMLInputElement>).current?.value;
//       const inputDate = (this.dateRef as RefObject<HTMLInputElement>).current?.value;
//       const inputFile = (this.fileRef as RefObject<HTMLInputElement>).current?.files;
//       const inputCity = (this.cityRef as RefObject<HTMLSelectElement>).current?.value;
//       const approvalInput = (this.approvalRef as RefObject<HTMLInputElement>).current?.value;

//       const maleInput = (this.manRef as RefObject<HTMLInputElement>).current?.checked
//         ? 'man'
//         : 'woman';
//       if (
//         inputValueName &&
//         inputValueSurName &&
//         inputDate &&
//         inputFile &&
//         inputCity &&
//         approvalInput &&
//         maleInput
//       ) {
//         const newCard: PersonCard = {
//           name: inputValueName,
//           surName: inputValueSurName,
//           date: inputDate,
//           file: URL.createObjectURL(inputFile[0]),
//           city: inputCity,
//           approval: approvalInput,
//           male: maleInput,
//         };
//         this.addCard(newCard);
//       }
//       this.setState({ show: 'Your data is send' });
//       this.clearShow();
//       (this.form as RefObject<HTMLFormElement>).current?.reset();
//       this.setState({ disabledButton: true });
//     }
//   };

//   clearShow = () => {
//     setTimeout(() => {
//       this.setState({ show: '' });
//     }, 2000);
//   };
//   addCard = (newCard: PersonCard) => {
//     this.state.arrayCards.push(newCard);
//     this.setState({ arrayCards: this.state.arrayCards });
//   };

//   componentDidUpdate() {
//     if (this.state.disabledButton === false) {
//       if (this.isAnyErrorValidator()) {
//         this.setDisabledSubmit();
//       }
//     }
//   }

//   validate = () => {
//     const errors = {
//       firstNameInput: '',
//       lastNameInput: '',
//       dateInput: '',
//       fileInput: '',
//       cityInput: '',
//       approvalInput: '',
//       maleInput: '',
//     };
//     let isValid = true;
//     const inputValue = (this.nameInput as RefObject<HTMLInputElement>).current?.value;
//     if (!inputValue?.length) {
//       isValid = false;
//       errors.firstNameInput = 'Please enter your first name';
//     } else if (!/^[a-zA-Zа-яА-Я]+$/.test(inputValue)) {
//       isValid = false;
//       errors.firstNameInput = 'The first name must contain only letters';
//     } else if (inputValue?.length < 2) {
//       isValid = false;
//       errors.firstNameInput = 'The first name must be more then 1 letter';
//     }

//     const inputValueSurName = (this.surName as RefObject<HTMLInputElement>).current?.value;
//     if (!inputValueSurName?.length) {
//       isValid = false;
//       errors.lastNameInput = 'Please enter your last name';
//     } else if (!/^[a-zA-Zа-яА-Я]+$/.test(inputValueSurName)) {
//       isValid = false;
//       errors.lastNameInput = 'The Last name must contain only letters';
//     } else if (inputValueSurName?.length < 2) {
//       isValid = false;
//       errors.lastNameInput = 'The last name must be more then 1 letter';
//     }

//     const inputValueDate = (this.dateRef as RefObject<HTMLInputElement>).current?.value;
//     if (!inputValueDate?.trim()) {
//       isValid = false;
//       errors.dateInput = 'Please enter your date';
//     }

//     const inputFile = (this.fileRef as RefObject<HTMLInputElement>).current?.files;
//     if (inputFile?.length === 0) {
//       isValid = false;
//       errors.fileInput = 'You need change file';
//     }
//     const approvalInput = (this.approvalRef as RefObject<HTMLInputElement>).current;
//     if (!approvalInput?.checked) {
//       isValid = false;
//       errors.approvalInput = 'You need to agree to data processing';
//     }

//     const cityInput = (this.cityRef as RefObject<HTMLSelectElement>).current?.value;
//     if (!cityInput?.length) {
//       isValid = false;
//       errors.cityInput = 'You need change city';
//     }
//     const man = (this.manRef as RefObject<HTMLInputElement>).current;
//     const woman = (this.womanRef as RefObject<HTMLInputElement>).current;
//     if (!man?.checked && !woman?.checked) {
//       isValid = false;
//       errors.maleInput = 'You need to choose a gender';
//     }

//     this.setState({
//       errors: errors,
//     });
//     return isValid;
//   };

//   resetError = (error: string) => {
//     if (error === 'Input Name') {
//       if ((this.nameInput as RefObject<HTMLInputElement>).current?.value.length) {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             firstNameInput: '',
//           },
//         });
//       } else {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             firstNameInput: error,
//           },
//         });
//       }
//     } else if (error === 'Input Last name') {
//       if ((this.surName as RefObject<HTMLInputElement>).current?.value.length) {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             lastNameInput: '',
//           },
//         });
//       } else {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             lastNameInput: error,
//           },
//         });
//       }
//     } else if (error === 'Input Date') {
//       if ((this.dateRef as RefObject<HTMLInputElement>).current?.value.length) {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             dateInput: '',
//           },
//         });
//       } else {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             dateInput: error,
//           },
//         });
//       }
//     } else if (error === 'Change file') {
//       if ((this.fileRef as RefObject<HTMLInputElement>).current?.files?.length !== 0) {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             fileInput: '',
//           },
//         });
//       } else {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             fileInput: error,
//           },
//         });
//       }
//     } else if (error === 'Change city') {
//       if ((this.cityRef as RefObject<HTMLSelectElement>).current?.value.length) {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             cityInput: '',
//           },
//         });
//       } else {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             cityInput: error,
//           },
//         });
//       }
//     } else if (error === 'You need to agree...') {
//       if ((this.approvalRef as RefObject<HTMLInputElement>).current?.checked) {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             approvalInput: '',
//           },
//         });
//       } else {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             approvalInput: error,
//           },
//         });
//       }
//     } else if (error === 'male') {
//       if (
//         (this.manRef as RefObject<HTMLInputElement>).current?.checked ||
//         (this.womanRef as RefObject<HTMLInputElement>).current?.checked
//       ) {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             maleInput: '',
//           },
//         });
//       } else {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             maleInput: error,
//           },
//         });
//       }
//     }
//   };
//   setDisabledSubmit = () => {
//     this.setState({
//       disabledButton: true,
//     });
//   };

//   setUndisabledSubmit = () => {
//     this.setState({
//       disabledButton: false,
//     });
//   };

//   isAnyErrorValidator = () => {
//     const errors = this.state.errors;
//     if (
//       errors.firstNameInput ||
//       errors.lastNameInput ||
//       errors.dateInput ||
//       errors.fileInput ||
//       errors.cityInput ||
//       errors.approvalInput ||
//       errors.maleInput
//     ) {
//       return true;
//     }

//     return false;
//   };

//   validationRefAll() {
//     if (
//       (this.approvalRef as RefObject<HTMLInputElement>).current?.checked ||
//       (this.manRef as RefObject<HTMLInputElement>).current?.checked ||
//       (this.womanRef as RefObject<HTMLInputElement>).current?.checked ||
//       (this.nameInput as RefObject<HTMLInputElement>).current?.value.length ||
//       (this.surName as RefObject<HTMLInputElement>).current?.value.length ||
//       (this.dateRef as RefObject<HTMLInputElement>).current?.value.length ||
//       (this.fileRef as RefObject<HTMLInputElement>).current?.files?.length !== 0 ||
//       (this.cityRef as RefObject<HTMLSelectElement>).current?.value.length
//     ) {
//       return true;
//     }
//     return false;
//   }

//   handleChange1 = (error: string) => {
//     this.resetError(error);
//     if (this.validationRefAll()) {
//       this.setUndisabledSubmit();
//     } else {
//       this.setDisabledSubmit();
//     }
//   };
//   handleClick2 = () => {
//     console.log(this.manRef.current?.checked);
//     console.log(this.womanRef.current?.checked);
//   };
//   render(): React.ReactNode {
//     return (
//       <div>
//         <form
//           className={style.formsWrapper}
//           onSubmit={this.handleSubmit}
//           ref={this.form}
//           data-testid={'react-form'}
//         >
//           <div className={style.wrapperLabel}>
//             <label className={style.labelInput}>
//               First name:
//               <input
//                 data-testid={'nameTest'}
//                 type="input"
//                 ref={this.nameInput}
//                 className={this.state.errors.firstNameInput ? style.inputErrors : '' + style.input}
//                 onBlur={() => this.handleChange1('Input Name')}
//                 onChange={() => this.handleChange1('Input Name')}
//               ></input>
//             </label>
//             {this.state.errors.firstNameInput && (
//               <p className={style.errorText}>{this.state.errors.firstNameInput} </p>
//             )}
//           </div>

//           <div className={style.wrapperLabel}>
//             <label className={style.labelInput}>
//               Last name:
//               <input
//                 data-testid={'lastNameTest'}
//                 type="input"
//                 ref={this.surName}
//                 className={this.state.errors.lastNameInput ? style.inputErrors : '' + style.input}
//                 onBlur={() => this.handleChange1('Input Last name')}
//                 onChange={() => this.handleChange1('Input Last name')}
//               ></input>
//             </label>
//             {this.state.errors.lastNameInput && (
//               <p className={style.errorText}>{this.state.errors.lastNameInput} </p>
//             )}
//           </div>

//           <div className={style.wrapperLabel}>
//             <label className={style.labelInput}>
//               Date:
//               <input
//                 type="date"
//                 ref={this.dateRef}
//                 className={this.state.errors.dateInput ? style.inputErrors : '' + style.input}
//                 onBlur={() => this.handleChange1('Input Date')}
//                 onChange={() => this.handleChange1('Input Date')}
//               ></input>
//             </label>
//             {this.state.errors.dateInput && (
//               <p className={style.errorText}>{this.state.errors.dateInput} </p>
//             )}
//           </div>

//           <div className={style.wrapperLabel}>
//             <label className={style.labelInput}>
//               Upload file:
//               <input
//                 type="file"
//                 ref={this.fileRef}
//                 className={
//                   this.state.errors.fileInput ? style.inputErrorDate : '' + style.inputDate
//                 }
//                 onBlur={() => this.handleChange1('Change file')}
//                 onChange={() => this.handleChange1('Change file')}
//               ></input>
//             </label>
//             {this.state.errors.fileInput && (
//               <p className={style.errorText}>{this.state.errors.fileInput} </p>
//             )}
//           </div>

//           <div className={style.wrapperLabel}>
//             <label className={style.labelInput}>
//               Your city:
//               <select
//                 ref={this.cityRef}
//                 defaultValue=""
//                 className={
//                   this.state.errors.cityInput ? style.inputErrorDate : '' + style.inputDate
//                 }
//                 onBlur={() => this.handleChange1('Change city')}
//                 onChange={() => this.handleChange1('Change city')}
//               >
//                 <option value="" disabled={true}>
//                   Select city
//                 </option>
//                 <option value="Minsk">Minsk</option>
//                 <option value="Brest">Brest</option>
//                 <option value="Pinsk">Pinsk</option>
//                 <option value="Grodno">Grodno</option>
//               </select>
//             </label>
//             {this.state.errors.cityInput && (
//               <p className={style.errorText}>{this.state.errors.cityInput} </p>
//             )}
//           </div>
//           <div className={style.wrapperLabel}>
//             <label className={style.labelInput}>
//               I agree...
//               <input
//                 data-testid={'approvalTest'}
//                 type="checkbox"
//                 ref={this.approvalRef}
//                 className={this.state.errors.approvalInput ? style.inputErrors : '' + style.input}
//                 onClick={() => this.handleChange1('You need to agree...')}
//               ></input>
//             </label>
//             {this.state.errors.approvalInput && (
//               <p className={style.errorText}>{this.state.errors.approvalInput} </p>
//             )}
//           </div>
//           <div className={style.wrapperLabel}>
//             <div className={style.wrapperRadio}>
//               <div className={style.radio}>
//                 <input
//                   onChange={() => this.handleChange1('male')}
//                   type="radio"
//                   ref={this.manRef}
//                   id="radioMan"
//                   className={style.radioInput}
//                   name="male"
//                 />
//                 <label htmlFor="radioMan" className={style.radioLabel}>
//                   man
//                 </label>
//               </div>
//               <div className={style.radio}>
//                 <input
//                   onChange={() => this.handleChange1('male')}
//                   type="radio"
//                   ref={this.womanRef}
//                   id="radioWoman"
//                   name="male"
//                   className={style.radioInput}
//                 />
//                 <label htmlFor="radioWoman" className={style.radioLabel}>
//                   woman
//                 </label>
//               </div>
//             </div>
//             {this.state.errors.maleInput && (
//               <p className={style.errorText}>{this.state.errors.maleInput} </p>
//             )}
//           </div>
//           <button type="submit" disabled={this.state.disabledButton}>
//             Submit
//           </button>
//         </form>
//         {this.state.arrayCards.length !== 0 &&
//           this.state.arrayCards.map((i, ind) => <FormCard {...i} key={ind}></FormCard>)}
//         {this.state.show && <ShowSend text={this.state.show}></ShowSend>}
//       </div>
//     );
//   }
// }
export default FormPage;
