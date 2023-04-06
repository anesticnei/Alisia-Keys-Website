// const logo = document.querySelector('.logo') as HTMLElement;
// const logoContainer = document.querySelector('.logo-container') as HTMLElement;
// const logoLink = document.querySelector('.logo-link') as HTMLElement;

// window.addEventListener("load", () => {
//     logoContainer.style.width = `${window.innerWidth - 80}px`;
//     logoContainer.style.transform = "scale(1)";

//     window.addEventListener('resize', () => {
//         logoContainer.style.width = `${window.innerWidth -80}px`;
//     });

//     window.addEventListener('scroll', () => {
//         const scrollPosition = window.scrollY;
//         const containerWidth = logoContainer.offsetWidth;
//         const logoWidth = logo.getBoundingClientRect().width;

//         const scale = Math.max(0.05, 1 - scrollPosition / containerWidth);
//         const x = Math.max(-logoWidth / 2 + 10, -scrollPosition / containerWidth * logoWidth / 2 + 10);
        
//         logoContainer.style.transform = `scale(${scale})`;
//     });
// });



// const logo = document.querySelector('.logo') as HTMLElement;
// const logoContainer = document.querySelector('.logo-container') as HTMLElement;
// const logoLink = document.querySelector('.logo-link') as HTMLElement;

// window.addEventListener("load", () => {
//     logoContainer.style.width = `${window.innerWidth - 80}px`;
//     logoContainer.style.transform = "scale(1)";

//     window.addEventListener('resize', () => {
//         logoContainer.style.width = `${window.innerWidth -80}px`;
//     });

//     window.addEventListener('scroll', () => {
//         const scrollPosition = window.scrollY;
//         const containerWidth = logoContainer.offsetWidth;
//         const logoWidth = logo.getBoundingClientRect().width;

//         let scale;

//         if (scrollPosition < window.innerHeight / 2) {
//           scale = Math.max(0.05, 1 - scrollPosition / containerWidth);
//         } else {
//           scale = 0.05;
//         }

//         const x = Math.max(-logoWidth / 2 + 10, -scrollPosition / containerWidth * logoWidth / 2 + 10);
        
//         logoContainer.style.transform = `scale(${scale})`;
//     });
// });



// const logo = document.querySelector('.logo') as HTMLElement;
// const logoContainer = document.querySelector('.logo-container') as HTMLElement;
// const logoLink = document.querySelector('.logo-link') as HTMLElement;

// window.addEventListener("load", () => {
//     logoContainer.style.width = `${window.innerWidth - 80}px`;
//     logoContainer.style.transform = "scale(1)";

//     window.addEventListener('resize', () => {
//         logoContainer.style.width = `${window.innerWidth -80}px`;
//     });

//     window.addEventListener('scroll', () => {
//         const scrollPosition = window.scrollY;
//         const containerWidth = logoContainer.offsetWidth;
//         const logoWidth = logo.getBoundingClientRect().width;

//         let scale;
//         if (scrollPosition < window.innerHeight * 0.5) {
//             scale = 1 - scrollPosition / containerWidth;
//         } else {
//             scale = 0.05;
//         }
        
//         logoContainer.style.transform = `scale(${scale})`;
//     });
// });

// const logo = document.querySelector('.logo') as HTMLElement;
// const logoContainer = document.querySelector('.logo-container') as HTMLElement;
// const logoLink = document.querySelector('.logo-link') as HTMLElement;

// window.addEventListener("load", () => {
//     logoContainer.style.width = `${window.innerWidth - 80}px`;
//     logoContainer.style.transform = "scale(1)";

//     window.addEventListener('resize', () => {
//         logoContainer.style.width = `${window.innerWidth -80}px`;
//     });

//     window.addEventListener('scroll', () => {
//         const scrollPosition = window.scrollY;
//         const containerWidth = logoContainer.offsetWidth;
//         const logoWidth = logo.getBoundingClientRect().width;

