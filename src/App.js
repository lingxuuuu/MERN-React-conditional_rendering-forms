import React, { Component } from "react"
import Conditional from './Conditional'
import Conditional2 from './Conditional2'

//Fetching data from an API
//loading first and then showing the name

class AppApi extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: 'false',
      character: {},
      gender: ''
    }
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people/1/')
        .then(response => response.json())
        .then(data => {
          this.setState({
            loading:false,
            character: data
          })
        })

    }

  render (){
     const text = this.state.loading ? 'loading...' : this.state.character.name 
     return(
       <div>
         <p>{text}</p>
       </div>
     )
  }
}

//Forms

class App3 extends Component {
  constructor() {
    super()
    this.state = {
      firstName:'',
      lastName:'',
      isFriendly: true,
      favColor: 'blue'
    }
    this.handleChange=this.handleChange.bind(this)
  }
  //when event fire, they pass a predetermind prameter into our function 
  //{target} represents the element which the event is fired
  //everytime you have a setState, make sure to bind it in the constructor
  //pay attention to the [ event.target.name ]
  handleChange(event){
    const {name, value, type, checked} = event.target
    type === 'checkbox' ? this.setState({[name]: checked}): this.setState({[name]: value})
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>

        <input type='text' 
            name='firstName'
            placeholder='First Name' 
            onChange={this.handleChange}/>
        <h1>{this.state.firstName}</h1>

        <input type='text' 
            name='lastName' 
            placeholder='Last Name' 
            onChange={this.handleChange}/>
        <h1>{this.state.lastName}</h1>

        <textarea value={'Some default value'} />

        <input 
            type='checkbox'
            name='isFriendly'
            checked={this.state.isFriendly}
            onChange={this.handleChange} 
            /> Is friendly?

        <input 
            type='radio'
            name='gender'
            value='male'
            checked={this.state.gender === 'male'}
            onChange={this.handleChange} 
            /> Male

        <input 
            type='radio'
            name='gender'
            value='female'
            checked={this.state.gender === 'female'}
            onChange={this.handleChange} 
            /> Female
        <h2>You are a {this.state.gender}</h2>

        <select 
           value={this.state.favColor}
           onChange={this.handleChange}
           name='favcolor'
        >
            <option value="blue">Blue</option>
            <option value='green'>Green</option>
            <option value='red'>Red</option>
            <option value='orange'>Orange</option>
            <option value='yellow'>Yellow</option>
        </select>
        <h2>Your favorite color is {this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    )
    
  }
}

//form pratice

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        firstName: "",
        lastName: "",
        age:"",
        gender: "",
        destination: "",
        isVegan:false,
        isKosher:false,
        isLactoseFree:false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === 'checkbox'?
    this.setState({
          [name]:checked
    })
  :
    this.setState({
      [name]:value
    })
  }

  render(){
    return(
      <main>
        <form>
          <input name='firstname' value={this.state.firstName } onchange={this.handleChange} placeholder='First Name' /><br />
          <input name='lastname' value={this.state.lastName } onchange={this.handleChange} placeholder='Last Name' /> <br />
          <input name='age' value={this.state.age } onchange={this.handleChange} placeholder='Age' /> <br />
          <label>
            <input 
            type='radio' 
            name='gender'
            value='male'
            checked={this.state.gender === 'male'}
            onChange={this.handleChange}
            />Male
            <input 
            type='radio' 
            name='gender'
            value='female'
            checked={this.state.gender === 'female'}
            onChange={this.handleChange}
            />Female
          </label>
          <br />
          <select value={this.state.destination} name="destination" onChange={this.handleChange}>
            <option value=""> --Please Choose a destination --</option>
            <option value=" germany" >Germany</option>
            <option value=" norway" >Norway</option>
            <option value=" north pole" >North Pole</option>
            <option value=" south pole" >South Pole</option>
          </select>

          <label>
            <input
              type='checkbox'
              name='isVegan'
              onChange={this.handleChange}
              checked={this.state.isVegan}
             /> Vegan?
          </label>

          <label>
            <input 
              type='checkbox'
              name='isKosher'
              onChange={this.handleChange}
              checked={this.state.isKosher}
             /> Kosher?
          </label>

          <label>
            <input 
              type='checkbox'
              name='isLactoseFree'
              onChange={this.handleChange}
              checked={this.state.isLactoseFree}
            /> LactoseFree?
          </label>
          <br />
          <button>Submit</button>
        </form>

        <h2>Entered Info</h2>
        <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your Age: {this.state.age}</p>
        <p>Your Gender: {this.state.gender}</p>
        <p>Your Destination:{this.state.destination} </p>
        <p>Your dietary restriction:</p>
           <p>Vegan: {this.state.isVegan ? 'Yes' : 'No'}</p>
           <p>Kosher: {this.state.isKosher ? 'Yes' : 'No'}</p>
           <p>Lactose Free: {this.state.isLactoseFree ? 'Yes' : 'No'}</p>
        
      </main>
    )
  }
}



//conditional rendering
class App2 extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
     console.log('I am working')
     this.setState(prevState => {
       return {
         isLoggedIn: !prevState.isLoggedIn
       }
     })
  }
  render () {
    let buttonText = this.state.isLoggedIn ? 'Log Out' :'Log In'
    return (
      <div>
        {this.state.isLoggedIn ? <h1>You are logged in</h1> : <Conditional2 />}
        <button onClick={this.handleClick}> {buttonText} </button>
      </div>
    )
  }
}

class App1 extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    setTimeout( ()=>{
      this.setState({
        isLoading:false
      })
    }, 1500)
  }
  render() {
    return (
      <div>
        {this.state.isLoading? <h1>Loading...</h1> : <Conditional />}
      </div>
    )
  }

}

export default App;
