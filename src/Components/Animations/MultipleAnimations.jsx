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
            <h1 className='conehead1'>"Your Pets Deserve the Best Care"</h1>
            <p className='conetext1'>We’re here to make sure that your furry friends stay healthy, happy, and full of energy! Our carefully curated selection of food and accessories has been specially chosen to meet the unique needs of both cats and dogs. From nutritious meals to fun toys and grooming essentials, we have everything your pet could need.
Whether you have a playful puppy, a curious kitten, or a loyal senior pet, our range of products is designed to cater to pets of all ages. Trust us to provide the best quality at the best prices so that you can focus on enjoying every moment with your beloved companion.</p>
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
            <h1 className='conehead2'>"Perfect Nutrition for Your Feline Friend"</h1>
            <p className='conetext2'>Cats have unique dietary needs, and we’re here to ensure they get the best nutrition possible. Our range of cat food is formulated to promote healthy growth, a shiny coat, and overall wellness. Choose from a variety of flavors that will keep your cat coming back for more, while providing the essential nutrients they need.With our selection of accessories, treats, and toys, you can create the perfect environment for your kitty to thrive. Treat your cat to quality food and fun products that make every day a little more special!</p>
          </div>

        </div>

        <div className="main3">
          <div className="text3">
            <h1 className='conehead3'>"Pamper Your Pooch with the Best Care"</h1>
            <p className='conetext3'>Dogs bring so much joy to our lives, and we’re here to help you give them the love and care they deserve. From nutritious food that keeps them healthy and active to cozy accessories that make them feel at home, we offer everything you need to keep your furry friend happy.Explore our selection of dog products designed to support every aspect of your dog’s well-being, from grooming essentials to fun toys. Give your loyal companion the quality they deserve with products crafted to bring out the best in them.</p>
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