//         let scale;
//         if (scrollPosition < window.innerHeight * 0.5) {
//             // Use a slower scaling factor when scrolling up
//             scale = 1 - scrollPosition / containerWidth * 0.4;
//         } else {
//             // Use a faster scaling factor when scrolling down
//             const distanceToBottom = document.documentElement.scrollHeight - window.innerHeight - scrollPosition;
//             const scaleFactor = (0.05 - 1) / (window.innerHeight * 0.5);
//             scale = 1 + distanceToBottom * scaleFactor;
//         }
        
//         logoContainer.style.transform = `scale(${scale})`;
//     });
// });


// const logo = document.querySelector('.logo') as HTMLElement;
// const logoContainer = document.querySelector('.logo-container') as HTMLElement;
// const logoLink = document.querySelector('.logo-link') as HTMLElement;

// window.addEventListener("load", () => {
//     logoContainer.style.width = `${window.innerWidth - 80}px`;
//     logoContainer.style.transform = "scale(1)";

//     window.addEventListener('resize', () => {
//         logoContainer.style.width = `${window.innerWidth -80}px`;
//     });

//     window.addEventListener('scroll', () => {
//         const scrollPosition = window.scrollY;
//         const containerWidth = logoContainer.offsetWidth;
//         const logoWidth = logo.getBoundingClientRect().width;
        
//         const scale = Math.max(0.05, 1 - scrollPosition / (containerWidth * 2));

//         const x = Math.max(-logoWidth / 2 + 10, -scrollPosition / containerWidth * logoWidth / 2 + 10);
        
//         logoContainer.style.transform = `scale(${scale})`;
//     });
// });


// =======================================================================================================================================
// =======================================================================================================================================
// =======================================================================================================================================


// const logo = document.querySelector('.logo') as HTMLElement;
// const logoContainer = document.querySelector('.logo-container') as HTMLElement;
// const logoLink = document.querySelector('.logo-link') as HTMLElement;

// window.addEventListener("load", () => {
//     logoContainer.style.width = `${window.innerWidth - 80}px`;
//     logoContainer.style.transform = "scale(1)";

//     window.addEventListener('resize', () => {
//         logoContainer.style.width = `${window.innerWidth -80}px`;
//     });


//     let lastScrollTop = 0;
//     const menuBtn = document.querySelector('.menu') as HTMLElement;
//     const sectionBlur = document.querySelectorAll('.section-blur'); 

//     interface Section extends HTMLElement {
//         style: CSSStyleDeclaration & {
//           filter: string;
//         };
//       }

//     window.addEventListener('scroll', () => {
//         const scrollPosition = window.scrollY;
//         const containerWidth = logoContainer.offsetWidth;
//         const logoWidth = logo.getBoundingClientRect().width;

//         const scale = Math.max(0.05, 1 - scrollPosition * 3 / containerWidth);
//         const x = Math.max(-logoWidth / 2 + 10, -scrollPosition / containerWidth * logoWidth / 2 + 10);
        
//         logoContainer.style.transform = `scale(${scale})`;

//         const activeSection = Array.from(sectionBlur).find(section => {
//                 const sectionTop = section.getBoundingClientRect().top;
//                 // return sectionTop >= 0 && sectionTop < window.innerHeight;
//                 return sectionTop >= 0;
//               });
            
//               sectionBlur.forEach(section => {
//                 if (section === activeSection) {
//                 //   (section as Section).style.opacity = '1';
//                 //   (section as Section).style.filter = 'none';
//                 (section as Section).style.opacity = 1 - +window.pageYOffset/700 + '';
//             // } else if (section.getBoundingClientRect().top >= activeSection.getBoundingClientRect().top) {
//             } else if (section !== activeSection) {
//                 // (section as Section).style.opacity = 1 - +window.pageYOffset/700 + '';
//                 //   (section as Section).style.opacity = '0';
//                   (section as Section).style.opacity = '1';
//                   //   (section as Section).style.filter = 'blur(10px)'; // Adjust the "10" value to control the amount of blur
//                 }else{
//                     (section as Section).style.opacity = '1';

