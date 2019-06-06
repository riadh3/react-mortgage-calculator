
  import React,{Component} from 'react';
import FormInput from './formInput'

// the formula to calculate
//...https://mortgage.lovetoknow.com/Calculate_Mortgage_Payments_Formula
class App extends Component{

  state={
    principalAmount:0,
    interestRate:0,
    loanLength:0,
    monthlyPayment:0
  }


  inputHandler =(event)=>{
    this.setState({ 
      [event.target.name]: event.target.value 
    })
  }

  calculPayment =()=>{
    let principal=this.state.principalAmount
    let rate=this.state.interestRate
    let years=this.state.loanLength

    let monthlyInterst = rate / 100 /12
    let monthsNumber = years * 12
    let result = principal * monthlyInterst * Math.pow(1+monthlyInterst, monthsNumber) / (Math.pow(1+monthlyInterst, monthsNumber) - 1)
    
    let toDispaly = Number(result.toFixed(2)).toLocaleString()

    this.setState({
      monthlyPayment:toDispaly
    })

  }
  reset =()=>{
    this.setState({
          principalAmount:0,
          interestRate:0,
          loanLength:0,
          monthlyPayment:0
    })
  }




  clearInput = (event)=>{
    // this.setState({ 
    //   [event.target.name]: '' 
    // })
  }



  render(){
    return(
      <div className='main-container'>
          <div className='form'>
          <h1> mortgage payment calculator app</h1>
                <FormInput  label='Principal amount:' 
                            name='principalAmount'
                            value={this.state.principalAmount}
                            inputHandler={this.inputHandler}
                            clearInput={this.clearInput}
                />
                 <FormInput label='interestRate:' 
                            name='interestRate'
                            value={this.state.interestRate}
                            inputHandler={this.inputHandler}
                            clearInput={this.clearInput}
                />
                 <FormInput  label='loanLength: '
                            name='loanLength'
                            value={this.state.loanLength}
                            inputHandler={this.inputHandler}
                            clearInput={this.clearInput}
                />
                <div className='buttons'>
                  <button onClick={this.calculPayment}>Calcul</button>
                  <button onClick={this.reset}>Reset</button>
                </div>

            <h3>Monthly Payment <span>{this.state.monthlyPayment}</span></h3>


          </div>
        
        
        
      </div>
    )
  }
}

export default App;