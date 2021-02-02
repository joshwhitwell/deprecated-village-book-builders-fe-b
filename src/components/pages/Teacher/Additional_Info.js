// let React                   = require('react')
// let getRadioOrCheckboxValue = require('../lib/radiobox-value')

// let SurveyFields = React.createClass({

//   renderOptions: function(type, name, value, index) {
//     let isChecked = function() {
//       if (type == 'radio') return value == this.props.fieldValues[name]

//       if (type == 'checkbox') return this.props.fieldValues[name].indexOf(value) >= 0

//       return false
//     }.bind(this)

//     return (
//       <label key={index}>
//         <input type={type} name={name} value={value} defaultChecked={isChecked()} /> {value}
//       </label>
//     )
//   },

//   render: function() {
//     return (
//       <div>
//         <h2>Additional Information</h2>
//         <ul className="form-fields">
//           <li className="text">
//             <span className="label">Subjects</span>
//             {['18-26', '27-38', '39-50', '51-62'].map(this.renderOptions.bind(this, 'radio', 'age'))}
//           </li>
//           <li className="checkbox">
//             <span className="text"></span>
//             {['Blue', 'Red', 'Orange', 'Green'].map(this.renderOptions.bind(this, 'checkbox', 'colors'))}
//           </li>
//           <li className="form-footer">
//             <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
//             <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
//           </li>
//         </ul>
//       </div>
//     )
//   },

//   nextStep: function() {
//     // Get values via querySelector
//     let age    = document.querySelector('input[name="age"]:checked')
//     let colors = document.querySelectorAll('input[name="colors"]')

//     let data = {
//       age    : getRadioOrCheckboxValue(age),
//       colors : getRadioOrCheckboxValue(colors)
//     }

//     this.props.saveValues(data)
//     this.props.nextStep()
//   }
// })

// module.exports = SurveyFields