//                 }
//               });

//         // sectionBlur.forEach(section => {
//         //     // (section as Section).style.filter = "blur(10px)"; // Adjust the "10" value to control the amount of initial blur
//         //     (section as Section).style.opacity = 1 - +window.pageYOffset/700 + '';
//         //   });





//         // let menuBtn = document.querySelector('.menu') as HTMLElement;

//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//         if(scrollPosition < window.innerHeight *0.35){
//             // menuBtn.style.display = 'none';
//             // menuBtn.style.visibility = 'hidden';
//             menuBtn.style.animation = "menuOpacityIn 0s forwards";
//         }else if (scrollPosition > window.innerHeight * 0.35) {
//             menuBtn.style.display = 'block';
//             menuBtn.style.visibility = 'visible';
//             menuBtn.style.animation = "menuOpacityOut 4s forwards";
            
//         // }else if(scrollPosition > window.innerHeight * 0.5){
//             if (scrollTop > lastScrollTop) {
//                 // menuBtn.style.top = '-80px';
//                 // menuBtn.style.display = 'none';
//                 // menuBtn.style.visibility = 'hidden';
//                 // menuBtn.style.opacity = '0';
//                 menuBtn.style.animation = "menuOpacityIn 1s forwards";
//             } else {
//                 // menuBtn.style.top = '1.875rem';

//                 // menuBtn.style.display = 'block';
//                 // menuBtn.style.visibility = 'visible';
//                 // menuBtn.style.opacity = '1';
//                 menuBtn.style.animation = "menuOpacityOut 2s forwards";
//             }
//             lastScrollTop = scrollTop;

//          }

     
//     });

// });

// =======================================================================================================================================
// =======================================================================================================================================
// =======================================================================================================================================




//     let lastScrollTop = 0;
// const menuBtn = document.querySelector('.menu') as HTMLElement;
// const sections = document.querySelectorAll('.section');
// const sectionBlur = document.querySelectorAll('.section-blur'); 

// interface Section extends HTMLElement {
//   style: CSSStyleDeclaration & {
//     filter: string;
//   };
// }

// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;
//   const containerWidth = logoContainer.offsetWidth;
//   const logoWidth = logo.getBoundingClientRect().width;

//   const scale = Math.max(0.05, 1 - scrollPosition * 3 / containerWidth);
//   const x = Math.max(-logoWidth / 2 + 10, -scrollPosition / containerWidth * logoWidth / 2 + 10);

//   logoContainer.style.transform = `scale(${scale})`;

//   sections.forEach((section, index) => {
//     if (index < sections.length - 1) {
//       const nextSection = sections[index + 1];
//       const sectionBottom = section.getBoundingClientRect().bottom;
//       const nextSectionTop = nextSection.getBoundingClientRect().top;
//       if (sectionBottom > nextSectionTop) {
//         (section as Section).style.filter = "blur(10px)";
//       } else {
//         (section as Section).style.filter = "none";
//       }
//     }
//   });

//   sectionBlur.forEach(section => {
//     const sectionTop = section.getBoundingClientRect().top;
//     if (sectionTop > 0) {
//       (section as Section).style.opacity = 1 - +window.pageYOffset/700 + '';
//     } else {
//       (section as Section).style.opacity = "1";
//     }
//   });

//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if(scrollPosition < window.innerHeight *0.35){
//     menuBtn.style.animation = "menuOpacityIn 0s forwards";
//   } else if (scrollPosition > window.innerHeight * 0.35) {
//     menuBtn.style.display = 'block';
//     menuBtn.style.visibility = 'visible';
//     menuBtn.style.animation = "menuOpacityOut 4s forwards";
//   }

//   if (scrollTop > lastScrollTop) {
//     menuBtn.style.animation = "menuOpacityIn 1s forwards";
//   } else {
//     menuBtn.style.animation = "menuOpacityOut 2s forwards";
//   }
//   lastScrollTop = scrollTop;
// });



