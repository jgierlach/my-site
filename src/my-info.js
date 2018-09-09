import React, { Component } from 'react'
import lorumIpsum from './images/lorum-ipsum.svg'
import resume from './images/MaryWarrickResume.pdf'
import {Link} from 'react-router-dom'





class MyInfo extends Component {

  copyEmail = () => {
    let copyText = document.getElementById("email")
    copyText.select()
    document.execCommand("copy")
  }

  render() {
    return (
      <div className='welcome' >
            <div className='lorumIpsum'>
                <img src={lorumIpsum} />
            </div>
            <div className='card' >
                <h1 className='myName'> Mary Warrick</h1>

                <p className='regularTextBlack'><strong>Full-Stack Software Developer,</strong><br/>
                typography enthusiast,<br/>
                oyster shucker,<br/>
                bonvivant.
                </p>
                <div className='logosAndLinks'>
               <a href="https://www.linkedin.com/in/mary-warrick-1a21a7b4/"> <i class="fab fa-linkedin" ></i></a>
                <a href="https://github.com/maubertw"> <i class="fab fa-github" ></i></a>

                </div><br/>

                <div className='email-copy'>
                <input type="text" value="meaubertw@gmail.com" id="email"></input>
                <div className='tooltip'><span className='tooltiptext'>click to copy Mary's email to your clipboard</span>
                <button onClick={(e) => this.copyEmail(e)} >copy email</button>
                </div></div>
                <a className='resume' href={resume} >View My Resume</a><br/>








            </div>
          </div>);
    }


}

export default MyInfo;



