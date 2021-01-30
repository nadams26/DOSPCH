import React from 'react';
import './DOSPCH.css';
import A from './letters/A.png';
import B from './letters/B.png';
import C from './letters/C.png';
import D from './letters/D.png';
import E from './letters/E.png';
import F from './letters/F.png';
import G from './letters/G.png';
import H from './letters/H.png';
import I from './letters/I.png';
import J from './letters/J.png';
import K from './letters/K.png';
import L from './letters/L.png';
import M from './letters/M.png';
import N from './letters/N.png';
import O from './letters/O.png';
import P from './letters/P.png';
import Q from './letters/Q.png';
import R from './letters/R.png';
import S from './letters/S.png';
import T from './letters/T.png';
import U from './letters/U.png';
import V from './letters/V.png';
import W from './letters/W.png';
import X from './letters/X.png';
import Y from './letters/Y.png';
import Z from './letters/Z.png';
import SPACE from './letters/SPACE.png';
import OPEN from './letters/mouthopen.png';
import CLOSED from './letters/mouthclosed.png';


class DOSPCH extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      speech: 'Type in the box to set the text',
      switchInterval: 50,
      image: SPACE,
      letterDisplayIndex: 0,
    };
  }

  //im going to the store
  //to boing at all bread
  render(){
    return (
      <div>
        <div>
          DOSPCH
        </div>
        <div>
          <img alt="letter" height ='400px' width = '400px' src={this.state.image}/>
        </div>
        <div>
          <input onKeyUp={(e) => this.speechHandler(e)} />
        </div>
      </div>
    );
  }
  
  speechHandler(e){
    if(e.key === 'Enter'){
      console.log("talking");
      var msg = new SpeechSynthesisUtterance();
      msg.text = this.state.speech;
      msg.rate = 1;
      var images = [];
      var letters = [];
      for(var i = 0; i < this.state.speech.length; i++){
        letters.push(this.state.speech.toLowerCase().charAt(i));
        switch(this.state.speech.toLowerCase().charAt(i)){
          case 'a':
            images.push(A);
            break;
          case 'b':
            images.push(B);
            break;
          case 'c':
            images.push(C);
            break;
          case 'd':
            images.push(D);
            break;
          case 'e':
            images.push(E);
            break;
          case 'f':
            images.push(F);
            break;
          case 'g':
            images.push(G);
            break;
          case 'h':
            images.push(H);
            break;
          case 'i':
            images.push(I);
            break;
          case 'j':
            images.push(J);
            break;
          case 'k':
            images.push(K);
            break;
          case 'l':
            images.push(L);
            break;
          case 'm':
            images.push(M);
            break;
          case 'n':
            images.push(N);
            break;
          case 'o':
            images.push(O);
            break;
          case 'p':
            images.push(P);
            break;
          case 'q':
            images.push(Q);
            break;
          case 'r':
            images.push(R);
            break;
          case 's':
            images.push(S);
            break;
          case 't':
            images.push(T);
            break;
          case 'u':
            images.push(U);
            break;
          case 'v':
            images.push(V);
            break;
          case 'w':
            images.push(W);
            break;
          case 'x':
            images.push(X);
            break;
          case 'y':
            images.push(Y);
            break;
          case 'z':
            images.push(Z);
            break;
          default:
            images.push(SPACE);
            break;
        }
      }
      this.setState({letterDisplayIndex: 0});
      this.timerID = setTimeout(() => this.tick(images, letters), this.state.switchInterval);
      window.speechSynthesis.speak(msg);
      console.log("talking");
    }
    else{
      this.setState({speech: e.target.value})
    }
  }

  //im going to the store later, what do you need, it is not to hard to drive there, i can drive over there right now, if you want me to do that
  //hello and welcome to nathan's website, hosted here are projects and web apps created by me, text to speech robot nathan
  tick(images, letters){
    if((this.state.letterDisplayIndex < this.state.speech.length) && (letters[this.state.letterDisplayIndex] === ' ')){
      this.setState({image: CLOSED});
      this.setState({letterDisplayIndex: ((this.state.letterDisplayIndex)+1)});
      console.log('space found');
      this.timerID = setTimeout(() => this.tick(images, letters), 58);
    }
    else if((this.state.letterDisplayIndex < this.state.speech.length) && (letters[this.state.letterDisplayIndex] === ',')){
      this.setState({image: CLOSED});
      this.setState({letterDisplayIndex: ((this.state.letterDisplayIndex)+1)});
      console.log('comma found');
      this.timerID = setTimeout(() => this.tick(images, letters), 450);
    }
    else if((this.state.letterDisplayIndex < this.state.speech.length) && (this.state.letterDisplayIndex % 2 === 0)){
      this.setState({image: CLOSED});
      this.setState({letterDisplayIndex: ((this.state.letterDisplayIndex)+1)});
      this.timerID = setTimeout(() => this.tick(images, letters), this.state.switchInterval);
    }
    else if((this.state.letterDisplayIndex < this.state.speech.length) && (this.state.letterDisplayIndex % 2 !== 0)){
      this.setState({image: OPEN});
      this.setState({letterDisplayIndex: ((this.state.letterDisplayIndex)+1)});
      this.timerID = setTimeout(() => this.tick(images, letters), this.state.switchInterval);
    }
    // if(this.state.letterDisplayIndex < this.state.speech.length){
    //   this.setState({image: images[this.state.letterDisplayIndex]});
    //   if((this.state.letterDisplayIndex !== this.state.speech.length - 1) && (letters[this.state.letterDisplayIndex] === ' ')){
    //     this.setState({switchInterval: 50});
    //   }
    //   else{
    //     this.setState({switchInterval: 50});
    //   }
    //   this.timerID = setTimeout(() => this.tick(images, letters), this.state.switchInterval);
    // }
    else if (this.state.letterDisplayIndex === this.state.speech.length){
      clearInterval(this.timerID);
      console.log('timer cleared');
      this.setState({image: CLOSED});
    }
    
  }
}

export default DOSPCH;