// let lastScrollTop = 0;
// const menuBtn = document.querySelector('.menu') as HTMLElement;
// const sectionBlur = document.querySelectorAll('.section-blur');

// interface Section extends HTMLElement {
//   style: CSSStyleDeclaration & {
//     filter: string;
//   };
// }

// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;
//   const containerWidth = logoContainer.offsetWidth;
//   const logoWidth = logo.getBoundingClientRect().width;

//   const scale = Math.max(0.05, 1 - scrollPosition * 3 / containerWidth);
//   const x = Math.max(-logoWidth / 2 + 10, -scrollPosition / containerWidth * logoWidth / 2 + 10);

//   logoContainer.style.transform = `scale(${scale})`;

//   const activeSection = Array.from(sectionBlur).find(section => {
//     const sectionTop = section.getBoundingClientRect().top;
//     return sectionTop >= 0 && sectionTop < window.innerHeight;
//   });

//   sectionBlur.forEach(section => {
//     if (section === activeSection) {
//       (section as Section).style.opacity = '1';
//       (section as Section).style.filter = 'none';
//     } else if (section.getBoundingClientRect().top >= activeSection.getBoundingClientRect().top) {
//       (section as Section).style.opacity = '0';
//       (section as Section).style.filter = 'blur(10px)'; // Adjust the "10" value to control the amount of blur
//     }
//   });

//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollPosition < window.innerHeight * 0.35) {
//     menuBtn.style.animation = 'menuOpacityIn 0s forwards';
//   } else if (scrollPosition > window.innerHeight * 0.35) {
//     menuBtn.style.display = 'block';
//     menuBtn.style.visibility = 'visible';
//     menuBtn.style.animation = 'menuOpacityOut 4s forwards';
//   }

//   if (scrollTop > lastScrollTop) {
//     menuBtn.style.animation = 'menuOpacityIn 1s forwards';
//   } else {
//     menuBtn.style.animation = 'menuOpacityOut 2s forwards';
//   }

//   lastScrollTop = scrollTop;
// });



// let lastScrollTop = 0;
// const menuBtn = document.querySelector('.menu') as HTMLElement;
// const sections = document.querySelectorAll('.section');
// const sectionBlur = document.querySelectorAll('.section-blur');

// interface Section extends HTMLElement {
//   style: CSSStyleDeclaration & {
//     filter: string;
//     opacity: string;
//   };
// }

// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;
//   const containerWidth = logoContainer.offsetWidth;
//   const logoWidth = logo.getBoundingClientRect().width;

//   const scale = Math.max(0.05, 1 - scrollPosition * 3 / containerWidth);
//   const x = Math.max(-logoWidth / 2 + 10, -scrollPosition / containerWidth * logoWidth / 2 + 10);

//   logoContainer.style.transform = `scale(${scale})`;

//   let prevSection: Section;
//   let currentSection: Section;
//   let nextSection: Section;

//   for (let i = 0; i < sections.length; i++) {
//     const section = sections[i] as Section;
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.offsetHeight;

//     if (scrollPosition >= sectionTop - window.innerHeight / 2) {
//       if (i === 0) {
//         prevSection = null;
//         currentSection = section;
//         nextSection = sections[i + 1] as Section;
//       } else if (i === sections.length - 1) {
//         prevSection = sections[i - 1] as Section;
//         currentSection = section;
//         nextSection = null;
//       } else {
//         prevSection = sections[i - 1] as Section;
//         currentSection = section;
//         nextSection = sections[i + 1] as Section;
//       }
//     }
//   }

//   sectionBlur.forEach(section => {
//     (section as Section).style.opacity = '0';
//   });

//   if (prevSection) {
//     const opacity = Math.max(0, Math.min(1, (scrollPosition - prevSection.offsetTop) / (prevSection.offsetHeight - window.innerHeight / 2)));
//     (prevSection as Section).style.opacity = opacity.toString();
//   }

