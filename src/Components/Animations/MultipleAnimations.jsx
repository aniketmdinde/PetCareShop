import React from 'react';
import Lottie from 'react-lottie';
import "./MultipleAnimations.css"

import animationOne from './../../../public/images/animations/animationone.json';
import animationTwo from './../../../public/images/animations/animationtwo.json';
import animationThree from './../../../public/images/animations/animationthree.json';
import animationFour from './../../../public/images/animations/animationfour.json';
import animationFive from './../../../public/images/animations/animationfive.json';
import animationSix from './../../../public/images/animations/animationsix.json';
import animationSeven from './../../../public/images/animations/animationseven.json';
import animationEight from './../../../public/images/animations/animationeight.json';

const MultipleAnimations = () => {
  // Define default options for each animation
  const defaultOptionsOne = {
    loop: true,
    autoplay: true,
    animationData: animationOne,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: animationTwo,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptionsThree = {
    loop: true,
    autoplay: true,
    animationData: animationThree,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const defaultOptionsFour = {
    loop: true,
    autoplay: true,
    animationData: animationFour,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const defaultOptionsFive = {
    loop: true,
    autoplay: true,
    animationData: animationFive,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};
const defaultOptionsSix = {
        loop: true,
        autoplay: true,
        animationData: animationSix,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
};
const defaultOptionsSeven = {
    loop: true,
    autoplay: true,
    animationData: animationSeven,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};
const defaultOptionsEight = {
        loop: true,
        autoplay: true,
        animationData: animationEight,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
  return (
  <>
    {/* <Lottie options={defaultOptionsOne} height={150} width={150} />
          <Lottie options={defaultOptionsTwo} height={150} width={150} />
          <Lottie options={defaultOptionsThree} height={150} width={150} />
          <Lottie options={defaultOptionsFour} height={150} width={150} />
          <Lottie options={defaultOptionsFive} height={150} width={150} />
          <Lottie options={defaultOptionsSix} height={150} width={150} />
          <Lottie options={defaultOptionsSeven} height={150} width={150} /> */}
    <div className='container'>
        <div className="main0">
          <div className="img01">
            <Lottie options={defaultOptionsThree} height={500} width={500} />
          </div>
          <h1 className="text0">Meows and Woofs</h1>
          <div className="img02">
            <Lottie options={defaultOptionsFive} height={500} width={500} />
          </div>
          
        </div>

        <div className="main1">

          <div className="text1">
            <h1 className='conehead1'>We take care of your Pet's Food and Accessories</h1>
            <p className='conetext1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti consectetur ipsa dolores id ut non corporis aperiam iste recusandae. Facilis quibusdam harum ad, odit aliquam sint obcaecati molestias dolorem corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti consectetur ipsa dolores id ut non corporis aperiam iste recusandae. Facilis quibusdam harum ad, odit aliquam sint obcaecati molestias dolorem corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti consectetur ipsa dolores id ut non corporis aperiam iste recusandae. Facilis quibusdam harum ad, odit aliquam sint obcaecati molestias dolorem corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti consectetur ipsa dolores id ut non corporis aperiam iste recusandae. Facilis quibusdam harum ad, odit aliquam sint obcaecati molestias dolorem corporis!</p>
          </div>

          <div className="img1">
            <Lottie options={defaultOptionsEight} height={600} width={600} />
          </div>

        </div>

        <div className="main2">

          <div className="img2">
          <Lottie options={defaultOptionsOne} height={300} width={300} />
          </div>
          <div className="text2">
            <h1 className='conehead2'>We take care of your Pet's Food and Accessories</h1>
            <p className='conetext2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti consectetur ipsa dolores id ut non corporis aperiam iste recusandae. Facilis quibusdam harum ad, odit aliquam sint obcaecati molestias dolorem corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti consectetur ipsa dolores id ut non corporis aperiam iste recusandae. Facilis quibusdam harum ad, odit aliquam sint obcaecati molestias dolorem corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti consectetur ipsa dolores id ut non corporis aperiam iste recusandae. Facilis quibusdam harum ad, odit aliquam sint obcaecati molestias dolorem corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti consectetur ipsa dolores id ut non corporis aperiam iste recusandae. Facilis quibusdam harum ad, odit aliquam sint obcaecati molestias dolorem corporis!</p>
          </div>

        </div>

        <div className="main3">
          <div className="text3">
            <h1 className='conehead3'>We take care of your Pet's Food and Accessories</h1>
            <p className='conetext3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti consectetur ipsa dolores id ut non corporis aperiam iste recusandae. Facilis quibusdam harum ad, odit aliquam sint obcaecati molestias dolorem corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti consectetur ipsa dolores id ut non corporis aperiam iste recusandae. Facilis quibusdam harum ad, odit aliquam sint obcaecati molestias dolorem corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti consectetur ipsa dolores id ut non corporis aperiam iste recusandae. Facilis quibusdam harum ad, odit aliquam sint obcaecati molestias dolorem corporis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti consectetur ipsa dolores id ut non corporis aperiam iste recusandae. Facilis quibusdam harum ad, odit aliquam sint obcaecati molestias dolorem corporis!</p>
          </div>
          <div className="img3">
          <Lottie options={defaultOptionsFour} height={300} width={300} />
          </div>
        </div>
        <div className="line"></div>
    </div>
</>
  );
};

export default MultipleAnimations;