//   if (nextSection) {
//     const opacity = Math.max(0, Math.min(1, (nextSection.offsetTop - scrollPosition) / (nextSection.offsetHeight - window.innerHeight / 2)));
//     (currentSection as Section).style.opacity = opacity.toString();
//   } else {
//     (currentSection as Section).style.opacity = '1';
//   }

//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollPosition < window.innerHeight * 0.35) {
//     menuBtn.style.animation = 'menuOpacityIn 0s forwards';
//   } else if (scrollPosition > window.innerHeight * 0.35) {
//     menuBtn.style.animation = 'menuOpacityOut 4s forwards';
//   }

//   if (scrollTop > lastScrollTop) {
//     menuBtn.style.animation = 'menuOpacityIn 1s forwards';
//   } else {
//     menuBtn.style.animation = 'menuOpacityOut 2s forwards';
//   }

//   lastScrollTop = scrollTop;
// });













// });





const openMenu = document.querySelector('.menu') as HTMLElement;
const closeMenu = document.querySelector('.close') as HTMLElement;
const hitArea = document.querySelector('.hitarea') as HTMLElement;
const navContainer = document.querySelector('.nav-container') as HTMLElement;
openMenu.addEventListener('click', () =>{
    navContainer.style.opacity = '1';
    navContainer.style.overflow = 'visible';
    navContainer.style.display = 'flex';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    closeMenu.style.display = 'block';
    document.body.style.overflow = 'hidden'
})

closeMenu.addEventListener('click', () =>{
    navContainer.style.opacity = '0';
    navContainer.style.overflow = 'hidden';
    navContainer.style.display = 'none';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    document.body.style.overflow = 'scroll'
})
hitArea.addEventListener('click', () =>{
    navContainer.style.opacity = '0';
    navContainer.style.overflow = 'hidden';
    navContainer.style.display = 'none';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    document.body.style.overflow = 'scroll'
})









const logo = document.querySelector('.logo') as HTMLElement;
const logoText = document.querySelector('.logo-text') as HTMLElement;
const logoContainer = document.querySelector('.logo-container') as HTMLElement;
const logoLink = document.querySelector('.logo-link') as HTMLElement;

window.addEventListener("load", () => {
  logoContainer.style.width = `${window.innerWidth - 80}px`;
  logoContainer.style.transform = "scale(1)";

  
  window.addEventListener('resize', () => {
      logoContainer.style.width = `${window.innerWidth -80}px`;

  });

  let lastScrollTop = 0;
  const menuBtn = document.querySelector('.menu') as HTMLElement;
  const sectionOne = document.querySelector('.section-container-1') as HTMLElement;
  const sectionTwo = document.querySelector('.section-container-2') as HTMLElement;
  const sectionThree = document.querySelector('.section-container-3') as HTMLElement;
  const sectionFour = document.querySelector('.section-container-4') as HTMLElement;

  interface Section extends HTMLElement {
    style: CSSStyleDeclaration & {
      filter: string;
    };
  }

  window.addEventListener('scroll', () => {
//   window.addEventListener('wheel', () => {
    const scrollPosition = window.scrollY;
    const containerWidth = logoContainer.offsetWidth;
    const logoWidth = logo.getBoundingClientRect().width;

    // const scale = Math.max(0.05, 1 - scrollPosition * 3 / containerWidth);
    // const x = Math.max(-logoWidth / 2 + 10, -scrollPosition / containerWidth * logoWidth / 2 + 10);
    let scale: number;
    let x: number;
    
    if (window.innerWidth > 800) {
        scale = Math.max(0.05, 1 - scrollPosition * 3 / containerWidth);
        x = Math.max(-logoWidth / 2 + 10, -scrollPosition / containerWidth * logoWidth / 2 + 10);
    } else {
        scale = Math.max(0.244, 1 - scrollPosition * 3 / containerWidth);
        x = Math.max(-logoWidth / 2 + 10, -scrollPosition / containerWidth * logoWidth / 2 + 10);
    }
    
    logoContainer.style.transform = `scale(${scale})`;


    const activeSection = [sectionOne, sectionTwo, sectionThree, sectionFour].find((section: HTMLElement) => {
        const sectionTop = section.getBoundingClientRect().top;
        return sectionTop >= 0;
    });

            if (activeSection) {
            if (sectionOne === activeSection) {
                sectionOne.style.opacity = `${1.75 - +window.pageYOffset / 700}`;
                sectionOne.style.filter = `blur(${0 + window.pageYOffset/100}px)`;
            } else {
                const sectionBottom = sectionOne.getBoundingClientRect().bottom;
                if (sectionBottom < 0 && sectionBottom <= window.innerHeight) {
                    // sectionOne.style.opacity = `${1.75 - (window.innerHeight - sectionBottom) / 700}`;
                    // sectionOne.style.filter = `blur(${20 + window.innerHeight / 700}px)`;
                    // sectionOne.style.filter = `blur(${20 + window.innerHeight + sectionBottom / 700}px)`;

                    // sectionOne.style.filter = `blur(${window.pageYOffset})`
                    // sectionOne.style.filter = `blur(${20 + (window.innerHeight - sectionBottom) / 700}px)`
                } else {
                    sectionOne.style.opacity = '1';
                    sectionOne.style.filter = "blur(0px)";
                }
            }
    }

//     // Section Two
// if (activeSection) {
//     if (sectionTwo === activeSection) {
//         sectionTwo.style.opacity = `${1.75 - +window.pageYOffset / 700}`;
//         sectionTwo.style.filter = `blur(${0 + window.pageYOffset/100}px)`;
//     } else {
//         const sectionBottom = sectionTwo.getBoundingClientRect().bottom;
//         if (sectionBottom < 0 && sectionBottom <= window.innerHeight) {
//             sectionTwo.style.filter = `blur(${20 + window.innerHeight + sectionBottom / 700}px)`;
//         } else {
//             sectionTwo.style.opacity = '1';
//             sectionTwo.style.filter = "blur(0px)";
//         }
//     }
// }

// // Section Three
// if (activeSection) {
//     if (sectionThree === activeSection) {
//         sectionThree.style.opacity = `${1.75 - +window.pageYOffset / 700}`;
//         sectionThree.style.filter = `blur(${0 + window.pageYOffset/100}px)`;
//     } else {
//         const sectionBottom = sectionThree.getBoundingClientRect().bottom;
//         if (sectionBottom < 0 && sectionBottom <= window.innerHeight) {
//             sectionThree.style.filter = `blur(${20 + window.innerHeight + sectionBottom / 700}px)`;
//         } else {
//             sectionThree.style.opacity = '1';
//             sectionThree.style.filter = "blur(0px)";
//         }
//     }
// }

// // Section Four
// if (activeSection) {
//     if (sectionFour === activeSection) {
//         sectionFour.style.opacity = `${1.75 - +window.pageYOffset / 700}`;
//         sectionFour.style.filter = `blur(${0 + window.pageYOffset/100}px)`;
//     } else {
//         const sectionBottom = sectionFour.getBoundingClientRect().bottom;
//         if (sectionBottom < 0 && sectionBottom <= window.innerHeight) {
//             sectionFour.style.filter = `blur(${20 + window.innerHeight + sectionBottom / 700}px)`;
//         } else {
//             sectionFour.style.opacity = '1';
//             sectionFour.style.filter = "blur(0px)";
//         }
//     }
// }


    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // if(scrollPosition < window.innerHeight *0.35){
        if(scrollPosition < window.innerHeight *0.15){
            // menuBtn.style.display = 'none';
            // menuBtn.style.visibility = 'hidden';
            menuBtn.style.animation = "menuOpacityIn 0s forwards";
        // }else if(scrollPosition > window.innerHeight *0.15){
        //         menuBtn.style.display = 'block';
        //         menuBtn.style.visibility = 'visible';
    // }else if (scrollPosition > window.innerHeight * 0.8) {
    //     logoText.style.fill = '#fff';



        // }else if (scrollPosition > window.innerHeight * 0.35) {
        }else if (scrollPosition > window.innerHeight * 0.55) {
            logoText.style.fill = '#fff';
            menuBtn.style.display = 'block';
            menuBtn.style.visibility = 'visible';
            // menuBtn.style.animation = "menuOpacityIn 0s forwards";
            // menuBtn.style.animation = "menuOpacityOut 4s forwards";
            
            // }else if (scrollPosition > window.innerHeight * 0.6) {
                // }else if(scrollPosition > window.innerHeight * 0.5){
            if(scrollPosition > window.innerHeight * 1.2){
                if (scrollTop > lastScrollTop) {
                    // menuBtn.style.top = '-80px';
                    // menuBtn.style.display = 'none';
                    // menuBtn.style.visibility = 'hidden';
                    // menuBtn.style.opacity = '0';
                    menuBtn.style.animation = "menuOpacityIn 1s forwards";
                    logo.style.animation = "menuOpacityIn 1s forwards";
                } else {
                    // menuBtn.style.top = '1.875rem';
    
                    // menuBtn.style.display = 'block';
                    // menuBtn.style.visibility = 'visible';
                    // menuBtn.style.opacity = '1';
                    menuBtn.style.animation = "menuOpacityOut 2s forwards";
                    logo.style.animation = "menuOpacityOut 2s forwards";
                }
                lastScrollTop = scrollTop;
            }

        // }else if (scrollPosition > window.innerHeight * 1.2) {
        //     if (scrollTop > lastScrollTop) {
        //         // menuBtn.style.top = '-80px';
        //         // menuBtn.style.display = 'none';
        //         // menuBtn.style.visibility = 'hidden';
        //         // menuBtn.style.opacity = '0';
        //         menuBtn.style.animation = "menuOpacityIn 1s forwards";
        //         logo.style.animation = "menuOpacityIn 1s forwards";
        //     } else {
        //         // menuBtn.style.top = '1.875rem';

        //         // menuBtn.style.display = 'block';
        //         // menuBtn.style.visibility = 'visible';
        //         // menuBtn.style.opacity = '1';
        //         menuBtn.style.animation = "menuOpacityOut 2s forwards";
        //         logo.style.animation = "menuOpacityOut 2s forwards";
        //     }
        //     lastScrollTop = scrollTop;
            
        }else{
            logoText.style.fill = 'none';
            
        }
  });
});





// problemy

// logo zeby sie zmiejszalo do odpowiedniej wielkosci z pelnej szerokosci odejmujac paddingi po bokach
// aktualizowanie i reloadowanie strony zbierajac informacje odnosnie szerokosci aplikujac je do szczerokosci loga
//sekcie jak jedna wskakuje na druga to sie bluruje lub opacity jest do 0 (fadeout) - duzy byl problem z blurem udalo sie to zrobic
// teraz jest problem zeby kazda sekcja robila to samo co pierwsza, a na chwile obecna nic nie robi.
//problem byl z menu buttonem ktory chcialem zeby na poczatku po zaladowaniu strony byl nie widoczny. DOpiero po chwili jak logo sie zmniejsza, chcialem aby menu wyskakiwalo.
//dodanie buttonu menu gdy zjezdzamy w dol sekcja navi znoka, natomiast jak scrollujemy do gory to nav sie pojawia z efektem opacity etc.
//duzy problem z menu... na poczatku ma go nie widac, potem pojawia sie i zostaje, natomiast jak minie odpowiednia odleglosc scrolowania
//to powinno meny zaczac dzialac na zasadzie znikania i pojawiania sie.







// const logo = document.querySelector('.logo') as HTMLElement;
// const logoContainer = document.querySelector('.logo-container') as HTMLElement;
// const logoLink = document.querySelector('.logo-link') as HTMLElement;

// window.addEventListener("load", () => {
//   logoContainer.style.width = `${window.innerWidth - 80}px`;
//   logoContainer.style.transform = "scale(1)";

//   window.addEventListener('resize', () => {
//     logoContainer.style.width = `${window.innerWidth -80}px`;
//   });

//   let lastScrollTop = 0;
//   const menuBtn = document.querySelector('.menu') as HTMLElement;

//   const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.5
//   };

//   const sectionOne = document.querySelector('.section-container-1') as HTMLElement;
//   const sectionTwo = document.querySelector('.section-container-2') as HTMLElement;
//   const sectionThree = document.querySelector('.section-container-3') as HTMLElement;
//   const sectionFour = document.querySelector('.section-container-4') as HTMLElement;

//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const section = entry.target as Section;
//         section.style.opacity = `${1.75 - +window.pageYOffset / 700}`;
//         section.style.filter = `blur(${0 + window.pageYOffset/100}px)`;
//       } else {
//         const section = entry.target as Section;
//         section.style.opacity = '1';
//         section.style.filter = "blur(0px)";
//       }
//     });
//   }, options);

//   observer.observe(sectionOne);
//   observer.observe(sectionTwo);
//   observer.observe(sectionThree);
//   observer.observe(sectionFour);

//   interface Section extends HTMLElement {
//     style: CSSStyleDeclaration & {
//       filter: string;
//     };
//   }

//   window.addEventListener('scroll', () => {
//     const scrollPosition = window.scrollY;
//     const containerWidth = logoContainer.offsetWidth;
//     const logoWidth = logo.getBoundingClientRect().width;

//     const scale = Math.max(0.05, 1 - scrollPosition * 3 / containerWidth);
//     const x = Math.max(-logoWidth / 2 + 10, -scrollPosition / containerWidth * logoWidth / 2 + 10);

//     logoContainer.style.transform = `scale(${scale})`;

//     const activeSection = [sectionOne, sectionTwo, sectionThree, sectionFour].find((section: HTMLElement) => {
//         const sectionTop = section.getBoundingClientRect().top;
//         return sectionTop >= 0;
//     });

//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if(scrollPosition < window.innerHeight *0.15){
//       menuBtn.style.animation = "menuOpacityIn 0s forwards";if(scrollPosition < window.innerHeight *0.15){
//                     // menuBtn.style.display = 'none';
//                     // menuBtn.style.visibility = 'hidden';
//                     menuBtn.style.animation = "menuOpacityIn 0s forwards";
//                 // }else if(scrollPosition > window.innerHeight *0.15){
//                 //         menuBtn.style.display = 'block';
//                 //         menuBtn.style.visibility = 'visible';
//                 }else if (scrollPosition > window.innerHeight * 0.35) {
//                     menuBtn.style.display = 'block';
//                     menuBtn.style.visibility = 'visible';
//                     // menuBtn.style.animation = "menuOpacityIn 0s forwards";
//                     // menuBtn.style.animation = "menuOpacityOut 4s forwards";
                    
//                 // }else if (scrollPosition > window.innerHeight * 0.6) {
//                 // }else if(scrollPosition > window.innerHeight * 0.5){
//                     if (scrollTop > lastScrollTop) {
//                         // menuBtn.style.top = '-80px';
//                         // menuBtn.style.display = 'none';
//                         // menuBtn.style.visibility = 'hidden';
//                         // menuBtn.style.opacity = '0';
//                         menuBtn.style.animation = "menuOpacityIn 1s forwards";
//                     } else {
//                         // menuBtn.style.top = '1.875rem';
        
//                         // menuBtn.style.display = 'block';
//                         // menuBtn.style.visibility = 'visible';
//                         // menuBtn.style.opacity = '1';
//                         menuBtn.style.animation = "menuOpacityOut 2s forwards";
//                     }
//                     lastScrollTop = scrollTop;
//                 }}
//             })
//         })
    